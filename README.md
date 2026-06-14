# Compre Fácil MT — Redesign (proposta)

Redesign moderno e institucional do marketplace **Compre Fácil MT** (comprefacilmt.com.br),
feito como demonstração/proposta. Site **100% estático** (HTML, CSS e JS puro) — abre direto
no navegador, funciona no celular e pode ser hospedado de graça (GitHub Pages, Netlify, Vercel).

## ✨ Destaques

- **Hero full-screen em carrossel** só com imagem (sem texto), crossfade suave + Ken Burns leve,
  setas, indicadores, autoplay com pausa e respeito a `prefers-reduced-motion`.
- **3 verticais** do negócio: **Veículos**, **Imóveis** e **Loja Virtual**.
- **Busca, filtros e ordenação** funcionando em cada categoria.
- **Página de anunciar** com formulário.
- **Imagens reais** puxadas do site oficial (com fallback automático).
- Contatos reais (WhatsApp/e-mail) e a identidade do anunciante ("Filipenses 4:13").
- Layout forte, animações fluidas e discretas, responsivo, sem glow.

## 📁 Estrutura

```
index.html        Home (hero carrossel + destaques)
veiculos.html     Listagem de veículos + filtros
imoveis.html      Listagem de imóveis + filtros
loja.html         Loja virtual + filtros
anunciar.html     Formulário de anúncio
assets/css/styles.css
assets/js/data.js          dados de exemplo + imagens
assets/js/components.js     header, footer, cards, ícones
assets/js/app.js           carrossel, filtros e rotas de página
```

## ▶️ Como rodar localmente

Basta abrir o `index.html` no navegador. Ou subir um servidor simples:

```bash
python3 -m http.server 8000
# acesse http://localhost:8000
```

> Os dados são de exemplo, apenas para demonstração visual da proposta.
