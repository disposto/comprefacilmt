/* =========================================================
   Lógica de página — Compre Fácil MT
   ========================================================= */

/* ---------- Hero carrossel full-screen ---------- */
function initHero() {
  const root = document.getElementById('hero');
  if (!root) return;
  root.innerHTML = `
    <div class="hero-slides">
      ${HERO_SLIDES.map((src,i)=>`<div class="hero-slide ${i===0?'active':''}" data-i="${i}"><img class="hero-slide-img" src="${src}" alt="" ${i===0?'':'loading="lazy"'}></div>`).join('')}
    </div>
    <button class="hero-nav prev" aria-label="Anterior">${ICONS.arrow}</button>
    <button class="hero-nav next" aria-label="Próximo">${ICONS.arrow}</button>
    <div class="hero-dots">${HERO_SLIDES.map((_,i)=>`<button class="hero-dot ${i===0?'active':''}" data-i="${i}" aria-label="Slide ${i+1}"></button>`).join('')}</div>
    <div class="hero-scroll"><span>Explore</span><span class="mouse"></span></div>
  `;
  root.querySelector('.hero-nav.prev svg').style.transform = 'rotate(180deg)';

  const slides = [...root.querySelectorAll('.hero-slide')];
  const dots = [...root.querySelectorAll('.hero-dot')];
  let idx = 0, timer = null;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  function go(n) {
    idx = (n + slides.length) % slides.length;
    slides.forEach((s,i)=>s.classList.toggle('active', i===idx));
    dots.forEach((d,i)=>d.classList.toggle('active', i===idx));
  }
  function next(){ go(idx+1); }
  function start(){ if (reduce) return; stop(); timer = setInterval(next, 5500); }
  function stop(){ if (timer) clearInterval(timer); }

  root.querySelector('.hero-nav.next').onclick = ()=>{ next(); start(); };
  root.querySelector('.hero-nav.prev').onclick = ()=>{ go(idx-1); start(); };
  dots.forEach(d=> d.onclick = ()=>{ go(+d.dataset.i); start(); });
  root.addEventListener('mouseenter', stop);
  root.addEventListener('mouseleave', start);
  start();
}

/* ---------- Grid helpers ---------- */
function renderInto(id, html) { const el = document.getElementById(id); if (el) el.innerHTML = html; }

/* ---------- HOME ---------- */
function initHome() {
  initHero();
  renderInto('home-veiculos', VEICULOS.slice(0,4).map(vehicleCard).join(''));
  renderInto('home-imoveis', IMOVEIS.slice(0,3).map(propertyCard).join(''));
  renderInto('home-loja', PRODUTOS.slice(0,4).map(productCard).join(''));
  renderInto('home-dealers', DEALERS.map(d=>`
    <div class="dealer reveal">
      <div class="ava" style="background:${d.color}">${d.name.split(' ').map(w=>w[0]).slice(0,2).join('')}</div>
      <h4>${d.name}</h4>
      <span>${d.type} · ${d.city}</span>
      <div class="stars">${stars(d.rating)}</div>
    </div>`).join(''));
}

/* ---------- Listagens (filtros + busca + ordenação) ---------- */
function priceSort(arr, mode) {
  const a = [...arr];
  if (mode==='menor') a.sort((x,y)=>x.price-y.price);
  else if (mode==='maior') a.sort((x,y)=>y.price-x.price);
  return a;
}

function makeListing({ source, gridId, countId, cardFn, getFilters, matchFn }) {
  function apply() {
    const f = getFilters();
    let res = source.filter(item => matchFn(item, f));
    res = priceSort(res, f.sort);
    const grid = document.getElementById(gridId);
    if (!res.length) {
      grid.innerHTML = `<div class="empty" style="grid-column:1/-1">${ICONS.search}<h3>Nenhum resultado encontrado</h3><p>Tente ajustar os filtros ou a busca.</p></div>`;
    } else {
      grid.innerHTML = res.map(cardFn).join('');
    }
    const c = document.getElementById(countId);
    if (c) c.innerHTML = `<b>${res.length}</b> ${res.length===1?'anúncio encontrado':'anúncios encontrados'}`;
    initReveal();
  }
  document.querySelectorAll('[data-filter]').forEach(el => el.addEventListener('input', apply));
  document.querySelectorAll('.chip[data-type]').forEach(chip => chip.addEventListener('click', () => {
    chip.parentElement.querySelectorAll('.chip').forEach(c=>c.classList.remove('active'));
    chip.classList.add('active');
    apply();
  }));
  const clear = document.getElementById('clearFilters');
  if (clear) clear.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(el => { if (el.type==='checkbox') el.checked=false; else el.value=''; });
    document.querySelectorAll('.chips').forEach(chips => { chips.querySelectorAll('.chip').forEach((c,i)=>c.classList.toggle('active', i===0)); });
    apply();
  });
  apply();
}

