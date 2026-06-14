/* =========================================================
   Componentes compartilhados — header, footer, cards, ícones, carrinho
   ========================================================= */

const ICONS = {
  cart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',
  menu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>',
  heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
  pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  cal:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  gauge:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a10 10 0 1 0-10-10"/><path d="M12 12l4-2"/></svg>',
  gear:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19V5"/><path d="M20 19V5"/><path d="M4 12h16"/><circle cx="4" cy="12" r="2"/><circle cx="20" cy="12" r="2"/></svg>',
  fuel:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="22" x2="15" y2="22"/><line x1="4" y1="9" x2="14" y2="9"/><path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"/><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"/></svg>',
  bed:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>',
  bath:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.7 3 4 3.7 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5H4"/><line x1="10" y1="5" x2="8" y2="7"/></svg>',
  car:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 17H3v-6l2-5h12l2 5v6h-2"/><circle cx="7" cy="17" r="2"/><circle cx="17" cy="17" r="2"/></svg>',
  ruler:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.3 8.7 8.7 21.3a1 1 0 0 1-1.4 0l-4.6-4.6a1 1 0 0 1 0-1.4L15.3 2.7a1 1 0 0 1 1.4 0l4.6 4.6a1 1 0 0 1 0 1.4z"/></svg>',
  wa:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.607zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>',
  ig:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
  fb:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7H8v-2.9h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6v1.9h2.8l-.5 2.9h-2.3v7A10 10 0 0 0 22 12z"/></svg>',
  yt:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.5 15.5v-7l6.5 3.5z"/></svg>',
  mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  arrow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  star:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15 9 22 9 16 14 18 21 12 17 6 21 8 14 2 9 9 9"/></svg>',
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  upload:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>',
  bolt:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  building:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="9" y1="6" x2="9" y2="6"/><line x1="15" y1="6" x2="15" y2="6"/><line x1="9" y1="10" x2="9" y2="10"/><line x1="15" y1="10" x2="15" y2="10"/><path d="M9 22v-4h6v4"/></svg>',
  tag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41 13.42 20.6a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>',
  google:'<svg viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"/><path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"/></svg>',
};

const NAV = [
  { href:'index.html', label:'Início' },
  { label:'Veículos', drop:[
    { href:'veiculos.html', b:'Comprar', s:'Carros, motos e caminhões' },
    { href:'anunciar.html', b:'Vender', s:'Anuncie seu veículo grátis' },
  ]},
  { label:'Imóveis', drop:[
    { href:'imoveis.html', b:'Comprar / Alugar', s:'Casas, apês e comerciais' },
    { href:'anunciar.html', b:'Vender / Anunciar', s:'Cadastre seu imóvel' },
    { href:'revendas.html', b:'Imobiliárias e Corretores', s:'Parceiros verificados' },
  ]},
  { href:'loja.html', label:'Loja Virtual' },
  { href:'revendas.html', label:'Revendas' },
  { href:'busca.html', label:'Busca Avançada' },
];

