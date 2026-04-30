# Sistema Psicologia — Site institucional

Landing site oficial em **Astro 5** com Tailwind CSS 4. Build estático, zero JavaScript no cliente, otimizado para SEO e Core Web Vitals.

Produção: https://sistemapsicologia.com.br

## Stack

- **Astro 5** — geração estática, HTML por página
- **Tailwind CSS 4** (via `@tailwindcss/vite`)
- **`@astrojs/sitemap`** — sitemap.xml automático
- Deploy: **GitHub Pages** via Actions (`.github/workflows/deploy.yml`)

## Rodando localmente

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # gera dist/
npm run preview  # serve dist/ em http://localhost:4321
```

## Estrutura

```
src/
├── components/        # Componentes Astro reutilizáveis
│   ├── SEO.astro      # meta tags, OG, JSON-LD
│   ├── Navbar / Footer
│   ├── Hero / Features / FiscalShowcase / DocumentEditor / Security / Pricing / FAQ / CTA / SocialProof
│   ├── DashboardMockup / Icon
│   └── FeatureLanding (template das landings de feature)
├── data/              # Conteúdo tipado, fonte única
│   ├── site.ts        # nome, URLs, links
│   ├── features.ts    # catálogo de features
│   ├── pricing.ts     # planos
│   └── faq.ts         # perguntas
├── layouts/
│   └── BaseLayout.astro
├── pages/
│   ├── index.astro            # /
│   ├── precos.astro           # /precos
│   ├── seguranca.astro        # /seguranca
│   ├── sobre.astro            # /sobre
│   ├── contato.astro          # /contato
│   ├── privacidade.astro      # /privacidade
│   ├── termos.astro           # /termos
│   └── recursos/
│       ├── index.astro        # /recursos
│       ├── agenda-google.astro
│       ├── prontuario-eletronico.astro
│       ├── nfs-e-psicologia.astro
│       ├── receita-saude.astro
│       ├── portal-paciente.astro
│       └── multi-clinica.astro
└── styles/
    └── global.css     # Tailwind v4 + theme tokens
```

## SEO implementado

- `<title>` e `<meta description>` únicos por página
- Open Graph + Twitter Card
- Canonical URL automática
- JSON-LD: `Organization`, `SoftwareApplication`, `Offer`, `FAQPage`, `Product`
- `sitemap-index.xml` + `sitemap-0.xml` automáticos
- `robots.txt` com referência ao sitemap
- Headings hierárquicos (uma `<h1>` por página)
- Skip link de acessibilidade
- `prefers-reduced-motion` respeitado
- HTML semântico, idioma `pt-BR`

## Deploy

Push pra `main` dispara o workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) que builda e publica no GitHub Pages.

```bash
# Script auxiliar (commit + push, GH Actions builda)
./deploy.bat
```

## Conteúdo legado

Os arquivos antigos ficaram preservados com sufixo `.legacy` (`src.legacy/`, `package.json.legacy`, etc.) para referência. Podem ser removidos quando a nova versão estiver validada em produção.

## Próximos passos sugeridos

- Substituir `og-default.svg` por PNG 1200×630 (alguns crawlers tratam SVG mal em OG cards)
- Adicionar Google Analytics / Plausible
- Página de Blog (Astro Content Collections)
- Pixel/Conversion API quando o Stripe Checkout for ligado
- Confirmar se preços do Stripe coincidem com `src/data/pricing.ts`
- Atualizar `SITE.whatsapp` em `src/data/site.ts` com o número real