function txt(id){ const e=document.getElementById(id); return e? e.value.trim().toLowerCase() : ''; }
function val(id){ const e=document.getElementById(id); return e? e.value : ''; }
function activeChip(scope){ const c=document.querySelector(`${scope} .chip.active`); return c? c.dataset.type : 'todos'; }
function num(id){ const e=document.getElementById(id); return e&&e.value? +e.value : null; }

function initVeiculos() {
  makeListing({
    source: VEICULOS, gridId:'listing-grid', countId:'result-count', cardFn: vehicleCard,
    getFilters: () => ({
      q: txt('q'), type: activeChip('#typeChips'), brand: val('fBrand'),
      gear: val('fGear'), min: num('fMin'), max: num('fMax'), sort: val('fSort'),
    }),
    matchFn: (v,f) =>
      (f.type==='todos' || v.type===f.type) &&
      (!f.brand || v.brand===f.brand) &&
      (!f.gear || v.gear===f.gear) &&
      (f.min==null || v.price>=f.min) &&
      (f.max==null || v.price<=f.max) &&
      (!f.q || (v.title+v.brand+v.city).toLowerCase().includes(f.q)),
  });
}

function initImoveis() {
  makeListing({
    source: IMOVEIS, gridId:'listing-grid', countId:'result-count', cardFn: propertyCard,
    getFilters: () => ({
      q: txt('q'), deal: activeChip('#dealChips'), type: val('fType'),
      beds: val('fBeds'), min: num('fMin'), max: num('fMax'), sort: val('fSort'),
    }),
    matchFn: (p,f) =>
      (f.deal==='todos' || p.deal===f.deal) &&
      (!f.type || p.type===f.type) &&
      (!f.beds || p.beds>=+f.beds) &&
      (f.min==null || p.price>=f.min) &&
      (f.max==null || p.price<=f.max) &&
      (!f.q || (p.title+p.city+p.type).toLowerCase().includes(f.q)),
  });
}

function initLoja() {
  makeListing({
    source: PRODUTOS, gridId:'listing-grid', countId:'result-count', cardFn: productCard,
    getFilters: () => ({
      q: txt('q'), group: activeChip('#groupChips'),
      min: num('fMin'), max: num('fMax'), sort: val('fSort'),
    }),
    matchFn: (p,f) =>
      (f.group==='todos' || p.group===f.group) &&
      (f.min==null || p.price>=f.min) &&
      (f.max==null || p.price<=f.max) &&
      (!f.q || (p.title+p.city+p.seller+p.group).toLowerCase().includes(f.q)),
  });
}

/* ---------- Anunciar (form demo) ---------- */
function initAnunciar() {
  const form = document.getElementById('adForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast('Anúncio enviado! Nossa equipe entrará em contato. ✅');
    form.reset();
  });
}

/* ---------- Busca da home ---------- */
function initHomeSearch() {
  const form = document.getElementById('homeSearch');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const cat = document.getElementById('hsCat').value;
    const q = document.getElementById('hsQ').value.trim();
    const dest = { veiculos:'veiculos.html', imoveis:'imoveis.html', loja:'loja.html' }[cat] || 'veiculos.html';
    location.href = q ? `${dest}?q=${encodeURIComponent(q)}` : dest;
  });
}

/* ---------- Pré-preenche busca via querystring ---------- */
function applyQueryString() {
  const q = new URLSearchParams(location.search).get('q');
  if (q) { const e = document.getElementById('q'); if (e) e.value = q; }
}

/* ---------- Roteador por página ---------- */
function initPage() {
  const page = document.body.dataset.page;
  applyQueryString();
  if (page==='home') { initHome(); initHomeSearch(); }
  if (page==='veiculos') initVeiculos();
  if (page==='imoveis') initImoveis();
  if (page==='loja') initLoja();
  if (page==='anunciar') initAnunciar();
}