function renderHeader() {
  const page = (location.pathname.split('/').pop() || 'index.html');
  const navItems = NAV.map(n => {
    if (n.drop) {
      const inner = n.drop.map(d=>`<a href="${d.href}"><b>${d.b}</b><span>${d.s}</span></a>`).join('');
      const act = n.drop.some(d=>d.href===page) ? 'active' : '';
      return `<div class="has-drop"><a class="${act}" href="${n.drop[0].href}">${n.label}</a><div class="drop">${inner}</div></div>`;
    }
    return `<a href="${n.href}" class="${n.href===page?'active':''}">${n.label}</a>`;
  }).join('');

  const mobItems = NAV.map(n => {
    if (n.drop) return `<a href="${n.drop[0].href}">${n.label}</a><div class="drop-m">${n.drop.map(d=>`<a href="${d.href}">${d.b}</a>`).join('')}</div>`;
    return `<a href="${n.href}" class="${n.href===page?'active':''}">${n.label}</a>`;
  }).join('');

  document.getElementById('header').innerHTML = `
  <div class="topbar">
    <div class="container">
      <span class="verse">✝ "Posso todas as coisas naquele que me fortalece." — Filipenses 4:13</span>
      <div class="top-links">
        <a href="${waLink('Olá! Vim pelo site Compre Fácil MT.')}" target="_blank" rel="noopener">${CONTATO.whatsappLabel}</a>
        <a href="mailto:${CONTATO.email}">${CONTATO.email}</a>
      </div>
    </div>
  </div>
  <header class="site-header">
    <div class="container">
      <a href="index.html" class="logo">
        <span class="mark">${ICONS.cart}</span>
        <span>Compre Fácil<b>MT</b><small>O marketplace de Mato Grosso</small></span>
      </a>
      <nav class="main-nav">${navItems}</nav>
      <div class="header-actions">
        <span class="auth-links"><a href="login.html">Entrar</a><span class="sep">|</span><a href="cadastro.html">Cadastrar</a></span>
        <button class="cart-btn" aria-label="Carrinho" onclick="openCart()">${ICONS.cart}<span class="cart-count hidden" id="cartCount">0</span></button>
        <a href="${waLink('Olá! Quero falar com a Compre Fácil MT.')}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">${ICONS.wa} WhatsApp</a>
        <button class="menu-toggle" aria-label="Menu" onclick="toggleMobileNav(true)">${ICONS.menu}</button>
      </div>
    </div>
  </header>
  <div class="mobile-nav" id="mobileNav" onclick="if(event.target.id==='mobileNav')toggleMobileNav(false)">
    <div class="panel">
      <a href="index.html" class="logo" style="margin-bottom:14px">
        <span class="mark">${ICONS.cart}</span><span>Compre Fácil<b>MT</b></span>
      </a>
      ${mobItems}
      <a href="login.html" class="btn btn-ghost btn-block">Entrar / Cadastrar</a>
      <a href="anunciar.html" class="btn btn-dark btn-block">Anunciar grátis</a>
      <a href="${waLink('Olá! Vim pelo site Compre Fácil MT.')}" target="_blank" rel="noopener" class="btn btn-wa btn-block">${ICONS.wa} Chamar no WhatsApp</a>
    </div>
  </div>`;
}

function toggleMobileNav(open) {
  document.getElementById('mobileNav').classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
}

function renderFooter() {
  document.getElementById('footer').innerHTML = `
  <footer class="site-footer">
    <div class="container">
      <div class="footer-grid">
        <div>
          <div class="logo"><span class="mark">${ICONS.cart}</span><span>Compre Fácil<b>MT</b><small>O marketplace de Mato Grosso</small></span></div>
          <p class="desc">Encontre ou venda seu veículo, imóvel ou produto em poucos cliques. O maior portal de classificados de Mato Grosso, feito com confiança e fé.</p>
          <div class="social">
            <a href="${CONTATO.instagram}" aria-label="Instagram">${ICONS.ig}</a>
            <a href="${CONTATO.facebook}" aria-label="Facebook">${ICONS.fb}</a>
            <a href="${CONTATO.youtube}" aria-label="YouTube">${ICONS.yt}</a>
            <a href="${waLink('Olá!')}" target="_blank" rel="noopener" aria-label="WhatsApp">${ICONS.wa}</a>
          </div>
        </div>
        <div>
          <h4>Categorias</h4>
          <ul>
            <li><a href="veiculos.html">Carros</a></li>
            <li><a href="veiculos.html">Motos</a></li>
            <li><a href="veiculos.html">Caminhões</a></li>
            <li><a href="imoveis.html">Imóveis</a></li>
            <li><a href="loja.html">Loja Virtual</a></li>
          </ul>
        </div>
        <div>
          <h4>Institucional</h4>
          <ul>
            <li><a href="busca.html">Busca avançada</a></li>
            <li><a href="revendas.html">Revendas e corretores</a></li>
            <li><a href="anunciar.html">Anunciar</a></li>
            <li><a href="login.html">Entrar</a></li>
            <li><a href="cadastro.html">Criar conta</a></li>
          </ul>
        </div>
        <div>
          <h4>Contato</h4>
          <div class="contact-line">${ICONS.wa}<a href="${waLink('Olá!')}" target="_blank" rel="noopener">${CONTATO.whatsappLabel}</a></div>
          <div class="contact-line">${ICONS.phone}<a href="tel:+${CONTATO.whatsapp2}">${CONTATO.whatsappLabel2}</a></div>
          <div class="contact-line">${ICONS.mail}<a href="mailto:${CONTATO.email}">${CONTATO.email}</a></div>
          <div class="contact-line">${ICONS.pin}<span>Cuiabá / Várzea Grande — MT</span></div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>© ${new Date().getFullYear()} Compre Fácil MT — Todos os direitos reservados.</span>
        <span>Feito em Mato Grosso 💛</span>
      </div>
    </div>
  </footer>

  <!-- Carrinho -->
  <div class="cart-overlay" id="cartOverlay" onclick="closeCart()"></div>
  <aside class="cart-drawer" id="cartDrawer" aria-label="Carrinho">
    <div class="cart-head"><h3>Seu carrinho</h3><button class="cart-close" onclick="closeCart()" aria-label="Fechar">×</button></div>
    <div class="cart-items" id="cartItems"></div>
    <div class="cart-foot" id="cartFoot"></div>
  </aside>

  <a href="${waLink('Olá! Vim pelo site e gostaria de mais informações.')}" target="_blank" rel="noopener" class="wa-float" aria-label="WhatsApp">${ICONS.wa}</a>`;
}

