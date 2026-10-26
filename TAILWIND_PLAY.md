# Tailwind Play — Exercise 01: Profile Card

O exercício começa com HTML sem classes para praticar a tradução de decisões visuais em utilities Tailwind. Cole o CSS e o HTML abaixo no [Tailwind Play](https://play.tailwindcss.com/) para experimentar.

## CSS inicial

```css
@import "tailwindcss";
```

## HTML base, sem estilização

```html
<main>
  <article>
    <div>
      <div>INICIAIS</div>

      <div>
        <span>Front-end</span>

        <h1>SEU NOME</h1>

        <p>FullStack Developer · React · Node • PHP • Angular • Laravel</p>
      </div>
    </div>

    <p>
      Estudando como pequenas utilities podem ser combinadas para construir
      uma interface completa sem criar uma classe CSS para cada elemento.
    </p>

    <div>
      <button>Seguir</button>
      <button>Perfil</button>
    </div>
  </article>
</main>
```

## Minha primeira solução estilizada

O `main` ocupa pelo menos a altura da tela e usa Grid para centralizar o card. O card tem largura máxima, fundo branco, borda, cantos arredondados e sombra. Flexbox organiza o avatar e o conteúdo do cabeçalho e também os botões.

```html
<main class="grid min-h-screen place-items-center bg-slate-100 p-6">
  <article class="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
    <div class="flex items-center gap-4">
      <div class="grid size-20 shrink-0 place-items-center rounded-full bg-blue-600 text-xl font-bold tracking-wider text-white">
        INICIAIS
      </div>

      <div class="min-w-0">
        <span class="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
          Front-end
        </span>

        <h1 class="mt-2 text-2xl font-bold leading-tight text-slate-900">
          SEU NOME
        </h1>

        <p class="mt-1 text-sm leading-6 text-slate-600">
          FullStack Developer · React · Node • PHP • Angular • Laravel
        </p>
      </div>
    </div>

    <p class="mt-6 text-base leading-7 text-slate-600">
      Estudando como pequenas utilities podem ser combinadas para construir
      uma interface completa sem criar uma classe CSS para cada elemento.
    </p>

    <div class="mt-6 flex gap-4">
      <button class="flex-1 rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white shadow-sm hover:bg-blue-700">
        Seguir
      </button>
      <button class="rounded-xl border border-slate-300 px-4 py-3 font-semibold text-slate-700 hover:bg-slate-50">
        Perfil
      </button>
    </div>
  </article>
</main>
```

## Experimentos: uma alteração por vez

Parta da solução acima e aplique cada troca individualmente. Depois de observar o resultado, volte à classe original antes do próximo item.

| Troca | O que observar |
| --- | --- |
| `p-6` → `p-10` no card | Aumenta o espaço interno em todos os lados. |
| `max-w-md` → `max-w-xl` | Permite que o card fique mais largo, até o novo limite. |
| `rounded-3xl` → `rounded-none` | Remove o arredondamento dos cantos do card. |
| `shadow-xl` → `shadow-none` | Remove a sombra do card. |
| `gap-4` → `gap-8` no container dos botões | Aumenta a distância entre os botões. |
| `size-20` → `size-28` no avatar | Aumenta largura e altura do avatar juntos. |
| `bg-blue-600` → `bg-emerald-600` no avatar e botão Seguir | Troca o fundo azul por verde. Faça a troca em um elemento por vez para comparar. |
| `flex` → `flex-col` no cabeçalho | Empilha avatar e conteúdo verticalmente. |
| Remova `flex-1` do botão Seguir | O botão deixa de ocupar o espaço restante da linha. |
| `tracking-wider` → `tracking-normal` no avatar | Reduz o espaçamento entre as letras das iniciais. |

## Classes explicadas

- `min-h-screen`: define altura mínima igual à altura da viewport.
- `grid`: ativa CSS Grid no elemento.
- `place-items-center`: centraliza os itens nos eixos horizontal e vertical do Grid.
- `mx-auto`: aplica margens horizontais automáticas, útil para centralizar um bloco com largura definida. Nesta solução, o Grid centraliza o card, então `mx-auto` não é necessário.
- `max-w-md`: limita a largura máxima do card ao tamanho `md` do Tailwind.
- `p-6`: aplica padding uniforme dentro do card.
- `flex`: organiza os filhos em uma linha usando Flexbox.
- `items-center`: alinha os filhos ao centro no eixo transversal do Flexbox.
- `gap-4`: cria espaço uniforme entre os filhos do container Flex ou Grid.
- `size-20`: define largura e altura com o mesmo valor, formando o avatar quadrado antes do arredondamento.
- `rounded-full`: deixa o avatar circular quando largura e altura são iguais.
- `flex-1`: permite que o botão Seguir cresça para ocupar o espaço livre da linha.
- `shadow-xl`: adiciona uma sombra mais pronunciada ao card.

## Checkpoint

1. **O que é utility-first?** É uma abordagem em que a interface é montada combinando classes pequenas, cada uma responsável por uma propriedade ou comportamento visual, diretamente no HTML/JSX.
2. **Qual a diferença entre padding, margin e gap?** `padding` cria espaço dentro da borda do elemento; `margin` cria espaço fora dela; `gap` define a distância entre os itens filhos de um container Flex ou Grid.
3. **O que `max-w-md` controla?** A largura máxima do elemento, de acordo com o tamanho `md` definido pelo Tailwind. O elemento ainda pode ser menor que esse limite.
4. **Por que `size-20` substitui width e height?** Porque a utility `size-*` aplica a mesma medida à largura e à altura; assim, uma classe substitui as duas declarações quando o elemento é quadrado.
5. **O que `flex-1` faz no botão?** Faz o botão crescer para preencher o espaço disponível no container Flex, dividindo esse espaço com outros itens flexíveis.
