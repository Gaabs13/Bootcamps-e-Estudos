export class Candidato {
    constructor(perfil = {}) { Object.assign(this, perfil); }
}

export class VagaFrontEnd {
    constructor(dados = {}) { Object.assign(this, dados); }

    calcularCompatibilidade({ habilidades = [] }) {
        const requisitos = this.requisitos || [];
        const encontradas = requisitos.filter(habilidade => habilidades.includes(habilidade));
        return {
            id: this.id, empresa: this.empresa, cargo: this.cargo, salario: this.salario, modalidade: this.modalidade, requisitos,
            compatibilidade: requisitos.length ? Math.round((encontradas.length / requisitos.length) * 100) : 0,
            encontradas,
            faltantes: requisitos.filter(habilidade => !habilidades.includes(habilidade))
        };
    }
}

const classificarCompatibilidade = percentual => {
    if (percentual >= 85) return "Excelente";
    if (percentual >= 70) return "Alta";
    return percentual >= 50 ? "Média" : "Baixa";
};
const bonusExperiencia = (meses = 0) => Math.min(Math.floor(meses / 12) * 2, 10);

export function analisarVagas(perfil, vagas = []) {
    const candidato = new Candidato(perfil);
    const bonus = bonusExperiencia(candidato.experienciaMeses);
    return vagas.map(vaga => {
        const resultado = vaga.calcularCompatibilidade(candidato);
        resultado.compatibilidade = Math.min(resultado.compatibilidade + bonus, 100);
        resultado.classificacao = classificarCompatibilidade(resultado.compatibilidade);
        return resultado;
    }).sort((a, b) => b.compatibilidade - a.compatibilidade);
}

export const encontrarMelhorVaga = resultados => resultados.find(({ classificacao }) => classificacao === "Excelente") || resultados[0] || null;
export const calcularMedia = (resultados = []) => resultados.length
    ? Math.round(resultados.reduce((total, { compatibilidade }) => total + compatibilidade, 0) / resultados.length)
    : 0;
export const gerarResumo = resultados => ({ total: resultados.length, media: calcularMedia(resultados), melhorVaga: encontrarMelhorVaga(resultados) });
