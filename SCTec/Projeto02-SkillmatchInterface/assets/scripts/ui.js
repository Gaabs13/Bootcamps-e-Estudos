import { salvarPerfil } from "./dados.js";
import { t } from "./i18n.js";
import { loading, limparAnimado, limparTerminal, prompt, renderizarTodos } from "./terminal.js";
import {
    criarAcoes, criarBotao, criarFormulario, criarListaResultados,
    criarMensagem, criarNavegacaoResultados, criarResumoPerfil, criarTitulo
} from "./componentes.js";

const estado = {
    tela: "inicio", perfil: null, vagas: [], resultados: [], indiceResultado: 0, analisar: null, erro: ""
};
let interfaceInicializada = false;

const limparResultados = () => Object.assign(estado, { resultados: [], indiceResultado: 0 });
const trocarTela = (tela, erro = "") => {
    Object.assign(estado, { tela, erro });
    renderizarTela();
};
const aoClicar = (seletor, acao) => document.querySelector(seletor)?.addEventListener("click", acao);

window.addEventListener("skillmatch:languagechange", () => interfaceInicializada && renderizarTela());

export async function iniciarInterface({ perfil, vagas, analisarVagas }) {
    Object.assign(estado, { perfil, vagas, analisar: analisarVagas });
    await loading();
    interfaceInicializada = true;
    trocarTela(perfil ? "inicio" : "formulario");
}

function renderizarTela() {
    limparTerminal();
    ({
        inicio: renderizarInicio,
        formulario: renderizarFormulario,
        cadastro: renderizarCadastroConcluido,
        resultado: renderizarResultados,
        erro: renderizarErro
    }[estado.tela] || renderizarErro)();
}

function renderizarInicio() {
    renderizarTodos(
        criarTitulo(t("ui.profileFound"), t("ui.profileReady")),
        criarResumoPerfil(estado.perfil),
        criarAcoes(criarBotao(t("ui.start"), "btn-iniciar"), criarBotao(t("ui.newProfile"), "btn-novo"))
    );
    aoClicar("#btn-iniciar", iniciarCompatibilidade);
    aoClicar("#btn-novo", () => { limparResultados(); trocarTela("formulario"); });
}

function renderizarFormulario() {
    renderizarTodos(criarTitulo(t("ui.createProfile"), t("ui.provideData")), criarFormulario());
    document.querySelector("#perfil-form")?.addEventListener("submit", salvarNovoPerfil);
    aoClicar("#btn-voltar-form", () => trocarTela("inicio"));
}

function renderizarCadastroConcluido() {
    renderizarTodos(
        criarTitulo(t("ui.profileSent"), t("ui.registrationSuccess")),
        criarMensagem(t("ui.dataSent"), "sucesso"),
        criarAcoes(criarBotao(t("ui.back"), "btn-voltar-inicio"))
    );
    aoClicar("#btn-voltar-inicio", () => trocarTela("inicio"));
}

function renderizarResultados() {
    renderizarTodos(
        criarTitulo(t("ui.compatibilityResult"), t("ui.vacancyPosition", { current: estado.indiceResultado + 1, total: estado.resultados.length })),
        criarListaResultados(estado.resultados[estado.indiceResultado]),
        criarNavegacaoResultados(estado.indiceResultado, estado.resultados.length)
    );
    aoClicar("#btn-anterior", () => navegarResultado(-1));
    aoClicar("#btn-proximo", () => navegarResultado(1));
    aoClicar("#btn-voltar", () => { estado.indiceResultado = 0; trocarTela("inicio"); });
}

function renderizarErro() {
    renderizarTodos(criarTitulo(t("ui.error"), t("ui.cannotComplete")), criarMensagem(estado.erro || t("ui.unexpectedError"), "erro"));
}

function navegarResultado(direcao) {
    const proximoIndice = estado.indiceResultado + direcao;
    if (proximoIndice < 0 || proximoIndice >= estado.resultados.length) return;
    estado.indiceResultado = proximoIndice;
    renderizarTela();
}

async function iniciarCompatibilidade() {
    if (typeof estado.analisar !== "function") return trocarTela("erro", t("ui.engineUnavailable"));
    try {
        await limparAnimado();
        await prompt(t("ui.analyzing"));
        estado.resultados = estado.analisar(estado.perfil, estado.vagas);
        estado.indiceResultado = 0;
        if (!estado.resultados.length) return trocarTela("erro", t("ui.noVacancy"));
        await prompt(t("ui.vacanciesFound", { count: estado.resultados.length }));
        trocarTela("resultado");
    } catch (erro) {
        console.error(erro);
        trocarTela("erro", t("ui.analysisFailed"));
    }
}

function salvarNovoPerfil(evento) {
    evento.preventDefault();
    const dados = new FormData(evento.currentTarget);
    const perfil = {
        nome: dados.get("nome")?.trim(),
        idade: Number(dados.get("idade")),
        area: dados.get("area")?.trim(),
        resumoProfissional: dados.get("resumo")?.trim(),
        habilidades: dados.get("habilidades")?.split(",").map(item => item.trim()).filter(Boolean),
        experienciaMeses: Number(dados.get("experiencia")),
        instagram: dados.get("instagram")?.trim(),
        linkedin: dados.get("linkedin")?.trim(),
        github: dados.get("github")?.trim(),
        curriculo: dados.get("curriculo")?.name || ""
    };
    if (!perfil.nome || !perfil.area || !perfil.habilidades.length) return trocarTela("erro", t("ui.fillRequired"));
    salvarPerfil(perfil);
    Object.assign(estado, { perfil, resultados: [], indiceResultado: 0 });
    trocarTela("cadastro");
}
