import { t } from "./i18n.js";

const terminal = document.querySelector("#terminal-content");
if (!terminal) throw new Error('Elemento "#terminal-content" não encontrado.');

const CONFIG = { velocidadeDigitacao: 18, tempoLoading: 500 };
const criarLinha = () => {
    const linha = document.createElement("div");
    linha.className = "terminal__line";
    terminal.append(linha);
    return linha;
};

export const esperar = (ms = CONFIG.tempoLoading) => new Promise(resolve => setTimeout(resolve, ms));
export const limparTerminal = () => terminal.replaceChildren();
export const renderizar = elemento => elemento && terminal.append(elemento);
export const renderizarTodos = (...elementos) => elementos.filter(Boolean).forEach(renderizar);

async function escreverComPrefixo(texto, prefixo = "") {
    const linha = criarLinha();
    if (prefixo) {
        const indicador = document.createElement("span");
        indicador.className = "terminal__prompt";
        indicador.textContent = prefixo;
        linha.append(indicador);
    }
    const conteudo = document.createElement("span");
    conteudo.className = "terminal__text";
    linha.append(conteudo);
    for (const caractere of texto) {
        conteudo.textContent += caractere;
        await esperar(CONFIG.velocidadeDigitacao);
    }
    return linha;
}

export const escrever = (texto = "") => escreverComPrefixo(texto);
export const prompt = (texto = "") => escreverComPrefixo(texto, ">");
export function escreverInstantaneo(texto = "") {
    const linha = criarLinha();
    linha.textContent = texto;
    return linha;
}
export async function limparAnimado() {
    terminal.style.opacity = ".35";
    await esperar(180);
    limparTerminal();
    terminal.style.opacity = "1";
}
export async function loading() {
    limparTerminal();
    for (const etapa of t("loading")) {
        await prompt(etapa);
        await esperar();
    }
}
export const scrollFinal = () => { terminal.scrollTop = terminal.scrollHeight; };

export default { esperar, limparTerminal, limparAnimado, renderizar, renderizarTodos, escrever, escreverInstantaneo, prompt, loading, scrollFinal };
