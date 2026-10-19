# Lopes Mendes Surf School

Landing page institucional de uma escola de surf em Lopes Mendes, Ilha Grande. Front-end estático em HTML, CSS e JavaScript, com Vite para desenvolvimento e build.

## Rodar localmente

Requer Node.js 20.19+ ou 22.12+ (validado em Node 24).

```powershell
cd C:\AntigravityUniverse\workspaces\personal\landingpages\lopesmendessurfschool
npm.cmd install
npm.cmd run dev
```

Abra **http://127.0.0.1:4178/**. A porta é fixa e não ocupa a 3000 usada por projetos VTEX. Se 4178 estiver ocupada, o comando avisa em vez de escolher outra porta silenciosamente.

## Build e hospedagem

```powershell
npm.cmd run build
```

O site pronto fica em `dist/`. Na Vercel: preset **Vite**, build **npm run build**, diretório de saída **dist**. Também pode ser servido por qualquer hospedagem estática. Não exige banco, variáveis de ambiente ou API. Nada foi publicado automaticamente.

Para conferir o build, pare o servidor de desenvolvimento antes de executar `npm.cmd run preview`, que usa a mesma porta.

## Onde editar

- `index.html`: textos, navegação, serviços, informações da escola e links.
- `src/style.css`: identidade, componentes e versões responsivas.
- `src/main.js`: menu mobile, galeria acessível e ano do rodapé.
- `public/images/`: fotos do perfil, salvas localmente e otimizadas em WebP.
- `public/fonts/`: fontes WOFF2 locais e licenças OFL.
- `DESIGN.md`: direção visual e escolhas de design.
- `docs/ASSETS.md`: origem das imagens e informações utilizadas.

## Interações

- Navegação por âncoras e menu mobile com Escape.
- Galeria ampliada com modal nativo, botões anterior/próxima, setas do teclado, fechamento com Escape e retorno de foco.
- Perguntas frequentes usando `details/summary` nativos.
- Contato leva ao perfil real do Instagram; mapa abre a localização da praia, não um endereço fictício da escola.
- Sem formulário de reserva simulado, login, checkout ou envio automático de mensagens.

## Desempenho e acessibilidade

JavaScript sem framework, imagens WebP com tamanhos responsivos nos principais blocos, fotos abaixo da dobra com lazy loading, dimensões reservadas, fonte local, prioridade para a imagem do hero, animação de entrada curta e respeito a `prefers-reduced-motion`. Sem pixel, embed ou script do Instagram.

## Antes de publicar

Confirmar com a escola as informações do perfil (especialmente os anos de experiência) e o uso comercial das fotos. Inserir domínio definitivo nas metatags sociais/canonical e, se desejado, uma imagem de compartilhamento horizontal própria. Um telefone aparece em um post antigo, mas não foi usado por não estar confirmado como contato atual. Se houver WhatsApp oficial atualizado, os CTAs podem ser trocados.

As imagens públicas fornecidas pelo Instagram têm até 640 px. Não foi inventada resolução adicional; o layout preserva os enquadramentos. Os arquivos originais em resolução maior podem substituir os WebPs posteriormente.
