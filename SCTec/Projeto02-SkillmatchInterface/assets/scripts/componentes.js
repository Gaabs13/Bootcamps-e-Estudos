import { t, traduzirConteudo } from "./i18n.js";

const escaparHtml = (valor = "") => String(valor)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");

const criarElemento = (tag, classe, conteudo = "") => {
    const elemento = document.createElement(tag);
    elemento.className = classe;
    elemento.innerHTML = conteudo;
    return elemento;
};

const textoLista = (itens, vazio = "-") => itens.length ? itens.map(escaparHtml).join(", ") : vazio;
const criarCampoInfo = (titulo, valor) => `
    <div class="terminal__line">
        <span class="terminal__muted">${titulo}</span>
        <span class="terminal__text">${valor}</span>
    </div>`;
const criarInfoVaga = (titulo, valor, classe = "") => `
    <div class="vaga-card__info"><strong>${titulo}</strong><span class="${classe}">${valor}</span></div>`;
const urlExternaSegura = url => {
    try {
        const destino = new URL(url);
        return ["http:", "https:"].includes(destino.protocol) ? destino.href : "";
    } catch {
        return "";
    }
};

export function criarTitulo(titulo, descricao) {
    return criarElemento("section", "terminal__welcome fade-in", `<h2>${titulo}</h2><p>${descricao}</p>`);
}

export function criarBotao(texto, id, classe = "terminal__button", tipo = "button") {
    const botao = document.createElement("button");
    Object.assign(botao, { type: tipo, id, className: classe, textContent: texto });
    botao.setAttribute("aria-label", texto);
    return botao;
}

export function criarAcoes(...botoes) {
    const container = criarElemento("div", "terminal__actions");
    container.append(...botoes.filter(Boolean));
    return container;
}

export function criarResumoPerfil(perfil = {}) {
    const { nome = "-", area = "-", experienciaMeses = 0, habilidades = [], idade, resumoProfissional, curriculo } = perfil;
    const links = [["Instagram", perfil.instagram], ["LinkedIn", perfil.linkedin], ["GitHub", perfil.github]]
        .map(([nomeLink, url]) => [nomeLink, urlExternaSegura(url)])
        .filter(([, url]) => url);
    const detalhes = [
        Number.isFinite(idade) && idade > 0 && [t("profile.age"), `${idade} ${idade === 1 ? t("profile.year") : t("profile.years")}`],
        [t("profile.experience"), experienciaMeses === 1 ? t("profile.month") : t("profile.months", { count: experienciaMeses })],
        [t("profile.skills"), textoLista(traduzirConteudo(habilidades))]
    ].filter(Boolean).map(([titulo, valor]) => criarCampoInfo(titulo, escaparHtml(valor))).join("");

    return criarElemento("section", "terminal__profile fade-in", `
        <div class="terminal__profile-header">
            <img src="./assets/img/gabsquem.png" alt="${escaparHtml(t("profile.photoAlt", { name }))}" class="terminal__profile-photo">
            <div><span class="terminal__profile-eyebrow">${t("profile.candidate")}</span><h3>${escaparHtml(nome)}</h3><span class="terminal__text">${escaparHtml(traduzirConteudo(area))}</span></div>
        </div>
        <div class="terminal__profile-details">${detalhes}</div>
        ${resumoProfissional ? `<div class="terminal__profile-summary"><h4>${t("profile.summary")}</h4><p>${escaparHtml(resumoProfissional)}</p></div>` : ""}
        ${links.length ? `<div class="terminal__profile-links">${links.map(([nomeLink, url]) => `<a href="${escaparHtml(url)}" target="_blank" rel="noopener noreferrer">${nomeLink}</a>`).join("")}</div>` : ""}
        ${curriculo ? `<div class="terminal__profile-curriculum"><span class="terminal__muted">${t("profile.resume")}</span><span class="terminal__text">${escaparHtml(curriculo)}</span></div>` : ""}`);
}

const camposFormulario = [
    ["nome", "text", "form.name", "form.namePlaceholder", { autocomplete: "name", required: true }],
    ["idade", "number", "form.age", "form.agePlaceholder", { min: 0 }],
    ["area", "text", "form.area", "form.areaPlaceholder", { required: true }],
    ["resumo", "textarea", "form.summary", "form.summaryPlaceholder", { rows: 4 }],
    ["habilidades", "textarea", "form.skills", "form.skillsPlaceholder", { rows: 4, required: true, help: "form.skillsHelp" }],
    ["instagram", "url", "form.instagram", "form.instagramPlaceholder"],
    ["linkedin", "url", "form.linkedin", "form.linkedinPlaceholder"],
    ["github", "url", "form.github", "form.githubPlaceholder"],
    ["curriculo", "file", "form.resume", null, { accept: ".pdf,.doc,.docx", help: "form.resumeHelp" }],
    ["experiencia", "number", "form.experience", null, { min: 0, value: 0 }]
];

