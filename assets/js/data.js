/* =========================================================
   Dados de exemplo — Compre Fácil MT
   Imagens reais puxadas do site oficial (comprefacilmt.com.br)
   + complementos da web, com fallback automático.
   ========================================================= */

const SITE = 'https://comprefacilmt.com.br/wp-content/uploads';

const FALLBACK = {
  carro:   'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=70',
  imovel:  'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=70',
  produto: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=800&q=70',
};

const VEICULOS = [
  { id:'v1', title:'Sedan Premium Automático', cat:'veiculos', type:'Carro', brand:'BMW', year:2019, km:48000, fuel:'Gasolina', gear:'Automático', price:196900, oldPrice:209900, city:'Cuiabá', dealer:'Speed Car', img:`${SITE}/2025/01/6513400_0_O_97ff79bcef.jpeg`, fb:FALLBACK.carro, badge:'Premium' },
  { id:'v2', title:'Picape 4x4 Diesel', cat:'veiculos', type:'Carro', brand:'Toyota', year:2021, km:62000, fuel:'Diesel', gear:'Automático', price:289900, city:'Várzea Grande', dealer:'Borges Veículos', img:`${SITE}/2025/01/6557290_0_O_69cc8d27f9.jpeg`, fb:FALLBACK.carro, badge:'Destaque' },
  { id:'v3', title:'Sedan Completo', cat:'veiculos', type:'Carro', brand:'Honda', year:2020, km:55000, fuel:'Flex', gear:'Automático', price:139900, city:'Rondonópolis', dealer:'Aliança Veículos', img:`${SITE}/2024/10/5365901_0_O_6890dd1bb2.jpeg`, fb:FALLBACK.carro },
  { id:'v4', title:'Hatch Econômico', cat:'veiculos', type:'Carro', brand:'Volkswagen', year:2014, km:98000, fuel:'Flex', gear:'Manual', price:42900, city:'Cuiabá', dealer:'Pokone Multimarcas', img:`${SITE}/2024/10/6164820_1_O_5b19ffa795.jpeg`, fb:FALLBACK.carro, badge:'Oferta' },
  { id:'v5', title:'Moto Naked 500cc', cat:'veiculos', type:'Moto', brand:'Honda', year:2022, km:9500, fuel:'Gasolina', gear:'Manual', price:38900, city:'Sinop', dealer:'Pokone Multimarcas', img:'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=800&q=70', fb:FALLBACK.carro },
  { id:'v6', title:'SUV Top de Linha', cat:'veiculos', type:'Carro', brand:'Jeep', year:2022, km:31000, fuel:'Flex', gear:'Automático', price:159900, oldPrice:168000, city:'Cuiabá', dealer:'Speed Car', img:`${SITE}/2024/10/6345493_7_O_bab8bc9e3c.jpeg`, fb:FALLBACK.carro, badge:'Oferta' },
  { id:'v7', title:'Picape Intermediária', cat:'veiculos', type:'Carro', brand:'Fiat', year:2021, km:44000, fuel:'Diesel', gear:'Automático', price:149900, city:'Tangará da Serra', dealer:'Aliança Veículos', img:`${SITE}/2025/01/6659923_6_O_40a7a0732f.jpeg`, fb:FALLBACK.carro },
  { id:'v8', title:'Caminhão Pesado', cat:'veiculos', type:'Caminhão', brand:'Scania', year:2018, km:410000, fuel:'Diesel', gear:'Automático', price:420000, city:'Rondonópolis', dealer:'Borges Veículos', img:`${SITE}/2025/01/6582729_12_O_04dd7cc306.jpeg`, fb:FALLBACK.carro, badge:'Premium' },
];

const IMOVEIS = [
  { id:'i1', title:'Apartamento 3 quartos', cat:'imoveis', type:'Apartamento', deal:'Venda', beds:3, baths:2, garage:2, area:98, price:680000, city:'Cuiabá', img:`${SITE}/jet-form-builder/b78d58b92588fefb4b785e003b0d7424/2026/06/9143.jpg`, fb:FALLBACK.imovel, badge:'Destaque' },
  { id:'i2', title:'Casa em condomínio fechado', cat:'imoveis', type:'Casa', deal:'Venda', beds:4, baths:4, garage:4, area:320, price:1850000, city:'Cuiabá', img:`${SITE}/jet-form-builder/b78d58b92588fefb4b785e003b0d7424/2026/06/8229-1.jpg`, fb:FALLBACK.imovel, badge:'Premium' },
  { id:'i3', title:'Apartamento para alugar', cat:'imoveis', type:'Apartamento', deal:'Aluguel', beds:2, baths:1, garage:1, area:62, price:1800, city:'Várzea Grande', img:`${SITE}/jet-form-builder/b78d58b92588fefb4b785e003b0d7424/2026/06/8129.jpg`, fb:FALLBACK.imovel },
  { id:'i4', title:'Sobrado amplo', cat:'imoveis', type:'Casa', deal:'Venda', beds:3, baths:3, garage:2, area:180, price:540000, city:'Cuiabá', img:`${SITE}/jet-form-builder/b78d58b92588fefb4b785e003b0d7424/2026/06/8014.jpg`, fb:FALLBACK.imovel },
  { id:'i5', title:'Casa com área de lazer', cat:'imoveis', type:'Casa', deal:'Venda', beds:3, baths:2, garage:3, area:240, price:760000, city:'Várzea Grande', img:`${SITE}/jet-form-builder/b78d58b92588fefb4b785e003b0d7424/2026/06/7974.webp`, fb:FALLBACK.imovel, badge:'Oportunidade' },
  { id:'i6', title:'Casa térrea 2 quartos', cat:'imoveis', type:'Casa', deal:'Venda', beds:2, baths:1, garage:2, area:120, price:320000, city:'Rondonópolis', img:`${SITE}/jet-form-builder/b78d58b92588fefb4b785e003b0d7424/2026/06/8379.jpg`, fb:FALLBACK.imovel, badge:'Oferta' },
];

