const traducoes = {

    pt: {
        meta: { title: "SkillMatch • O seu próximo match na carreira dev", description: "SkillMatch - Descubra a vaga ideal para o seu perfil através de uma análise inteligente de compatibilidade." },
        static: { languageLabel: "Selecionar idioma", heroSubtitle: "O seu próximo match na carreira dev pode estar próximo.", heroDescription: "Descubra quais vagas combinam com seu perfil utilizando uma análise inteligente baseada nas suas habilidades.", terminalLabel: "Painel principal", footer: "© 2026 SkillMatch • Desenvolvido por Gabriel Carlos de Souza" },
        loading: ["Inicializando SkillMatch...", "Carregando perfil...", "Buscando vagas...", "Preparando motor de compatibilidade..."],
        ui: { profileFound: "Perfil Compatível Encontrado", profileReady: "Seu perfil está carregado e pronto para análise.", start: "Iniciar Compatibilidade", newProfile: "Criar Novo Perfil", createProfile: "Criar Novo Perfil", provideData: "Informe seus dados.", profileSent: "Perfil enviado", registrationSuccess: "Sua demonstração de cadastro foi realizada com sucesso.", dataSent: "Os dados foram enviados para análise do SkillMatch.", back: "← Voltar", compatibilityResult: "Resultado da Compatibilidade", vacancyPosition: "Vaga {current} de {total}", error: "Erro", cannotComplete: "Não foi possível concluir a operação.", unexpectedError: "Erro inesperado.", engineUnavailable: "Motor de compatibilidade indisponível.", analyzing: "Analisando perfil do candidato...", vacanciesFound: "{count} vaga(s) encontrada(s).", noVacancy: "Nenhuma vaga encontrada.", analysisFailed: "Falha ao analisar as vagas.", fillRequired: "Preencha todos os campos obrigatórios." },
        form: {
            name: "Nome",
            namePlaceholder: "Seu nome completo",
            age: "Idade",
            agePlaceholder: "Sua idade",
            area: "Área",
            areaPlaceholder: "Front-End, Back-End...",
            summary: "Resumo Profissional",
            summaryPlaceholder: "Empresas, cargos e tempo de atuação...",
            skills: "Habilidades",
            skillsPlaceholder: "HTML, CSS, JavaScript...",
            skillsHelp: "Separe cada habilidade utilizando vírgulas.",
            experience: "Experiência (meses)",
            instagram: "Instagram",
            instagramPlaceholder: "https://instagram.com/seuusuario",
            linkedin: "LinkedIn",
            linkedinPlaceholder: "https://linkedin.com/in/seuusuario",
            github: "GitHub",
            githubPlaceholder: "https://github.com/seuusuario",
            resume: "Currículo",
            resumeHelp: "Anexe seu arquivo de currículo (.pdf, .doc, .docx)",
            save: "Salvar Perfil"
        },
        profile: {
            candidate: "Candidato compatível",
            photoAlt: "Foto de {name}",
            name: "Nome",
            area: "Área",
            age: "Idade",
            experience: "Experiência",
            skills: "Habilidades",
            summary: "Resumo Profissional",
            resume: "Currículo",
            month: "{count} mês",
            months: "{count} meses",
            year: "{count} ano",
            years: "{count} anos"
        },
        vacancy: { compatibility: "Compatibilidade", classification: "Classificação", modality: "Modalidade", salary: "Salário", foundSkills: "Competências encontradas", recommendedSkills: "Competências recomendadas", none: "Nenhuma", previous: "← Anterior", next: "Próxima →" },
        fatal: { title: "Erro ao iniciar", message: "Não foi possível carregar a aplicação." }
    },

    en: {
        meta: { title: "SkillMatch • Your next match in a dev career", description: "SkillMatch - Find the ideal job for your profile through smart compatibility analysis." },
        static: { languageLabel: "Select language", heroSubtitle: "Your next match in a dev career may be closer than you think.", heroDescription: "Find roles that fit your profile with a smart analysis based on your skills.", terminalLabel: "Main panel", footer: "© 2026 SkillMatch • Developed by Gabriel Carlos de Souza" },
        loading: ["Starting SkillMatch...", "Loading profile...", "Searching jobs...", "Preparing compatibility engine..."],
        ui: { profileFound: "Compatible Profile Found", profileReady: "Your profile is loaded and ready for analysis.", start: "Start Compatibility", newProfile: "Create New Profile", createProfile: "Create New Profile", provideData: "Enter your details.", profileSent: "Profile sent", registrationSuccess: "Your registration demo was completed successfully.", dataSent: "Your data has been sent for SkillMatch analysis.", back: "← Back", compatibilityResult: "Compatibility Result", vacancyPosition: "Job {current} of {total}", error: "Error", cannotComplete: "We couldn't complete the operation.", unexpectedError: "Unexpected error.", engineUnavailable: "Compatibility engine unavailable.", analyzing: "Analyzing candidate profile...", vacanciesFound: "{count} job(s) found.", noVacancy: "No jobs found.", analysisFailed: "Failed to analyze jobs.", fillRequired: "Please fill in all required fields." },
        form: {
            name: "Name",
            namePlaceholder: "Your full name",
            age: "Age",
            agePlaceholder: "Your age",
            area: "Field",
            areaPlaceholder: "Front-End, Back-End...",
            summary: "Professional Summary",
            summaryPlaceholder: "Companies, roles and duration...",
            skills: "Skills",
            skillsPlaceholder: "HTML, CSS, JavaScript...",
            skillsHelp: "Separate each skill with commas.",
            experience: "Experience (months)",
            instagram: "Instagram",
            instagramPlaceholder: "https://instagram.com/yourusername",
            linkedin: "LinkedIn",
            linkedinPlaceholder: "https://linkedin.com/in/yourusername",
            github: "GitHub",
            githubPlaceholder: "https://github.com/yourusername",
            resume: "Resume",
            resumeHelp: "Attach your resume file (.pdf, .doc, .docx)",
            save: "Save Profile"
        },
        profile: {
            candidate: "Compatible candidate",
            photoAlt: "Photo of {name}",
            name: "Name",
            area: "Field",
            age: "Age",
            experience: "Experience",
            skills: "Skills",
            summary: "Professional Summary",
            resume: "Resume",
            month: "{count} month",
            months: "{count} months",
            year: "{count} year",
            years: "{count} years"
        },
        vacancy: { compatibility: "Compatibility", classification: "Classification", modality: "Work model", salary: "Salary", foundSkills: "Matching skills", recommendedSkills: "Recommended skills", none: "None", previous: "← Previous", next: "Next →" },
        fatal: { title: "Startup error", message: "We couldn't load the application." }
    },

    es: {
        meta: { title: "SkillMatch • Tu próximo match en una carrera dev", description: "SkillMatch - Descubre la vacante ideal para tu perfil con un análisis inteligente de compatibilidad." },
        static: { languageLabel: "Seleccionar idioma", heroSubtitle: "Tu próximo match en una carrera dev puede estar más cerca de lo que crees.", heroDescription: "Descubre vacantes que encajan con tu perfil mediante un análisis inteligente basado en tus habilidades.", terminalLabel: "Panel principal", footer: "© 2026 SkillMatch • Desarrollado por Gabriel Carlos de Souza" },
        loading: ["Iniciando SkillMatch...", "Cargando perfil...", "Buscando vacantes...", "Preparando el motor de compatibilidad..."],
        ui: { profileFound: "Perfil Compatible Encontrado", profileReady: "Tu perfil está cargado y listo para el análisis.", start: "Iniciar Compatibilidad", newProfile: "Crear Nuevo Perfil", createProfile: "Crear Nuevo Perfil", provideData: "Ingresa tus datos.", profileSent: "Perfil enviado", registrationSuccess: "Tu demostración de registro se completó correctamente.", dataSent: "Tus datos fueron enviados para el análisis de SkillMatch.", back: "← Volver", compatibilityResult: "Resultado de Compatibilidad", vacancyPosition: "Vacante {current} de {total}", error: "Error", cannotComplete: "No se pudo completar la operación.", unexpectedError: "Error inesperado.", engineUnavailable: "Motor de compatibilidad no disponible.", analyzing: "Analizando el perfil del candidato...", vacanciesFound: "{count} vacante(s) encontrada(s).", noVacancy: "No se encontraron vacantes.", analysisFailed: "No se pudieron analizar las vacantes.", fillRequired: "Completa todos los campos obligatorios." },
        form: {
            name: "Nombre",
            namePlaceholder: "Tu nombre completo",
            age: "Edad",
            agePlaceholder: "Tu edad",
            area: "Área",
            areaPlaceholder: "Front-End, Back-End...",
            summary: "Resumen Profesional",
            summaryPlaceholder: "Empresas, cargos y tiempo de actuación...",
            skills: "Habilidades",
            skillsPlaceholder: "HTML, CSS, JavaScript...",
            skillsHelp: "Separa cada habilidad con comas.",
            experience: "Experiencia (meses)",
            instagram: "Instagram",
            instagramPlaceholder: "https://instagram.com/tuusuario",
            linkedin: "LinkedIn",
            linkedinPlaceholder: "https://linkedin.com/in/tuusuario",
            github: "GitHub",
            githubPlaceholder: "https://github.com/tuusuario",
            resume: "Currículum",
            resumeHelp: "Adjunta tu currículum (.pdf, .doc, .docx)",
            save: "Guardar Perfil"
        },
        profile: {
            candidate: "Candidato compatible",
            photoAlt: "Foto de {name}",
            name: "Nombre",
            area: "Área",
            age: "Edad",
            experience: "Experiencia",
            skills: "Habilidades",
            summary: "Resumen Profesional",
            resume: "Currículum",
            month: "{count} mes",
            months: "{count} meses",
            year: "{count} año",
            years: "{count} años"
        },
        vacancy: { compatibility: "Compatibilidad", classification: "Clasificación", modality: "Modalidad", salary: "Salario", foundSkills: "Habilidades encontradas", recommendedSkills: "Habilidades recomendadas", none: "Ninguna", previous: "← Anterior", next: "Siguiente →" },
        fatal: { title: "Error al iniciar", message: "No se pudo cargar la aplicación." }
    }

};

