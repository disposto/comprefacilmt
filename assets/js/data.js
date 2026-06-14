/* =========================================================
   Dados de exemplo — Compre Fácil MT
   Imagens originais do site oficial + complementos, todas
   baixadas localmente em assets/img (sem hotlink).
   ========================================================= */

const IMG = 'assets/img';

const FALLBACK = { carro: `${IMG}/v1.jpg`, imovel: `${IMG}/i1.jpg`, produto: `${IMG}/guitar.jpg` };

const VEICULOS = [
  { id:'v1', title:'VW T-Cross Highline', cat:'veiculos', type:'Carro', brand:'Volkswagen', year:2021, km:48000, fuel:'Flex', gear:'Automático', price:129900, oldPrice:138000, city:'Cuiabá', dealer:'Borges Veículos', img:`${IMG}/v2.jpg`, fb:FALLBACK.carro, badge:'Destaque' },
  { id:'v2', title:'Toyota Corolla XEi', cat:'veiculos', type:'Carro', brand:'Toyota', year:2020, km:62000, fuel:'Flex', gear:'Automático', price:118900, city:'Várzea Grande', dealer:'Borges Veículos', img:`${IMG}/v3.jpg`, fb:FALLBACK.carro },
  { id:'v3', title:'Honda HR-V EXL', cat:'veiculos', type:'Carro', brand:'Honda', year:2019, km:71000, fuel:'Flex', gear:'Automático', price:112900, city:'Rondonópolis', dealer:'Aliança Veículos', img:`${IMG}/v6.jpg`, fb:FALLBACK.carro },
  { id:'v4', title:'Jeep Renegade Longitude', cat:'veiculos', type:'Carro', brand:'Jeep', year:2022, km:31000, fuel:'Flex', gear:'Automático', price:124900, oldPrice:131000, city:'Cuiabá', dealer:'Speed Car', img:`${IMG}/v7.jpg`, fb:FALLBACK.carro, badge:'Oferta' },
  { id:'v5', title:'Chevrolet Onix Plus', cat:'veiculos', type:'Carro', brand:'Chevrolet', year:2021, km:39000, fuel:'Flex', gear:'Manual', price:78900, city:'Sinop', dealer:'Pokone Multimarcas', img:`${IMG}/v9.jpg`, fb:FALLBACK.carro },
  { id:'v6', title:'Hyundai Creta Prestige', cat:'veiculos', type:'Carro', brand:'Hyundai', year:2020, km:54000, fuel:'Flex', gear:'Automático', price:109900, city:'Cuiabá', dealer:'Speed Car', img:`${IMG}/v1.jpg`, fb:FALLBACK.carro },
  { id:'v7', title:'Fiat Pulse Drive', cat:'veiculos', type:'Carro', brand:'Fiat', year:2023, km:18000, fuel:'Flex', gear:'Automático', price:96900, oldPrice:102000, city:'Tangará da Serra', dealer:'Aliança Veículos', img:`${IMG}/v4.jpg`, fb:FALLBACK.carro, badge:'Oferta' },
  { id:'v8', title:'Caminhonete Frota Premium', cat:'veiculos', type:'Caminhão', brand:'Diversos', year:2018, km:120000, fuel:'Diesel', gear:'Manual', price:189900, city:'Rondonópolis', dealer:'Borges Veículos', img:`${IMG}/v8.jpg`, fb:FALLBACK.carro, badge:'Premium' },
];

const IMOVEIS = [
  { id:'i1', title:'Casa Residencial Ceci III', cat:'imoveis', type:'Casa', deal:'Venda', beds:3, baths:2, garage:2, area:160, price:420000, city:'Várzea Grande', img:`${IMG}/i1.jpg`, fb:FALLBACK.imovel, badge:'Destaque' },
  { id:'i2', title:'Casa ampla com quintal', cat:'imoveis', type:'Casa', deal:'Venda', beds:3, baths:2, garage:3, area:200, price:530000, city:'Cuiabá', img:`${IMG}/i2.jpg`, fb:FALLBACK.imovel },
  { id:'i3', title:'Sobrado moderno', cat:'imoveis', type:'Casa', deal:'Venda', beds:3, baths:3, garage:2, area:180, price:610000, city:'Cuiabá', img:`${IMG}/i3.jpg`, fb:FALLBACK.imovel, badge:'Premium' },
  { id:'i4', title:'Casa para alugar — Centro', cat:'imoveis', type:'Casa', deal:'Aluguel', beds:2, baths:1, garage:1, area:90, price:1600, city:'Várzea Grande', img:`${IMG}/i4.jpg`, fb:FALLBACK.imovel },
  { id:'i5', title:'Residência com área de lazer', cat:'imoveis', type:'Casa', deal:'Venda', beds:4, baths:3, garage:3, area:260, price:780000, city:'Cuiabá', img:`${IMG}/i5.webp`, fb:FALLBACK.imovel, badge:'Oportunidade' },
  { id:'i6', title:'Casa térrea 2 quartos', cat:'imoveis', type:'Casa', deal:'Aluguel', beds:2, baths:1, garage:2, area:110, price:1400, city:'Rondonópolis', img:`${IMG}/i6.jpg`, fb:FALLBACK.imovel, badge:'Oferta' },
];