const criarCampoFormulario = ([nome, tipo, chaveLabel, chavePlaceholder, opcoes = {}]) => {
    const { help, ...atributos } = opcoes;
    const atributosHtml = Object.entries(atributos).map(([chave, valor]) => valor === true ? chave : `${chave}="${valor}"`).join(" ");
    const placeholder = chavePlaceholder ? `placeholder="${t(chavePlaceholder)}"` : "";
    const controle = tipo === "textarea"
        ? `<textarea id="${nome}" name="${nome}" ${atributosHtml} ${placeholder}></textarea>`
        : `<input id="${nome}" name="${nome}" type="${tipo}" ${atributosHtml} ${placeholder}>`;
    return `<div class="terminal__field"><label for="${nome}">${t(chaveLabel)}</label>${controle}${help ? `<small>${t(help)}</small>` : ""}</div>`;
};

export function criarFormulario() {
    const form = criarElemento("form", "terminal__form", camposFormulario.map(criarCampoFormulario).join(""));
    form.id = "perfil-form";
    form.append(criarAcoes(
        criarBotao(t("form.save"), "btn-salvar", "terminal__button", "submit"),
        criarBotao(t("ui.back"), "btn-voltar-form", "terminal__button terminal__button--ghost")
    ));
    return form;
}

export function criarCardVaga(vaga = {}) {
    const { empresa = "-", cargo = "-", compatibilidade = 0, classificacao = "-", modalidade = "-", salario = "-", encontradas = [], faltantes = [] } = vaga;
    const classeCompatibilidade = compatibilidade >= 100 ? "compatibilidade-max" : "compatibilidade-normal";
    const habilidades = itens => textoLista(traduzirConteudo(itens), t("vacancy.none"));
    return criarElemento("article", "vaga-card fade-in", `
        <header class="vaga-card__header"><div><h3 class="vaga-card__cargo">${escaparHtml(traduzirConteudo(cargo))}</h3><span class="vaga-card__empresa">${escaparHtml(empresa)}</span></div></header>
        <section class="vaga-card__body">
            ${criarInfoVaga(t("vacancy.compatibility"), `${compatibilidade}%`, classeCompatibilidade)}
            ${criarInfoVaga(t("vacancy.classification"), escaparHtml(traduzirConteudo(classificacao)))}
            ${criarInfoVaga(t("vacancy.modality"), escaparHtml(traduzirConteudo(modalidade)))}
            ${criarInfoVaga(t("vacancy.salary"), escaparHtml(salario))}
        </section>
        <section class="vaga-card__skills"><h4>${t("vacancy.foundSkills")}</h4><p>${habilidades(encontradas)}</p></section>
        <section class="vaga-card__skills"><h4>${t("vacancy.recommendedSkills")}</h4><p>${habilidades(faltantes)}</p></section>`);
}

export function criarListaResultados(resultado) {
    const container = criarElemento("section", "terminal__results");
    container.append(resultado ? criarCardVaga(resultado) : criarMensagem(t("ui.noVacancy"), "info"));
    return container;
}

export function criarNavegacaoResultados(indiceAtual, total) {
    const container = criarElemento("section", "terminal__navigation");
    const voltar = criarElemento("div", "terminal__navigation-top");
    voltar.append(criarBotao(t("ui.back"), "btn-voltar", "terminal__button terminal__button--ghost"));
    const anterior = criarBotao(t("vacancy.previous"), "btn-anterior");
    const indicador = criarBotao(t("ui.vacancyPosition", { current: indiceAtual + 1, total }), "btn-indicador", "terminal__button terminal__button--disabled");
    const proximo = criarBotao(t("vacancy.next"), "btn-proximo");
    anterior.disabled = indiceAtual === 0;
    indicador.disabled = true;
    proximo.disabled = indiceAtual >= total - 1;
    container.append(voltar, criarAcoes(
        anterior, indicador, proximo
    ));
    return container;
}

export function criarMensagem(texto, tipo = "info") {
    const mensagem = criarElemento("div", `terminal__message terminal__message--${tipo}`);
    mensagem.textContent = texto;
    return mensagem;
}
