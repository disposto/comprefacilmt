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
    <button class="hero-scroll" type="button" aria-label="Arraste para baixo"><span>Arraste para baixo</span><span class="mouse"></span></button>
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
  const sc = root.querySelector('.hero-scroll');
  if (sc) sc.onclick = ()=> window.scrollTo({ top: root.offsetHeight - 1, behavior: 'smooth' });
  root.addEventListener('mouseenter', stop);
  root.addEventListener('mouseleave', start);
  start();
}

/* ---------- Grid helpers ---------- */
function renderInto(id, html) { const el = document.getElementById(id); if (el) el.innerHTML = html; }

/* ---------- HOME ---------- */
function initHome() {
  initHero();
  const setIcon = (id, svg) => { const e = document.getElementById(id); if (e) e.innerHTML = svg; };
  setIcon('t1', ICONS.tag); setIcon('t2', ICONS.building); setIcon('t3', ICONS.pin); setIcon('t4', ICONS.shield);
  setIcon('w1', ICONS.check); setIcon('w2', ICONS.check); setIcon('w3', ICONS.check);
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
  const v = p => (p.price==null ? (mode==='maior'? -Infinity : Infinity) : p.price); // "Sob consulta" sempre no fim
  if (mode==='menor') a.sort((x,y)=>v(x)-v(y));
  else if (mode==='maior') a.sort((x,y)=>v(y)-v(x));
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

/* ---------- Revendas / Imobiliárias ---------- */
function initRevendas() {
  const grid = document.getElementById('reseller-grid');
  if (!grid) return;
  function render() {
    const q = txt('q');
    const seg = activeChip('#segChips');
    const res = REVENDAS.filter(r =>
      (seg==='todos' || (seg==='veiculos' && r.segment.includes('veículos')) ||
       (seg==='imoveis' && (r.segment.includes('Imobiliária')||r.segment.includes('Corretor'))) ||
       (seg==='loja' && r.segment.includes('eletrônicos'))) &&
      (!q || (r.name+r.city+r.segment).toLowerCase().includes(q))
    );
    grid.innerHTML = res.length ? res.map(r=>`
      <div class="reseller reveal">
        <div class="cover" style="background:${r.cover}"><div class="r-ava" style="background:${r.color}">${r.name.split(' ').map(w=>w[0]).slice(0,2).join('')}</div></div>
        <div class="r-body">
          <h3>${r.name}</h3>
          <div class="r-tag">${r.segment} · ${r.city} — MT</div>
          <div class="r-meta"><span class="accent-text" style="font-weight:600">${ICONS.shield} Parceiro verificado</span></div>
          <a href="${waLink('Olá! Vi a '+r.name+' na Compre Fácil MT e gostaria de mais informações.')}" target="_blank" rel="noopener" class="btn btn-dark btn-sm btn-block">Ver anúncios</a>
        </div>
      </div>`).join('') : `<div class="empty" style="grid-column:1/-1">${ICONS.search}<h3>Nenhuma revenda encontrada</h3></div>`;
    const c = document.getElementById('result-count'); if (c) c.innerHTML = `<b>${res.length}</b> ${res.length===1?'revenda':'revendas'}`;
    initReveal();
  }
  document.querySelectorAll('[data-filter]').forEach(el=>el.addEventListener('input', render));
  document.querySelectorAll('.chip[data-type]').forEach(chip=>chip.addEventListener('click', ()=>{
    chip.parentElement.querySelectorAll('.chip').forEach(c=>c.classList.remove('active')); chip.classList.add('active'); render();
  }));
  render();
}

/* ---------- Busca avançada ---------- */
function initBusca() {
  const form = document.getElementById('advForm');
  if (!form) return;
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const cat = val('aCategoria');
    const q = txt('aTermo');
    const dest = { veiculos:'veiculos.html', imoveis:'imoveis.html', loja:'loja.html' }[cat] || 'veiculos.html';
    location.href = q ? `${dest}?q=${encodeURIComponent(q)}` : dest;
  });
}

