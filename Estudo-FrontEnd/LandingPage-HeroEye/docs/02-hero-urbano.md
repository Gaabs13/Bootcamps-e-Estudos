# Hero urbano: lente e movimento

O hero urbano usa a metáfora de uma lente como ponto focal da primeira tela. Um vídeo em loop cria textura de fundo; anéis, brilho e elementos concêntricos constroem a sensação de um visor óptico.

## Exemplo reduzido de movimento

```tsx
const pointerX = useSpring(0, { damping: 20, stiffness: 200 });
const pointerY = useSpring(0, { damping: 20, stiffness: 200 });

useEffect(() => {
  function followPointer(event: MouseEvent) {
    const bounds = lensRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const dx = event.clientX - (bounds.left + bounds.width / 2);
    const dy = event.clientY - (bounds.top + bounds.height / 2);
    const maxOffset = Math.min(bounds.width, bounds.height) * 0.16;
    const distance = Math.min(Math.hypot(dx, dy), maxOffset);
    const angle = Math.atan2(dy, dx);

    pointerX.set(Math.cos(angle) * distance);
    pointerY.set(Math.sin(angle) * distance);
  }

  window.addEventListener('mousemove', followPointer);
  return () => window.removeEventListener('mousemove', followPointer);
}, [pointerX, pointerY]);
```

## Leitura técnica

- O centro do elemento é calculado a partir de seu retângulo na tela, então o efeito acompanha o tamanho e a posição reais da lente.
- O deslocamento é limitado proporcionalmente à menor dimensão do hero: o cursor influencia o olhar, mas não o arrasta para fora do desenho.
- `useSpring` suaviza as coordenadas, evitando que o movimento siga cada variação do ponteiro de modo rígido.
- O listener global é removido no cleanup do efeito para não deixar referências ativas após a desmontagem do componente.

Na composição, camadas sobrepostas separam fundo, sombras, brilho ambiente, anéis tipográficos e o núcleo móvel. O vídeo funciona como atmosfera; o contraste mantém o texto principal legível.

## Referências

- Aplicação: [landing-page-hero-eye.vercel.app](https://landing-page-hero-eye.vercel.app/)
- O hero correspondente aparece no projeto como `HeroEye`.
- Veja também [hero natural](03-hero-natural.md) e [direção visual](05-direcao-visual.md).