const PRODUTOS = [
  { id:'p1', title:'Violão Takamine Acústico/Elétrico', cat:'loja', group:'Instrumentos', price:2000, oldPrice:2600, city:'Cuiabá', seller:'Loja do Anunciante', img:'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=800&q=70', fb:FALLBACK.produto, badge:'Imperdível', featured:true },
  { id:'p2', title:'iPhone 15 — Seminovo', cat:'loja', group:'Eletrônicos', price:4299, oldPrice:4999, city:'Cuiabá', seller:'TechMT', img:`${SITE}/2026/04/iphone-15-capa-1-300x300.jpeg`, fb:FALLBACK.produto, badge:'Oferta' },
  { id:'p3', title:'iPhone 12 — Ótimo estado', cat:'loja', group:'Eletrônicos', price:2399, city:'Várzea Grande', seller:'TechMT', img:`${SITE}/2026/04/foto-capa-iphone-12-300x300.jpeg`, fb:FALLBACK.produto },
  { id:'p4', title:'Furadeira de Impacto 750W', cat:'loja', group:'Ferramentas', price:289.90, city:'Cuiabá', seller:'Casa & Obra', img:'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=70', fb:FALLBACK.produto },
  { id:'p5', title:'Notebook 16GB SSD 512GB', cat:'loja', group:'Eletrônicos', price:3499, oldPrice:3999, city:'Cuiabá', seller:'TechMT', img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=800&q=70', fb:FALLBACK.produto, badge:'Oferta' },
  { id:'p6', title:'Conjunto de Panelas Antiaderente', cat:'loja', group:'Casa', price:259.90, city:'Rondonópolis', seller:'Casa & Obra', img:'https://images.unsplash.com/photo-1584990347449-a2d4c2c9bda5?auto=format&fit=crop&w=800&q=70', fb:FALLBACK.produto },
  { id:'p7', title:'Fone Bluetooth com Cancelamento', cat:'loja', group:'Eletrônicos', price:349, city:'Cuiabá', seller:'TechMT', img:'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=70', fb:FALLBACK.produto },
  { id:'p8', title:'Bicicleta Aro 29 21v', cat:'loja', group:'Esporte', price:1290, oldPrice:1590, city:'Sinop', seller:'Bike Center', img:'https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=70', fb:FALLBACK.produto, badge:'Oferta' },
];

const DEALERS = [
  { name:'Speed Car', type:'Veículos', city:'Cuiabá', rating:5, color:'#1657a0' },
  { name:'Aliança Veículos', type:'Veículos', city:'Rondonópolis', rating:5, color:'#e8730a' },
  { name:'Borges Veículos', type:'Veículos', city:'Várzea Grande', rating:4, color:'#16a34a' },
  { name:'Pokone Multimarcas', type:'Veículos', city:'Sinop', rating:5, color:'#7c3aed' },
  { name:'TechMT', type:'Eletrônicos', city:'Cuiabá', rating:5, color:'#0891b2' },
];

/* Imagens largas para o hero full-screen (1 por vertical do negócio) */
const HERO_SLIDES = [
  'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=2100&q=80',   /* veículos */
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2100&q=80',   /* imóveis */
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=2100&q=80',   /* loja / varejo */
  'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=2100&q=80',   /* imóvel interior */
];

const ALL = [...VEICULOS, ...IMOVEIS, ...PRODUTOS];

/* Contatos reais do anunciante */
const CONTATO = {
  whatsapp: '5566996121996',
  whatsapp2: '5566996559140',
  whatsappLabel: '(66) 99612-1996',
  whatsappLabel2: '(66) 99655-9140',
  email: 'contato@comprefacilmt.com.br',
  instagram: '#',
  facebook: '#',
  youtube: '#',
};

function formatBRL(v) {
  return v.toLocaleString('pt-BR', { style:'currency', currency:'BRL', minimumFractionDigits: v % 1 === 0 ? 0 : 2 });
}
function waLink(msg) {
  return `https://wa.me/${CONTATO.whatsapp}?text=${encodeURIComponent(msg)}`;
}
