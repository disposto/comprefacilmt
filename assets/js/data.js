/* =========================================================
   Dados de exemplo — Compre Fácil MT
   Imagens originais do site oficial + complementos, todas
   baixadas localmente em assets/img (sem hotlink).
   ========================================================= */

const IMG = 'assets/img';

const FALLBACK = { carro: `${IMG}/rv1.jpg`, imovel: `${IMG}/i1.jpg`, produto: `${IMG}/p_iphone15.jpg` };

/* Veículos REAIS anunciados no site dele (título, preço, km, revenda e cidade reais) */
const VEICULOS = [
  { id:'v1', title:'VW Amarok V6 Highline AC4 2019', cat:'veiculos', type:'Caminhão', brand:'Volkswagen', year:2019, km:110959, fuel:'Diesel', gear:'Automático', price:159900, city:'Cuiabá', dealer:'Borges Veículos', img:`${IMG}/rv1.jpg`, fb:FALLBACK.carro, badge:'Premium' },
  { id:'v2', title:'Fiat Toro Endurance AT6 2021', cat:'veiculos', type:'Caminhão', brand:'Fiat', year:2021, km:99316, fuel:'Diesel', gear:'Automático', price:86900, city:'Cuiabá', dealer:'Borges Veículos', img:`${IMG}/rv2.jpg`, fb:FALLBACK.carro, badge:'Destaque' },
  { id:'v3', title:'Hyundai HB20S 1.0 Comfort 2024', cat:'veiculos', type:'Carro', brand:'Hyundai', year:2024, km:0, fuel:'Flex', gear:'Manual', price:88990, city:'Rondonópolis', dealer:'Pokone Multimarcas', img:`${IMG}/rv3.jpg`, fb:FALLBACK.carro, badge:'0 km' },
  { id:'v4', title:'Fiat Argo 1.0 2020', cat:'veiculos', type:'Carro', brand:'Fiat', year:2020, km:31571, fuel:'Flex', gear:'Manual', price:55900, city:'Cuiabá', dealer:'Borges Veículos', img:`${IMG}/rv4.jpg`, fb:FALLBACK.carro },
  { id:'v5', title:'Honda Civic EX 2.0 Flex Automático 2017', cat:'veiculos', type:'Carro', brand:'Honda', year:2017, km:134000, fuel:'Flex', gear:'Automático', price:105900, city:'Rondonópolis', dealer:'V-CAR Vintage Veículos', img:`${IMG}/rv5.png`, fb:FALLBACK.carro },
  { id:'v6', title:'BMW 318i 2.0 16v 2011/12 Automática', cat:'veiculos', type:'Carro', brand:'BMW', year:2011, km:86886, fuel:'Gasolina', gear:'Automático', price:55990, city:'Rondonópolis', dealer:'V-CAR Vintage Veículos', img:`${IMG}/rv6.png`, fb:FALLBACK.carro },
  { id:'v7', title:'Fiat Palio Fire Economy 1.0 2014', cat:'veiculos', type:'Carro', brand:'Fiat', year:2014, km:206824, fuel:'Flex', gear:'Manual', price:32000, city:'Rondonópolis', dealer:'Shekinah Veículos', img:`${IMG}/rv7.jpg`, fb:FALLBACK.carro, badge:'Oferta' },
  { id:'v8', title:'Ford F-250 Motor MWM 6cil Diesel 2001', cat:'veiculos', type:'Caminhão', brand:'Ford', year:2001, km:null, fuel:'Diesel', gear:'Manual', price:130000, city:'Rondonópolis', dealer:'V-CAR Vintage Veículos', img:`${IMG}/rv8.png`, fb:FALLBACK.carro },
];

/* Imóveis REAIS anunciados no site dele (Rondonópolis-MT) */
const IMOVEIS = [
  { id:'i1', title:'Apartamento novo 1 quarto — próx. SESC', cat:'imoveis', type:'Apartamento', deal:'Aluguel', beds:1, baths:1, garage:1, area:42, price:1200, city:'Rondonópolis', img:`${IMG}/i1.jpg`, fb:FALLBACK.imovel, badge:'Novo' },
  { id:'i2', title:'Apartamento 1 quarto — Bairro Parati', cat:'imoveis', type:'Apartamento', deal:'Aluguel', beds:1, baths:1, garage:1, area:38, price:1000, city:'Rondonópolis', img:`${IMG}/i3.jpg`, fb:FALLBACK.imovel },
  { id:'i3', title:'Casa Condomínio Terra Nova — 3 quartos c/ suíte', cat:'imoveis', type:'Casa', deal:'Aluguel', beds:3, baths:2, garage:2, area:140, price:2700, city:'Rondonópolis', img:`${IMG}/i4.jpg`, fb:FALLBACK.imovel, badge:'Destaque' },
  { id:'i4', title:'Apartamento — Parque das Rosas, próx. SESC', cat:'imoveis', type:'Apartamento', deal:'Aluguel', beds:2, baths:1, garage:1, area:55, price:1200, city:'Rondonópolis', img:`${IMG}/i5.webp`, fb:FALLBACK.imovel },
  { id:'i5', title:'Casa nova — Condomínio Vicente Bossoni', cat:'imoveis', type:'Casa', deal:'Aluguel', beds:2, baths:1, garage:2, area:90, price:1300, city:'Rondonópolis', img:`${IMG}/i6.jpg`, fb:FALLBACK.imovel },
  { id:'i6', title:'Sítio 33,6 hectares — a 15 min do centro', cat:'imoveis', type:'Rural', deal:'Venda', beds:3, baths:2, garage:5, areaHa:33.6, price:5000000, city:'Rondonópolis', img:`${IMG}/ri7.png`, fb:FALLBACK.imovel, badge:'Oportunidade' },
];

