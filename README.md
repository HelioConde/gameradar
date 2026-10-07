# GameRadar

Produto do **Ideias IA Lab** para descobrir promoções de jogos e acompanhar preço-alvo sem exigir conta.

## Estado atual

MVP funcional iniciado em 07/10/2026.

## O que já funciona

- busca de ofertas por título;
- radar inicial de promoções;
- filtros de preço máximo e desconto mínimo;
- ordenação por melhor oferta, menor preço, maior desconto e nome;
- consulta de preços pela API pública do CheapShark quando disponível;
- fallback demonstrativo explícito se a API falhar;
- lista local de jogos acompanhados;
- preço-alvo em dólar;
- destaque quando o preço consultado entra no alvo;
- atualização dos preços vistos no radar;
- links externos para a oferta;
- PT-BR principal + inglês;
- mobile;
- páginas Sobre, Privacidade e Termos;
- SEO básico;
- espaço preparado para anúncios sem ficar próximo dos CTAs de compra;
- Static QA.

## Fonte de preços

O MVP usa a API pública do CheapShark no navegador.

Preços e disponibilidade podem mudar. O usuário deve confirmar edição, região, DRM, moeda e valor final na loja antes da compra.

## Privacidade

A lista e os preços-alvo ficam em `localStorage` neste dispositivo.

## QA

Execute:

`npm run check`

## Deploy

O workflow **Deploy GitHub Pages** está preparado.

Caso o Pages ainda não esteja habilitado:

1. Settings → Pages
2. Build and deployment
3. Source → GitHub Actions

## Gate antes de expandir

- [x] proposta de valor clara;
- [x] busca de ofertas;
- [x] filtros;
- [x] watchlist local;
- [x] preço-alvo;
- [x] PT-BR/EN;
- [x] mobile;
- [x] páginas institucionais;
- [x] QA estático;
- [ ] confirmar CORS/retorno do CheapShark no ambiente publicado;
- [ ] GitHub Pages confirmado;
- [x] Browser E2E;
- [ ] validar busca por títulos reais;
- [ ] validar links de oferta;
- [ ] revisar preços-alvo com atualização real;
- [ ] revisar desktop/mobile publicado;
- [ ] corrigir P0/P1 encontrados.


> Browser E2E automatizado no GitHub Actions foi adicionado em 07/10/2026. O que resta neste gate é validação publicada/real e revisão dos casos específicos listados abaixo.

## V2 — somente após validação

- múltiplas lojas e filtros por loja;
- moeda/localização;
- histórico de preço;
- alertas reais server-side;
- afiliados quando houver programa compatível;
- conta e sincronização;
- páginas SEO por jogo;
- favoritos por gênero/plataforma.

## Monetização

Publicidade é a camada comum do portfólio. Links de afiliado podem entrar como receita complementar depois da validação e compliance.

Planejamento geral:

https://github.com/HelioConde/ideias-ia-lab
