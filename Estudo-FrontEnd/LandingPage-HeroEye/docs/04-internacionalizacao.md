# Internacionalização (i18n)

A interface separa idioma de modo visual. O idioma seleciona o conjunto de mensagens; as chaves que variam com a direção de arte aceitam os dois modos. Assim, uma tela pode combinar, por exemplo, texto em inglês com a visão natural.

## Exemplo reduzido de tipos e mensagens

```ts
type Language = 'pt-BR' | 'en' | 'es';
type Mode = 'urban' | 'natural';

type Messages = {
  portfolio: {
    title: string;
    introduction: Record<Mode, string>;
  };
};

const messages: Record<Language, Messages> = {
  'pt-BR': {
    portfolio: {
      title: 'Trabalhos selecionados',
      introduction: {
        urban: 'Imagens no ritmo da cidade.',
        natural: 'Imagens no ritmo da natureza.',
      },
    },
  },
  en: {
    portfolio: {
      title: 'Selected work',
      introduction: {
        urban: 'Images in the rhythm of the city.',
        natural: 'Images at nature’s pace.',
      },
    },
  },
  es: {
    portfolio: {
      title: 'Obras seleccionadas',
      introduction: {
        urban: 'Imágenes al ritmo de la ciudad.',
        natural: 'Imágenes al ritmo de la naturaleza.',
      },
    },
  },
};

const copy = messages[language];
const introduction = copy.portfolio.introduction[mode];
```

## Leitura técnica

- `Record<Language, Messages>` exige uma entrada para cada idioma suportado.
- `Record<Mode, string>` marca explicitamente o texto que depende da direção visual.
- A aplicação também atualiza `document.documentElement.lang`, o título da página e sua descrição quando idioma ou modo mudam.
- O seletor comunica sua finalidade com rótulos acessíveis, expõe a seleção com `aria-pressed` e marca o idioma do próprio botão com `lang`.

Os textos ilustrativos acima foram condensados para caber no exemplo; uma aplicação completa mantém as mensagens em arquivos de dados e tipa a estrutura compartilhada entre telas.

## Referências

- Aplicação: [landing-page-hero-eye.vercel.app](https://landing-page-hero-eye.vercel.app/)
- Referência de implementação: `LanguageSwitcher`, `copy` e metadados da aplicação.