/* Produtos REAIS da Loja Virtual do anunciante (comprefacilmt.com.br)
   price = null quando o valor é "Sob consulta" no site dele */
const PRODUTOS = [
  { id:'p1', title:'Apple iPhone 15 Pro 128GB Titânio — Pronta entrega', cat:'loja', group:'Eletrônicos', price:4089, city:'Rondonópolis', seller:'Compre Fácil MT', img:`${IMG}/p_iphone15.jpg`, fb:FALLBACK.produto, badge:'Pronta entrega', featured:true },
  { id:'p2', title:'iPhone 12 Dual SIM 64GB Preto — Recondicionado', cat:'loja', group:'Eletrônicos', price:1749, city:'Rondonópolis', seller:'Compre Fácil MT', img:`${IMG}/p_iphone12.jpg`, fb:FALLBACK.produto, badge:'Oferta' },
  { id:'p3', title:'iPhone 17 Pro 256GB Azul-profundo — Loja Oficial Apple', cat:'loja', group:'Eletrônicos', price:null, city:'Rondonópolis', seller:'Compre Fácil MT', img:`${IMG}/iphone17.jpg`, fb:FALLBACK.produto, badge:'Lacrado' },
  { id:'p4', title:'TG-15mg — 4 Ampolas Tirzepatida Original', cat:'loja', group:'Saúde', price:null, city:'Rondonópolis', seller:'Compre Fácil MT', img:`${IMG}/tg.webp`, fb:FALLBACK.produto, badge:'Original' },
  { id:'p5', title:'Tirzepatida Lipoless — 15mg', cat:'loja', group:'Saúde', price:null, city:'Rondonópolis', seller:'Compre Fácil MT', img:`${IMG}/tirzepatida.webp`, fb:FALLBACK.produto },
  { id:'p6', title:'Retatrutida Diamond Veltrane — 120mg / 6ml', cat:'loja', group:'Saúde', price:null, city:'Rondonópolis', seller:'Compre Fácil MT', img:`${IMG}/retatrutida.png`, fb:FALLBACK.produto },
  { id:'p7', title:'Kit 4 Potes Acrílico 3,8L Organizador de Geladeira', cat:'loja', group:'Casa', price:null, city:'Rondonópolis', seller:'Compre Fácil MT', img:`${IMG}/potes.jpg`, fb:FALLBACK.produto },
  { id:'p8', title:'Soprador de Folhas Turbo 46V com 2 Baterias', cat:'loja', group:'Ferramentas', price:null, city:'Rondonópolis', seller:'Compre Fácil MT', img:`${IMG}/soprador.png`, fb:FALLBACK.produto, badge:'Sem fio' },
];

/* Revendas REAIS que anunciam no site dele */
const DEALERS = [
  { name:'Borges Veículos', type:'Veículos', city:'Cuiabá', rating:5, color:'#bd1218' },
  { name:'Peixinho Automóveis', type:'Veículos', city:'Rondonópolis', rating:5, color:'#262a33' },
  { name:'V-CAR Vintage Veículos', type:'Veículos', city:'Rondonópolis', rating:5, color:'#bd1218' },
  { name:'Pokone Multimarcas', type:'Veículos', city:'Rondonópolis', rating:4, color:'#262a33' },
  { name:'Shekinah Veículos', type:'Veículos', city:'Rondonópolis', rating:5, color:'#bd1218' },
];

const REVENDAS = [
  { name:'Borges Veículos', segment:'Revenda de veículos', city:'Cuiabá', color:'#bd1218', cover:'#14161b' },
  { name:'Peixinho Automóveis', segment:'Revenda de veículos', city:'Rondonópolis', color:'#262a33', cover:'#1c1f26' },
  { name:'V-CAR Vintage Veículos', segment:'Revenda de veículos', city:'Rondonópolis', color:'#bd1218', cover:'#14161b' },
  { name:'Pokone Multimarcas', segment:'Revenda de veículos', city:'Rondonópolis', color:'#262a33', cover:'#1c1f26' },
  { name:'Shekinah Veículos', segment:'Revenda de veículos', city:'Rondonópolis', color:'#bd1218', cover:'#14161b' },
  { name:'SpeedCar', segment:'Revenda de veículos', city:'Rondonópolis', color:'#262a33', cover:'#1c1f26' },
  { name:'Aliança Veículos', segment:'Revenda de veículos', city:'Rondonópolis', color:'#bd1218', cover:'#14161b' },
];

/* Hero full-screen — fotos reais (paisagem, alta resolução) */
const HERO_SLIDES = [`${IMG}/rv1.jpg`, `${IMG}/rv2.jpg`, `${IMG}/i1.jpg`, `${IMG}/rv4.jpg`];

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