const valoresTraduzidos = {

    en: {
        "Creative Front-End Developer ⚛︎ Background em Indústria Criativa | Suporte T.I": "Creative Front-End Developer ⚛︎ Background in the Creative Industry | IT Support",
        "Responsividade": "Responsive Design",
        "Funções": "Functions",
        "Objetos": "Objects",
        "Front-End Júnior": "Junior Front-End Developer",
        "Desenvolvedor Front-End": "Front-End Developer",
        "Programador JavaScript Jr": "Junior JavaScript Developer",
        "Remoto": "Remote",
        "Híbrido": "Hybrid",
        "Presencial": "On-site",
        "Excelente": "Excellent",
        "Alta": "High",
        "Média": "Medium",
        "Baixa": "Low"
    },

    es: {
        "Creative Front-End Developer ⚛︎ Background em Indústria Criativa | Suporte T.I": "Desarrollador Front-End Creativo ⚛︎ Formación en Industria Creativa | Soporte de TI",
        "Responsividade": "Diseño adaptable",
        "Funções": "Funciones",
        "Objetos": "Objetos",
        "Front-End Júnior": "Desarrollador Front-End Junior",
        "Desenvolvedor Front-End": "Desarrollador Front-End",
        "Programador JavaScript Jr": "Programador JavaScript Junior",
        "Remoto": "Remoto",
        "Híbrido": "Híbrido",
        "Presencial": "Presencial",
        "Excelente": "Excelente",
        "Alta": "Alta",
        "Média": "Media",
        "Baixa": "Baja"
    }

};

