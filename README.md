<div align="center">
  <h1>🎮 GameRadar</h1>
  <p><strong>Encontre promoções de jogos e acompanhe o preço que você quer pagar.</strong></p>
  <p><img alt="Status" src="https://img.shields.io/badge/status-MVP%20em%20valida%C3%A7%C3%A3o-64748b"></p>
</div>

## Como usar

1. Pesquise um jogo pelo nome ou explore as ofertas disponíveis.
2. Use filtros de **preço máximo** e **desconto mínimo**.
3. Salve jogos para acompanhar e defina um **preço-alvo**.
4. Confira a oferta diretamente na loja antes de comprar.

| O que existe | Detalhe |
| --- | --- |
| **Ofertas** | Dados da API pública CheapShark quando acessível |
| **Fallback** | Exemplos de demonstração sinalizados quando a API falha |
| **Favoritos** | Lista e preços-alvo guardados no `localStorage` |
| **Filtros** | Preço, desconto e opções de ordenação |
| **Idiomas** | Português e inglês; interface responsiva |

**Importante:** preços podem mudar sem aviso. Confirme **região, edição, moeda, DRM, impostos e disponibilidade** na loja. GameRadar **não vende jogos nem realiza pagamentos**.

## Executar e testar

```bash
git clone https://github.com/HelioConde/gameradar.git
cd gameradar
python -m http.server 8000
```

Abra `http://localhost:8000`. Para executar as verificações existentes: `npm install`, `npm run check` e `npm run test:e2e`.

**Status:** MVP construído, mas a integração real da API e os links de ofertas precisam de verificação periódica na versão publicada.

---

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

> Smoke de produção foi adicionado em 07/10/2026 para validar a integração externa sem misturar esse gate ao E2E mockado. O workflow precisa ficar verde antes de encerrar o MVP.

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
