<div align="center">
  <h1>🎮 GameRadar</h1>
  <p><strong>Descubra ofertas de jogos, monte sua lista de desejos e acompanhe o preço que deseja pagar.</strong></p>
  <p><img alt="MVP em validação" src="https://img.shields.io/badge/status-MVP%20em%20valida%C3%A7%C3%A3o-64748b"> <img alt="CheapShark" src="https://img.shields.io/badge/dados-CheapShark%20API-2563eb"></p>
</div>

---

## Um radar de preços para jogos

O **GameRadar** reúne ofertas publicadas por lojas consultadas via **CheapShark API**, com filtros por valor e desconto. Você pode salvar jogos para acompanhar e definir o preço-alvo que deseja encontrar.

### Como usar

1. Pesquise um jogo ou explore as promoções disponíveis.
2. Filtre por preço máximo, desconto mínimo e ordenação.
3. Marque jogos para acompanhar e defina seu preço-alvo.
4. Abra o link da oferta e **confirme as condições diretamente na loja**.

| Funcionalidade | Detalhes |
| --- | --- |
| **Pesquisa** | Ofertas por nome do jogo |
| **Filtros** | Preço, desconto e ordenação |
| **Watchlist** | Jogos acompanhados no navegador |
| **Preço-alvo** | Destaque quando a cotação consultada alcança o valor escolhido |
| **Fallback** | Dados de demonstração identificados se o serviço de ofertas falhar |
| **Idiomas** | Português e inglês |
| **Privacidade** | Preferências armazenadas em `localStorage` |

**Não há alerta externo garantido:** a lista e o preço-alvo do MVP são locais. Não confunda o indicador na tela com uma notificação por e-mail ou monitoramento 24 horas.

## Limitações dos preços

- Os valores retornados pela API podem estar em **dólares** e variar por região; **não presuma conversão automática para reais**.
- Preços, cupons e disponibilidade mudam rapidamente.
- Edição, plataforma, DRM, impostos e moeda precisam ser conferidos na página da loja.
- Em falhas de rede ou CORS, a interface pode mostrar demonstrações sinalizadas — **não trate dados fictícios como ofertas válidas**.
- O GameRadar **não vende jogos nem processa pagamentos**.

## Rodar localmente

Aplicação estática em HTML, CSS e JavaScript, sem backend próprio obrigatório no MVP:

```bash
git clone https://github.com/HelioConde/gameradar.git
cd gameradar
python -m http.server 8000
```

Abra `http://localhost:8000`. Para as verificações existentes:

```bash
npm install
npm run check
npx playwright install
npm run test:e2e
```

O `check` cobre sintaxe e invariantes locais; o E2E utiliza Playwright. Nenhum deles confirma sozinho que a CheapShark API ou todos os links comerciais estão disponíveis hoje.

## Situação do projeto

**MVP funcional em validação.** O próximo passo é confirmar integração real, disponibilidade dos links, leitura em celulares e comportamento de preços-alvo com atualização de ofertas.

**Possíveis evoluções:** histórico de preços, filtros por loja, moeda/localização e notificações externas; **ainda não são recursos garantidos**.

[**Documentação técnica e QA anterior**](docs/README_HISTORY_2026-10-27.md) · [**Projetos do laboratório**](https://github.com/HelioConde/ideias-ia-lab)

---

<div align="center"><strong>Desenvolvido por <a href="https://github.com/HelioConde">Hélio Conde</a></strong></div>