/* ---------- Cards ---------- */
function stars(n) { return '★'.repeat(n) + '☆'.repeat(5-n); }

function vehicleCard(v) {
  const old = v.oldPrice ? `<small>${formatBRL(v.oldPrice)}</small>` : '';
  const badge = v.badge ? `<span class="badge ${v.badge==='Oferta'?'green':''}">${v.badge}</span>` : '';
  const href = `detalhe.html?id=${v.id}`;
  return `<article class="card reveal">
    <div class="thumb">
      <a href="${href}"><img src="${v.img}" alt="${v.title}" loading="lazy" onerror="this.onerror=null;this.src='${v.fb}'"></a>
      ${badge}
      <button class="fav" aria-label="Favoritar" onclick="toggleFav(this)">${ICONS.heart}</button>
    </div>
    <div class="body">
      <span class="cat-tag">${v.brand} · ${v.type}</span>
      <h3 class="title"><a href="${href}">${v.title}</a></h3>
      <div class="meta">
        <span>${ICONS.cal} ${v.year}</span>
        <span>${ICONS.gauge} ${v.km.toLocaleString('pt-BR')} km</span>
        <span>${ICONS.gear} ${v.gear}</span>
      </div>
      <div class="price-row">
        <div><div class="price">${formatBRL(v.price)}</div>${old}</div>
        <span class="loc">${ICONS.pin} ${v.city}</span>
      </div>
      <a href="${href}" class="btn btn-dark btn-sm btn-block card-cta">Ver detalhes</a>
    </div>
  </article>`;
}

function propertyCard(p) {
  const badge = p.badge ? `<span class="badge ${p.badge==='Oferta'?'green':''}">${p.badge}</span>` : '';
  const bedsHtml = p.beds ? `<span>${ICONS.bed} ${p.beds}</span>` : '';
  const href = `detalhe.html?id=${p.id}`;
  return `<article class="card reveal">
    <div class="thumb">
      <a href="${href}"><img src="${p.img}" alt="${p.title}" loading="lazy" onerror="this.onerror=null;this.src='${p.fb}'"></a>
      ${badge}
      <button class="fav" aria-label="Favoritar" onclick="toggleFav(this)">${ICONS.heart}</button>
    </div>
    <div class="body">
      <span class="cat-tag">${p.deal} · ${p.type}</span>
      <h3 class="title"><a href="${href}">${p.title}</a></h3>
      <div class="meta">
        ${bedsHtml}
        <span>${ICONS.bath} ${p.baths}</span>
        <span>${ICONS.car} ${p.garage}</span>
        <span>${ICONS.ruler} ${p.area} m²</span>
      </div>
      <div class="price-row">
        <div class="price">${formatBRL(p.price)}${p.deal==='Aluguel'?'<small style="text-decoration:none;color:var(--ink-400);font-weight:600">/mês</small>':''}</div>
        <span class="loc">${ICONS.pin} ${p.city}</span>
      </div>
      <a href="${href}" class="btn btn-dark btn-sm btn-block card-cta">Ver detalhes</a>
    </div>
  </article>`;
}

