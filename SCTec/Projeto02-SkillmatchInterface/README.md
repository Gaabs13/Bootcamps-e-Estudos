# 💼 SkillMatch Web

> Projeto desenvolvido como avaliação final do **Módulo 01** do curso **Desenvolvimento Web**, promovido pela **SCtec**.

O **SkillMatch Web** transforma o motor de compatibilidade desenvolvido anteriormente em JavaScript (Console) em uma aplicação Web completa, permitindo que candidatos informem seu perfil profissional e descubram seu nível de compatibilidade com vagas da área de tecnologia.


# 📖 Sobre a SCtec

A **SCtec** é uma instituição voltada para a formação de profissionais de tecnologia, utilizando uma abordagem prática baseada em projetos.

Durante o Módulo 01 foram abordados conceitos fundamentais de desenvolvimento Front-End, incluindo:

• HTML5
• CSS3
• JavaScript
• Programação Orientada a Objetos
• DOM
• Eventos
• Responsividade
• SEO
• Acessibilidade
• Fetch API
• LocalStorage
• Modularização
• Git e GitHub

Este projeto reúne os principais conhecimentos apresentados ao longo do módulo em uma única aplicação.


# 🚀 Sobre o Projeto

O SkillMatch Web simula uma plataforma de recrutamento para desenvolvedores.

A aplicação permite que o usuário:

• Cadastrar um perfil profissional;
• Analisar compatibilidade com vagas;
• Visualizar percentual de compatibilidade;
• identificar competências encontradas;
• Visualizar competências recomendadas;
• Receber sugestões de estudo.

Todo o conteúdo da interface é renderizado dinamicamente utilizando JavaScript puro.

Link do Kanban: https://trello.com/b/O1yQPu8x/sctec
Link Vídeo Explicativo: https://vimeo.com/1211456758?share=copy&fl=sv&fe=ci

# 🔄 Fluxo da Aplicação

```text
Página Inicial

      ▼

Perfil Encontrado

      ▼

Novo Cadastro

      ▼

Confirmação do Cadastro

      ▼

Análise de Compatibilidade

      ▼

Resultado das Vagas

      ▼

Recomendação de Estudos
```

---

# 🏗 Arquitetura

A aplicação foi organizada utilizando **ES Modules**, separando responsabilidades entre os arquivos.

                         | Arquivo | Responsabilidade |
                      |---------------|------------------|
                 | **main.js** | Inicialização da aplicação |
                                      ▼
        | **motor.js** | Regras de negócio e cálculo de compatibilidade |
                                      ▼
          | **ui.js** | Fluxo das telas e gerenciamento da interface |
                                      ▼
        | **componentes.js** | Biblioteca de componentes reutilizáveis |
                                      ▼
        | **terminal.js** | Renderização, animações e efeitos visuais  |
                                      ▼
       |  **dados.js** | Fetch das vagas e persistência em LocalStorage |
                                      ▼
            | **i18n.js** | Internacionalização da interface |


# 📌 Cadastro

O cadastro presente nesta versão possui finalidade demonstrativa.

A interface já está preparada para envio dos dados, porém a persistência definitiva será realizada futuramente através de uma integração com **n8n**, permitindo automatizar o envio para banco de dados, APIs ou CRMs sem alterar a arquitetura da aplicação.

---

# ✅ Requisitos Atendidos

### Motor SkillMatch

✅ Perfil modelado em objeto
✅ Catálogo de vagas em JSON
✅ Cálculo de compatibilidade
✅ Classificação das vagas
✅ Melhor vaga identificada
✅ Recomendação de estudos
✅ Métodos de Array (map, filter, reduce, etc.)
✅ Programação Orientada a Objetos
✅ Herança
✅ Utilização de `this`
✅ Callback
✅ Closure

### Interface

✅ HTML semântico
✅ SEO básico
✅ Acessibilidade
✅ Formulário com validação
✅ Eventos com JavaScript
✅ Renderização dinâmica
✅ Cards criados pelo DOM
✅ Responsividade Mobile First
✅ Layout utilizando Flexbox

### Dados

✅ Fetch API
✅ Tratamento de carregamento
✅ Tratamento de lista vazia
✅ Tratamento de erros
✅ LocalStorage
✅ Persistência do perfil

### Organização

✅ ES Modules
✅ Código modular
✅ Git
✅ GitHub
✅ Kanban
✅ README técnico


# ⭐ Funcionalidades Extras

Além dos requisitos obrigatórios, foram adicionadas melhorias visando organização, escalabilidade e experiência do usuário.

⭐ Interface inspirada em terminal interativo
⭐ Sistema completo de internacionalização (i18n)
⭐ Biblioteca de componentes reutilizáveis
⭐ Arquitetura modular desacoplada
⭐ Separação em camadas (Dados • Motor • Interface)
⭐ Sistema de renderização dinâmica
⭐ Preparação para integração com n8n
⭐ CSS organizado por blocos funcionais
⭐ Navegação refinada entre resultados
⭐ Estrutura preparada para futuras integrações com IA



# 🛠 Tecnologias

• HTML5
• CSS3
• JavaScript (ES Modules)
• Fetch API
• LocalStorage
• Flexbox
• Responsive Design
• Git
• GitHub

---

# 🚀 Como executar

Clone o projeto:

```bash
git clone <repositorio>
```

Abra a pasta no **Visual Studio Code** e execute utilizando o **Live Server**.

> A aplicação utiliza ES Modules e Fetch API, portanto deve ser executada através de um servidor local.


# 🔮 Melhorias futuras que podem ser aplicadas

- Integração completa com n8n
- Persistência em banco de dados
- Login de candidatos
- Painel administrativo
- Recomendações utilizando IA
- Tradução para novos idiomas
- Deploy em produção


> Desenvolvido por **Gabriel Carlos de Souza** como projeto avaliativo do **Módulo 01** do curso **Desenvolvimento Web — SCtec**.
