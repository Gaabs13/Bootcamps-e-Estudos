# Escolhas estéticas e composição

A interface procura equilibrar apresentação editorial e linguagem de visor audiovisual. A estrutura mantém uma ordem familiar — hero, trabalhos, filmes, sobre e contato — enquanto pequenos sinais gráficos dão identidade às seções.

## Paleta por direção de arte

```css
.theme-urban {
  --accent: #7f00ff;
  --accent-glow: #7f00ff;
}

.theme-natural {
  --accent: #00ff00;
  --accent-glow: #00ff00;
}
```

O fundo escuro serve como base comum para fotografia e vídeo. O roxo sinaliza energia urbana; o verde diferencia a leitura natural. Cor de acento aparece em hover, divisores e brilho — não substitui contraste suficiente para textos e controles.

## Hierarquia de conteúdo

1. **Hero:** imagem ou vídeo de grande escala estabelece o tom antes da navegação pelo restante da página.
2. **Trabalhos selecionados:** uma grade editorial dá prioridade às imagens; proporções e larguras podem variar para quebrar a repetição.
3. **Audiovisual:** prévias, categorias e miniaturas conectam o portfólio estático a filmes.
4. **Sobre e contato:** fecham a narrativa com apresentação e uma chamada de ação.

## Cards e galerias

- Imagens usam `object-fit: cover` para ocupar a moldura, com recorte previsível entre cartões.
- Uma grade responsiva apresenta uma coluna em telas menores e múltiplas colunas quando há espaço.
- Escala, saturação e opacidade mudam em hover para sugerir profundidade e indicar que o cartão é interativo.
- Gradiente inferior aumenta a legibilidade do título sobre a fotografia; marcadores de canto lembram um visor de câmera.
- Uma ação de ampliação e uma visualização modal dão acesso à imagem sem fazer o cartão depender somente do hover.
- Carregamento tardio de imagens limita trabalho inicial quando a galeria fica fora da primeira tela.

## Divisores e tipografia

Kickers monoespaçados, numeração de seção e linhas finas emprestam à navegação um vocabulário de interface técnica. Títulos e espaçamento editorial mantêm o ritmo de portfólio, em vez de fazer todas as áreas parecerem painéis de controle.

## Sistema consistente, não duas páginas

As duas direções compartilham componentes e sequência de seções. Tema, textos, imagens e coleção de trabalhos mudam através de configuração e dados tipados. Essa decisão mantém a estrutura navegável e evita duplicar a apresentação inteira para cada modo.

## Referências

- Aplicação: [landing-page-hero-eye.vercel.app](https://landing-page-hero-eye.vercel.app/)
- Veja também [modos visuais](01-modos-visuais.md), [hero urbano](02-hero-urbano.md) e [hero natural](03-hero-natural.md).