let idiomaAtual = localStorage.getItem("skillmatch-language") || "pt";

function valorDaChave(chave, idioma = idiomaAtual) {

    return chave.split(".").reduce((valor, parte) => valor?.[parte], traducoes[idioma]);

}

export function t(chave, parametros = {}) {

    const texto = valorDaChave(chave) ?? valorDaChave(chave, "pt") ?? chave;

    return typeof texto === "string"
        ? texto.replace(/\{(\w+)\}/g, (_, chaveParametro) => parametros[chaveParametro] ?? `{${chaveParametro}}`)
        : texto;

}

export function obterIdioma() {

    return idiomaAtual;

}

export function traduzirConteudo(valor) {

    if (Array.isArray(valor)) return valor.map(traduzirConteudo);

    if (typeof valor !== "string") return valor;

    return valoresTraduzidos[idiomaAtual]?.[valor] ?? valor;

}

export function aplicarIdiomaNaPagina() {

    document.documentElement.lang = idiomaAtual === "pt" ? "pt-BR" : idiomaAtual;

    document.querySelectorAll("[data-i18n]").forEach(elemento => {

        elemento.textContent = t(elemento.dataset.i18n);

    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach(elemento => {

        elemento.setAttribute("aria-label", t(elemento.dataset.i18nAriaLabel));

    });

    document.title = t("meta.title");

    document.querySelector('meta[name="description"]')?.setAttribute("content", t("meta.description"));

    document.querySelectorAll("[data-language]").forEach(botao => {

        const ativo = botao.dataset.language === idiomaAtual;

        botao.classList.toggle("is-active", ativo);

        botao.setAttribute("aria-pressed", String(ativo));

    });

}

export function definirIdioma(idioma) {

    if (!traducoes[idioma] || idioma === idiomaAtual) return;

    idiomaAtual = idioma;

    localStorage.setItem("skillmatch-language", idioma);

    aplicarIdiomaNaPagina();

    window.dispatchEvent(new CustomEvent("skillmatch:languagechange"));

}

export function inicializarIdioma() {

    document.querySelectorAll("[data-language]").forEach(botao => {

        botao.addEventListener("click", () => definirIdioma(botao.dataset.language));

    });

    aplicarIdiomaNaPagina();

}
