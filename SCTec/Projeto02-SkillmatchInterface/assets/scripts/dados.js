import { VagaFrontEnd } from "./motor.js";

const STORAGE_KEY = "skillmatch.perfil";
export const MODO_DEMO = true;
export const perfilPadrao = {
    nome: "Gabriel Carlos de Souza",
    area: "Creative Front-End Developer ⚛︎ Background em Indústria Criativa | Suporte T.I",
    habilidades: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "API", "Node.js", "Git", "Atlassian Jira", "Responsividade", "Funções", "Objetos"],
    experienciaMeses: 24
};

export function carregarPerfil() {
    if (MODO_DEMO) return perfilPadrao;
    try {
        const perfil = localStorage.getItem(STORAGE_KEY);
        return perfil ? JSON.parse(perfil) : null;
    } catch (erro) {
        console.warn("Perfil salvo inválido.", erro);
        return null;
    }
}
export function salvarPerfil(perfil) {
    if (!MODO_DEMO && perfil?.nome) localStorage.setItem(STORAGE_KEY, JSON.stringify(perfil));
}
export function removerPerfil() {
    if (!MODO_DEMO) localStorage.removeItem(STORAGE_KEY);
}
export async function buscarVagas() {
    const resposta = await fetch("./assets/dados/vagas.json");
    if (!resposta.ok) throw new Error("Não foi possível carregar as vagas.");
    const vagas = await resposta.json();
    if (!Array.isArray(vagas) || !vagas.length) throw new Error("Formato inválido ou vazio do catálogo de vagas.");
    return vagas.map(vaga => new VagaFrontEnd(vaga));
}