const PRODUTOS = [
  { id:'p1', title:'Violão Takamine Acústico/Elétrico', cat:'loja', group:'Instrumentos', price:2000, oldPrice:2600, city:'Cuiabá', seller:'Loja do Anunciante', img:`${IMG}/guitar.jpg`, fb:FALLBACK.produto, badge:'Imperdível', featured:true },
  { id:'p2', title:'iPhone 15 — Seminovo', cat:'loja', group:'Eletrônicos', price:4299, oldPrice:4999, city:'Cuiabá', seller:'TechMT', img:`${IMG}/p_iphone15.jpg`, fb:FALLBACK.produto, badge:'Oferta' },
  { id:'p3', title:'iPhone 12 — Ótimo estado', cat:'loja', group:'Eletrônicos', price:2399, city:'Várzea Grande', seller:'TechMT', img:`${IMG}/p_iphone12.jpg`, fb:FALLBACK.produto },
  { id:'p4', title:'Smart TV 50" 4K', cat:'loja', group:'Eletrônicos', price:2299, city:'Cuiabá', seller:'TechMT', img:`${IMG}/tv.jpg`, fb:FALLBACK.produto },
  { id:'p5', title:'Notebook 16GB SSD 512GB', cat:'loja', group:'Eletrônicos', price:3499, oldPrice:3999, city:'Cuiabá', seller:'TechMT', img:`${IMG}/notebook.jpg`, fb:FALLBACK.produto, badge:'Oferta' },
  { id:'p6', title:'Furadeira de Impacto 750W', cat:'loja', group:'Ferramentas', price:289.90, city:'Cuiabá', seller:'Casa & Obra', img:`${IMG}/drill.jpg`, fb:FALLBACK.produto },
  { id:'p7', title:'Conjunto de Panelas Antiaderente', cat:'loja', group:'Casa', price:259.90, city:'Rondonópolis', seller:'Casa & Obra', img:`${IMG}/pans.jpg`, fb:FALLBACK.produto },
  { id:'p8', title:'Fone Bluetooth com Cancelamento', cat:'loja', group:'Eletrônicos', price:349, city:'Cuiabá', seller:'TechMT', img:`${IMG}/headphone.jpg`, fb:FALLBACK.produto },
  { id:'p9', title:'Bicicleta Aro 29 21v', cat:'loja', group:'Esporte', price:1290, oldPrice:1590, city:'Sinop', seller:'Bike Center', img:`${IMG}/bike.jpg`, fb:FALLBACK.produto, badge:'Oferta' },
];

const DEALERS = [
  { name:'Speed Car', type:'Veículos', city:'Cuiabá', rating:5, color:'#1657a0' },
  { name:'Aliança Veículos', type:'Veículos', city:'Rondonópolis', rating:5, color:'#e8730a' },
  { name:'Borges Veículos', type:'Veículos', city:'Várzea Grande', rating:4, color:'#16a34a' },
  { name:'Pokone Multimarcas', type:'Veículos', city:'Sinop', rating:5, color:'#7c3aed' },
  { name:'TechMT', type:'Eletrônicos', city:'Cuiabá', rating:5, color:'#0891b2' },
];

const REVENDAS = [
  { name:'Speed Car', segment:'Revenda de veículos', city:'Cuiabá', anuncios:48, rating:5, color:'#1657a0', cover:'#103e72' },
  { name:'Aliança Veículos', segment:'Revenda de veículos', city:'Rondonópolis', anuncios:62, rating:5, color:'#e8730a', cover:'#0a2540' },
  { name:'Borges Veículos', segment:'Revenda de veículos', city:'Várzea Grande', anuncios:35, rating:4, color:'#16a34a', cover:'#0d2f54' },
  { name:'Pokone Multimarcas', segment:'Revenda de veículos', city:'Sinop', anuncios:51, rating:5, color:'#7c3aed', cover:'#103e72' },
  { name:'Imóveis Cuiabá', segment:'Imobiliária', city:'Cuiabá', anuncios:120, rating:5, color:'#0891b2', cover:'#0a2540' },
  { name:'Pantanal Imóveis', segment:'Imobiliária', city:'Várzea Grande', anuncios:88, rating:4, color:'#be123c', cover:'#0d2f54' },
  { name:'MT Corretagem', segment:'Corretor autônomo', city:'Rondonópolis', anuncios:27, rating:5, color:'#15803d', cover:'#103e72' },
  { name:'Lar & Cia Imóveis', segment:'Imobiliária', city:'Sorriso', anuncios:43, rating:4, color:'#7c2d12', cover:'#0a2540' },
  { name:'TechMT Store', segment:'Loja de eletrônicos', city:'Cuiabá', anuncios:64, rating:5, color:'#4338ca', cover:'#0d2f54' },
];

/* Hero full-screen — fotos reais (paisagem, alta resolução) */
const HERO_SLIDES = [`${IMG}/v2.jpg`, `${IMG}/i1.jpg`, `${IMG}/v6.jpg`, `${IMG}/v7.jpg`];

const ALL = [...VEICULOS, ...IMOVEIS, ...PRODUTOS];

const CONTATO = {
  whatsapp: '5566996121996',
  whatsapp2: '5566996559140',
  whatsappLabel: '(66) 99612-1996',
  whatsappLabel2: '(66) 99655-9140',
  email: 'contato@comprefacilmt.com.br',
  instagram: '#', facebook: '#', youtube: '#',
};

function formatBRL(v) {
  return v.toLocaleString('pt-BR', { style:'currency', currency:'BRL', minimumFractionDigits: v % 1 === 0 ? 0 : 2 });
}
function waLink(msg) { return `https://wa.me/${CONTATO.whatsapp}?text=${encodeURIComponent(msg)}`; }
