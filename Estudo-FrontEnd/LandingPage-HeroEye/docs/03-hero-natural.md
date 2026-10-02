# Hero natural: paisagem e orientação

O hero natural troca o motivo óptico por uma paisagem enquadrada. Uma imagem fixa estabelece a cena, enquanto o vídeo e elementos gráficos de orientação acrescentam profundidade sem repetir a gramática visual urbana.

## Exemplo reduzido de movimento

```tsx
const pointerX = useSpring(0, { damping: 25, stiffness: 150 });
const pointerY = useSpring(0, { damping: 25, stiffness: 150 });

useEffect(() => {
  function mapPointer(event: MouseEvent) {
    const bounds = sceneRef.current?.getBoundingClientRect();
    if (!bounds) return;

    pointerX.set(((event.clientX - bounds.left) / bounds.width) * 2 - 1);
    pointerY.set(((event.clientY - bounds.top) / bounds.height) * 2 - 1);
  }

  window.addEventListener('mousemove', mapPointer);
  return () => window.removeEventListener('mousemove', mapPointer);
}, [pointerX, pointerY]);

const compassRotation = useTransform(pointerX, [-1, 1], [-10, 10]);
```

## Leitura técnica

- O ponteiro é normalizado para o intervalo `-1…1` em relação ao hero, não à janela inteira.
- Valores normalizados podem dirigir efeitos diferentes — por exemplo, uma rotação discreta de bússola sem depender das dimensões em pixels.
- As molas têm parâmetros próprios: a resposta desta cena é mais contida do que o movimento da lente urbana.
- A posição e a rotação são sinais visuais complementares, não uma cópia da animação do outro modo.

Imagem, vídeo, escurecimento e linhas topográficas ocupam camadas distintas. Essa separação torna cada efeito legível e facilita ajustar a intensidade sem misturar mídia e decoração.

## Nota de acessibilidade

Movimento de ponteiro e vídeo de fundo são escolhas decorativas. Em uma evolução da aplicação, a experiência deve oferecer uma apresentação estática quando o usuário prefere movimento reduzido, além de não depender do vídeo para comunicar informação.

## Referências

- Aplicação: [landing-page-hero-eye.vercel.app](https://landing-page-hero-eye.vercel.app/)
- O hero correspondente aparece no projeto como `HeroNature`.
- Veja também [hero urbano](02-hero-urbano.md).