function productCard(p) {
  const old = p.oldPrice ? `<small>${formatBRL(p.oldPrice)}</small>` : '';
  const badge = p.badge ? `<span class="badge ${p.badge==='Oferta'?'green':''}">${p.badge}</span>` : '';
  const href = `detalhe.html?id=${p.id}`;
  return `<article class="card reveal">
    <div class="thumb">
      <a href="${href}"><img src="${p.img}" alt="${p.title}" loading="lazy" onerror="this.onerror=null;this.src='${p.fb}'"></a>
      ${badge}
      <button class="fav" aria-label="Favoritar" onclick="toggleFav(this)">${ICONS.heart}</button>
    </div>
    <div class="body">
      <span class="cat-tag">${p.group}</span>
      <h3 class="title"><a href="${href}">${p.title}</a></h3>
      <div class="meta"><span>${ICONS.pin} ${p.city}</span><span>por ${p.seller}</span></div>
      <div class="price-row">
        <div><div class="price">${formatBRL(p.price)}</div>${old}</div>
      </div>
      <button class="btn btn-primary btn-sm btn-block card-cta" onclick="addToCart('${p.id}')">${ICONS.cart} Adicionar</button>
    </div>
  </article>`;
}

function toggleFav(btn) { btn.classList.toggle('on'); }

/* ---------- Carrinho (localStorage) ---------- */
const CART_KEY = 'cf_cart';
function getCart() { try { return JSON.parse(localStorage.getItem(CART_KEY)) || {}; } catch(e){ return {}; } }
function saveCart(c) { localStorage.setItem(CART_KEY, JSON.stringify(c)); updateCartCount(); }
function addToCart(id) { const c = getCart(); c[id] = (c[id]||0)+1; saveCart(c); renderCart(); openCart(); showToast('Adicionado ao carrinho ✅'); }
function removeFromCart(id) { const c = getCart(); delete c[id]; saveCart(c); renderCart(); }
function updateCartCount() {
  const el = document.getElementById('cartCount'); if (!el) return;
  const total = Object.values(getCart()).reduce((a,b)=>a+b,0);
  el.textContent = total; el.classList.toggle('hidden', total===0);
}
function renderCart() {
  const wrap = document.getElementById('cartItems'); const foot = document.getElementById('cartFoot');
  if (!wrap) return;
  const c = getCart(); const ids = Object.keys(c);
  if (!ids.length) {
    wrap.innerHTML = `<div class="cart-empty">${ICONS.cart}<p>Seu carrinho está vazio.</p></div>`;
    foot.innerHTML = `<a href="loja.html" class="btn btn-dark btn-block">Ir para a loja</a>`;
    return;
  }
  let total = 0;
  wrap.innerHTML = ids.map(id => {
    const p = PRODUTOS.find(x=>x.id===id); if (!p) return '';
    total += p.price * c[id];
    return `<div class="cart-item">
      <img src="${p.img}" alt="${p.title}" onerror="this.onerror=null;this.src='${p.fb}'">
      <div class="ci-body">
        <h4>${p.title}</h4>
        <div class="ci-price">${c[id]}× ${formatBRL(p.price)}</div>
        <button class="ci-rm" onclick="removeFromCart('${id}')">Remover</button>
      </div>
    </div>`;
  }).join('');
  const msg = 'Olá! Quero finalizar a compra destes itens:\n' + ids.map(id => { const p = PRODUTOS.find(x=>x.id===id); return `• ${c[id]}x ${p.title} (${formatBRL(p.price)})`; }).join('\n') + `\n\nTotal: ${formatBRL(total)}`;
  foot.innerHTML = `<div class="cart-total"><span>Total</span><b>${formatBRL(total)}</b></div>
    <a href="${waLink(msg)}" target="_blank" rel="noopener" class="btn btn-wa btn-block">${ICONS.wa} Finalizar no WhatsApp</a>`;
}
function openCart() { document.getElementById('cartOverlay').classList.add('open'); document.getElementById('cartDrawer').classList.add('open'); document.body.style.overflow='hidden'; renderCart(); }
function closeCart() { document.getElementById('cartOverlay').classList.remove('open'); document.getElementById('cartDrawer').classList.remove('open'); document.body.style.overflow=''; }

/* ---------- Reveal on scroll ---------- */
function initReveal() {
  const els = document.querySelectorAll('.reveal');
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.08 });
  els.forEach(el => io.observe(el));
}

/* ---------- Toast ---------- */
function showToast(msg) {
  let t = document.querySelector('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; document.body.appendChild(t); }
  t.innerHTML = ICONS.check + '<span>' + msg + '</span>';
  requestAnimationFrame(() => t.classList.add('show'));
  clearTimeout(t._tm); t._tm = setTimeout(() => t.classList.remove('show'), 3000);
}

/* ---------- Boot ---------- */
document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('header')) renderHeader();
  if (document.getElementById('footer')) renderFooter();
  updateCartCount();
  if (typeof initPage === 'function') initPage();
  initReveal();
});
