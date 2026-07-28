import { carregarPerfil, buscarVagas } from "./dados.js";
import { inicializarIdioma, t } from "./i18n.js";
import { analisarVagas } from "./motor.js";
import { iniciarInterface } from "./ui.js";

const terminal = document.querySelector("#terminal-content");
function renderizarErroFatal(mensagem) {
    if (!terminal) return console.error(mensagem);
    terminal.replaceChildren();
    const secao = document.createElement("section");
    secao.className = "terminal__message terminal__message--erro";
    secao.innerHTML = `<h2>${t("fatal.title")}</h2>`;
    const descricao = document.createElement("p");
    descricao.textContent = mensagem;
    secao.append(descricao);
    terminal.append(secao);
}
async function inicializarSkillMatch() {
    try {
        await iniciarInterface({ perfil: carregarPerfil(), vagas: await buscarVagas(), analisarVagas });
    } catch (erro) {
        console.error("Erro ao iniciar o SkillMatch:", erro);
        renderizarErroFatal(t("fatal.message"));
    }
}

inicializarIdioma();
inicializarSkillMatch();