/* ---------- Página de detalhe ---------- */
function initDetalhe() {
  const root = document.getElementById('detail-root');
  if (!root) return;
  const id = new URLSearchParams(location.search).get('id');
  const item = ALL.find(x=>x.id===id) || ALL[0];
  const isV = item.cat==='veiculos', isI = item.cat==='imoveis';
  const catLabel = isV?'Veículo':isI?'Imóvel':'Produto';
  const old = (item.price!=null && item.oldPrice) ? `<small>${formatBRL(item.oldPrice)}</small>` : '';
  const priceLabel = item.price!=null ? formatBRL(item.price) : 'Sob consulta';

  let specs = '';
  if (isV) specs = `
    <div class="spec"><span>Ano</span><b>${item.year}</b></div>
    <div class="spec"><span>KM</span><b>${item.km.toLocaleString('pt-BR')}</b></div>
    <div class="spec"><span>Câmbio</span><b>${item.gear}</b></div>
    <div class="spec"><span>Combustível</span><b>${item.fuel}</b></div>
    <div class="spec"><span>Marca</span><b>${item.brand}</b></div>
    <div class="spec"><span>Tipo</span><b>${item.type}</b></div>`;
  else if (isI) specs = `
    <div class="spec"><span>Tipo</span><b>${item.type}</b></div>
    <div class="spec"><span>Negócio</span><b>${item.deal}</b></div>
    <div class="spec"><span>Quartos</span><b>${item.beds||'—'}</b></div>
    <div class="spec"><span>Banheiros</span><b>${item.baths}</b></div>
    <div class="spec"><span>Vagas</span><b>${item.garage}</b></div>
    <div class="spec"><span>Área</span><b>${item.areaHa ? item.areaHa.toLocaleString('pt-BR')+' ha' : item.area+' m²'}</b></div>`;
  else specs = `
    <div class="spec"><span>Categoria</span><b>${item.group}</b></div>
    <div class="spec"><span>Vendedor</span><b>${item.seller}</b></div>
    <div class="spec"><span>Cidade</span><b>${item.city}</b></div>
    <div class="spec"><span>Condição</span><b>Disponível</b></div>`;

  const seller = isV ? item.dealer : (item.seller || 'Anunciante particular');
  const priceMsg = item.price!=null ? ' ('+formatBRL(item.price)+')' : '';
  let cta;
  if (item.cat==='loja' && item.price!=null)
    cta = `<button class="btn btn-primary btn-block" onclick="addToCart('${item.id}')">${ICONS.cart} Adicionar ao carrinho</button>
       <a href="${waLink('Olá! Tenho interesse no produto: '+item.title+priceMsg+'.')}" target="_blank" rel="noopener" class="btn btn-wa btn-block" style="margin-top:10px">${ICONS.wa} Comprar / Negociar</a>`;
  else if (item.cat==='loja')
    cta = `<a href="${waLink('Olá! Tenho interesse no produto: '+item.title+'. Qual o valor e a forma de pagamento?')}" target="_blank" rel="noopener" class="btn btn-wa btn-block">${ICONS.wa} Consultar valor</a>`;
  else
    cta = `<a href="${waLink('Olá! Tenho interesse no '+item.title+priceMsg+'. Ainda está disponível?')}" target="_blank" rel="noopener" class="btn btn-wa btn-block">${ICONS.wa} ${isI?'Agendar visita':'Tenho interesse'}</a>`;

  const desc = `Anúncio de demonstração apresentado com o novo layout da Compre Fácil MT. ${item.title} localizado em ${item.city} — MT. Entre em contato pelo WhatsApp para mais fotos, condições de pagamento e agendamento. Negociação direta com o anunciante, sem burocracia.`;

  document.title = `${item.title} — Compre Fácil MT`;
  root.innerHTML = `
    <div class="breadcrumb"><a href="index.html">Início</a> / <a href="${isV?'veiculos.html':isI?'imoveis.html':'loja.html'}">${catLabel}s</a> / ${item.title}</div>
    <div class="detail">
      <div>
        <div class="detail-gallery">
          <div class="main-img"><img id="mainImg" src="${item.img}" alt="${item.title}" onerror="this.onerror=null;this.src='${item.fb}'"></div>
          <div class="detail-thumbs">
            ${[item.img, item.fb, item.img, item.fb].map((src,i)=>`<img src="${src}" class="${i===0?'active':''}" onerror="this.onerror=null;this.src='${item.fb}'" onclick="document.getElementById('mainImg').src=this.src;document.querySelectorAll('.detail-thumbs img').forEach(t=>t.classList.remove('active'));this.classList.add('active')">`).join('')}
          </div>
        </div>
        <div class="detail-desc">
          <h3>Descrição</h3>
          <p>${desc}</p>
          <div class="seller-box">
            <div class="s-ava">${seller.split(' ').map(w=>w[0]).slice(0,2).join('')}</div>
            <div><b>${seller}</b><div class="muted" style="font-size:13px">Anunciante · ${item.city} — MT</div></div>
          </div>
        </div>
      </div>
      <div class="detail-side">
        <span class="d-cat">${isV?item.brand+' · '+item.type : isI?item.deal+' · '+item.type : item.group}</span>
        <h1>${item.title}</h1>
        <span class="loc muted">${item.city} — MT</span>
        <div class="d-price">${priceLabel}${item.cat==='imoveis'&&item.deal==='Aluguel'?'<small style="text-decoration:none">/mês</small>':''} ${old}</div>
        <div class="spec-grid">${specs}</div>
        ${cta}
      </div>
    </div>`;
  initReveal();
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
  if (page==='revendas') initRevendas();
  if (page==='busca') initBusca();
  if (page==='detalhe') initDetalhe();
}
