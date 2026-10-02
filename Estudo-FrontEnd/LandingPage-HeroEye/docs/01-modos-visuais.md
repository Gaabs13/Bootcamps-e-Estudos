# Alternância entre modos visuais

O seletor mantém um estado pequeno e tipado. A interface deriva dele a coleção de trabalhos e a configuração visual, em vez de duplicar a página inteira para cada direção de arte.

## Exemplo reduzido

```tsx
type Mode = 'urban' | 'natural';

const worksByMode = {
  urban: urbanWorks,
  natural: naturalWorks,
};

function Portfolio() {
  const [mode, setMode] = useState<Mode>('urban');
  const [view, setView] = useState<'home' | 'project'>('home');
  const prefersReducedMotion = useReducedMotion();

  const works = worksByMode[mode];
  const theme = modeConfig[mode];

  function selectMode(nextMode: Mode) {
    setMode(nextMode);
    setView('home');
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  }

  return (
    <main className={theme.pageBackground}>
      <ModeSwitcher value={mode} onChange={selectMode} />
      {view === 'home' && <SelectedWorks items={works} />}
    </main>
  );
}
```

## Leitura técnica

- `Mode` limita os valores aceitos e permite que TypeScript detecte seleções inválidas.
- A coleção e o tema são valores derivados do mesmo estado; isso mantém conteúdo e aparência alinhados.
- Ao trocar de direção visual, a navegação retorna à página inicial e a rolagem volta ao topo. Assim, um detalhe de projeto não permanece selecionado em outro contexto.
- Os componentes recebem valores e callbacks por props; não precisam conhecer a implementação do seletor.

Na aplicação, textos e imagens específicos de cada modo vivem em módulos de dados próprios. Este trecho mostra somente a relação entre estado, configuração e conteúdo.

## Referências

- Aplicação: [landing-page-hero-eye.vercel.app](https://landing-page-hero-eye.vercel.app/)
- Veja também [direção visual](05-direcao-visual.md).
