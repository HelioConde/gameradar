const API_BASE="https://www.cheapshark.com/api/1.0";
const WATCH_KEY="gameradar:watchlist:v1";
const LANGUAGE_KEY="gameradar:language";

const ui={
  pt:{
    watchlist:"Minha lista",eyebrow:"PROMOÇÕES DE JOGOS · SEM CONTA",
    heroTitle:'Preço baixo é bom. <span>Preço baixo no jogo certo é melhor.</span>',
    heroText:"Pesquise jogos em promoção, compare desconto e salve um preço-alvo. O GameRadar guarda sua lista neste navegador e destaca quando uma oferta entra no seu limite.",
    searchLabel:"Buscar jogo",searchButton:"Buscar promoções",benefit1:"✓ Busca de ofertas sem login",benefit2:"✓ Lista local com preço-alvo",benefit3:"✓ Sem notificação enganosa",
    howTitle:"COMO O RADAR PRIORIZA",how1:"Preço atual",how1Text:"Quanto você paga agora.",how2:"Desconto",how2Text:"Economia frente ao preço de referência.",how3:"Seu alvo",how3Text:"Se a oferta já entrou no limite que você definiu.",
    maxPrice:"Preço máximo",minSavings:"Desconto mínimo",sortBy:"Ordenar",sortDeal:"Melhor oferta",sortPrice:"Menor preço",sortSaving:"Maior desconto",sortTitle:"Nome",
    refresh:"Atualizar radar",radarEyebrow:"RADAR AGORA",dealsTitle:"Promoções em destaque",watchEyebrow:"MINHA LISTA",watchTitle:"Preços que você está esperando",openList:"Abrir lista",
    ad:"PUBLICIDADE",adNote:"espaço reservado · fora dos botões de oferta",guideEyebrow:"ANTES DE COMPRAR",guideTitle:"Desconto alto não é recomendação automática.",
    guideText:"Confira loja, edição, região, DRM e histórico do jogo antes de comprar. O MVP organiza ofertas; ele não substitui sua decisão.",
    watchDialogTitle:"Jogos acompanhados",watchPrivacy:"Sua lista fica somente neste navegador.",clearList:"Limpar lista",priceTarget:"PREÇO-ALVO",
    targetHelp:"Defina quanto você gostaria de pagar em dólar. O radar apenas destaca quando o preço consultado entra nesse limite.",saveTarget:"Salvar preço-alvo",
    footerText:"Preços podem mudar. Sempre confirme os detalhes na loja antes de concluir a compra.",about:"Sobre",privacy:"Privacidade",terms:"Termos",
    loading:"Buscando preços atuais…",searching:"Buscando ofertas…",loaded:"Radar atualizado.",error:"Não foi possível consultar preços agora. Mostrando um modo demonstrativo.",
    noResults:"Nenhuma oferta encontrada com estes filtros.",results:function(n,q){return q? n+" oferta(s) para “"+q+"”":n+" ofertas em destaque";},
    store:"Loja",rating:"Nota da oferta",seeDeal:"Ver oferta",watch:"Acompanhar",watching:"Acompanhando",targetReached:"Preço-alvo atingido",
    target:"Alvo",current:"Atual",remove:"Remover",emptyWatch:"Sua lista ainda está vazia.",saved:"Preço-alvo salvo.",removed:"Jogo removido da lista.",cleared:"Lista limpa.",
    demoSource:"Modo demonstrativo",liveSource:"Preços via CheapShark",invalidTarget:"Informe um preço-alvo válido.",all:"Todos"
  },
  en:{
    watchlist:"My list",eyebrow:"GAME DEALS · NO ACCOUNT",
    heroTitle:'Low price is good. <span>Low price on the right game is better.</span>',
    heroText:"Search game deals, compare discounts and save a target price. GameRadar keeps your list in this browser and highlights when a deal reaches your limit.",
    searchLabel:"Search game",searchButton:"Search deals",benefit1:"✓ Deal search without login",benefit2:"✓ Local list with target price",benefit3:"✓ No misleading alerts",
    howTitle:"HOW THE RADAR PRIORITIZES",how1:"Current price",how1Text:"What you would pay now.",how2:"Discount",how2Text:"Savings versus the reference price.",how3:"Your target",how3Text:"Whether the current offer is inside your limit.",
    maxPrice:"Maximum price",minSavings:"Minimum discount",sortBy:"Sort by",sortDeal:"Best deal",sortPrice:"Lowest price",sortSaving:"Biggest discount",sortTitle:"Title",
    refresh:"Refresh radar",radarEyebrow:"RADAR NOW",dealsTitle:"Featured deals",watchEyebrow:"MY LIST",watchTitle:"Prices you are waiting for",openList:"Open list",
    ad:"ADVERTISEMENT",adNote:"reserved space · outside deal buttons",guideEyebrow:"BEFORE BUYING",guideTitle:"A big discount is not an automatic recommendation.",
    guideText:"Check store, edition, region, DRM and game history before buying. The MVP organizes deals; it does not replace your decision.",
    watchDialogTitle:"Watched games",watchPrivacy:"Your list stays only in this browser.",clearList:"Clear list",priceTarget:"TARGET PRICE",
    targetHelp:"Set how much you would like to pay in US dollars. The radar only highlights when a checked price reaches that limit.",saveTarget:"Save target price",
    footerText:"Prices may change. Always confirm deal details in the store before buying.",about:"About",privacy:"Privacy",terms:"Terms",
    loading:"Loading current prices…",searching:"Searching deals…",loaded:"Radar updated.",error:"Could not check prices right now. Showing demo mode.",
    noResults:"No deals found with these filters.",results:function(n,q){return q?n+" deal(s) for “"+q+"”":n+" featured deals";},
    store:"Store",rating:"Deal rating",seeDeal:"See deal",watch:"Watch",watching:"Watching",targetReached:"Target price reached",
    target:"Target",current:"Current",remove:"Remove",emptyWatch:"Your list is still empty.",saved:"Target price saved.",removed:"Game removed from your list.",cleared:"List cleared.",
    demoSource:"Demo mode",liveSource:"Prices via CheapShark",invalidTarget:"Enter a valid target price.",all:"All"
  }
};

const demoDeals=[
  {gameID:"demo-hades",title:"Hades",salePrice:"9.99",normalPrice:"24.99",savings:"60.02",dealRating:"9.2",storeID:"1",thumb:"",dealID:"",demo:true},
  {gameID:"demo-stardew",title:"Stardew Valley",salePrice:"8.99",normalPrice:"14.99",savings:"40.03",dealRating:"8.9",storeID:"1",thumb:"",dealID:"",demo:true},
  {gameID:"demo-deadcells",title:"Dead Cells",salePrice:"12.49",normalPrice:"24.99",savings:"50.02",dealRating:"8.5",storeID:"1",thumb:"",dealID:"",demo:true},
  {gameID:"demo-celeste",title:"Celeste",salePrice:"4.99",normalPrice:"19.99",savings:"75.04",dealRating:"9.0",storeID:"1",thumb:"",dealID:"",demo:true},
  {gameID:"demo-hollowknight",title:"Hollow Knight",salePrice:"7.49",normalPrice:"14.99",savings:"50.03",dealRating:"9.1",storeID:"1",thumb:"",dealID:"",demo:true},
  {gameID:"demo-disco",title:"Disco Elysium",salePrice:"9.99",normalPrice:"39.99",savings:"75.02",dealRating:"8.8",storeID:"1",thumb:"",dealID:"",demo:true}
];

let lang=localStorage.getItem(LANGUAGE_KEY)==="en"?"en":"pt";
let deals=[];
let stores={};
let visibleDeals=[];
let currentQuery="";
let sourceMode="live";
let targetDealIndex=-1;
let toastTimer=null;

function $(selector){return document.querySelector(selector);}
function t(key){return ui[lang][key]||key;}
function esc(value){
  return String(value==null?"":value).replace(/[&<>"']/g,function(char){
    return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[char];
  });
}
function money(value){
  const number=Number(value);
  if(!Number.isFinite(number))return"—";
  return number.toLocaleString(lang==="pt"?"pt-BR":"en-US",{style:"currency",currency:"USD"});
}
function dealKey(deal){
  return String(deal.gameID||deal.steamAppID||deal.title||"").toLowerCase();
}
function safeThumb(deal){
  return /^https?:\/\//i.test(String(deal.thumb||""))?deal.thumb:"";
}
function offerUrl(deal){
  if(deal.dealID)return "https://www.cheapshark.com/redirect?dealID="+encodeURIComponent(deal.dealID);
  return "https://store.steampowered.com/search/?term="+encodeURIComponent(deal.title||"");
}
function readWatch(){
  try{
    const parsed=JSON.parse(localStorage.getItem(WATCH_KEY)||"[]");
    return Array.isArray(parsed)?parsed:[];
  }catch(error){return[];}
}
function writeWatch(items){
  localStorage.setItem(WATCH_KEY,JSON.stringify(items.slice(0,80)));
  updateWatchCount();
  renderWatchPreview();
  renderWatchDialog();
}
function updateWatchCount(){
  $("#watch-count").textContent=readWatch().length;
}
function watchedFor(deal){
  const key=dealKey(deal);
  return readWatch().find(function(item){return item.key===key;})||null;
}
function showToast(message){
  const toast=$("#toast");
  toast.textContent=message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer=setTimeout(function(){toast.classList.remove("show");},2200);
}
function setStatus(kind,message){
  const host=$("#status");
  host.className="status"+(kind?" "+kind:"");
  host.textContent=message||"";
}
function setLoading(value,message){
  $("#loading").hidden=!value;
  $("#refresh-button").disabled=value;
  $("#search-form").querySelector("button[type=submit]").disabled=value;
  if(value)setStatus("",message||t("loading"));
}
function normalizeDeal(deal){
  return {
    gameID:String(deal.gameID||deal.steamAppID||deal.title||""),
    steamAppID:deal.steamAppID||"",
    title:String(deal.title||"—"),
    salePrice:String(deal.salePrice==null?"":deal.salePrice),
    normalPrice:String(deal.normalPrice==null?"":deal.normalPrice),
    savings:String(deal.savings==null?"0":deal.savings),
    dealRating:String(deal.dealRating==null?"0":deal.dealRating),
    storeID:String(deal.storeID||""),
    thumb:String(deal.thumb||""),
    dealID:String(deal.dealID||""),
    demo:Boolean(deal.demo)
  };
}
async function fetchStores(){
  if(Object.keys(stores).length)return;
  try{
    const response=await fetch(API_BASE+"/stores");
    if(!response.ok)return;
    const rows=await response.json();
    if(Array.isArray(rows)){
      rows.forEach(function(store){stores[String(store.storeID)]=store.storeName||("Store "+store.storeID);});
    }
  }catch(error){}
}
async function loadDeals(query){
  currentQuery=String(query||"").trim();
  setLoading(true,currentQuery?t("searching"):t("loading"));
  try{
    await fetchStores();
    const params=new URLSearchParams();
    params.set("pageSize","60");
    params.set("onSale","1");
    params.set("sortBy","Deal Rating");
    if(currentQuery)params.set("title",currentQuery);
    const response=await fetch(API_BASE+"/deals?"+params.toString(),{headers:{Accept:"application/json"}});
    if(!response.ok)throw new Error("deals");
    const rows=await response.json();
    if(!Array.isArray(rows))throw new Error("shape");
    deals=rows.map(normalizeDeal);
    sourceMode="live";
    $("#source-note").textContent=t("liveSource");
    setStatus("success",t("loaded"));
    syncWatchPrices();
    updateUrl();
    renderDeals();
  }catch(error){
    deals=demoDeals.map(normalizeDeal);
    sourceMode="demo";
    $("#source-note").textContent=t("demoSource");
    setStatus("error",t("error"));
    renderDeals();
  }finally{
    setLoading(false);
  }
}
function filteredAndSorted(){
  const maxPrice=Number($("#price-filter").value||999);
  const minSaving=Number($("#saving-filter").value||0);
  const sort=$("#sort-filter").value;
  const rows=deals.filter(function(deal){
    return Number(deal.salePrice)<=maxPrice&&Number(deal.savings)>=minSaving;
  });
  rows.sort(function(a,b){
    if(sort==="price")return Number(a.salePrice)-Number(b.salePrice);
    if(sort==="saving")return Number(b.savings)-Number(a.savings);
    if(sort==="title")return a.title.localeCompare(b.title);
    return Number(b.dealRating)-Number(a.dealRating)||Number(b.savings)-Number(a.savings);
  });
  return rows;
}
function renderDeals(){
  visibleDeals=filteredAndSorted();
  $("#results-title").textContent=currentQuery?(lang==="pt"?"Resultados":"Results"):t("dealsTitle");
  $("#results-note").textContent=ui[lang].results(visibleDeals.length,currentQuery);
  const host=$("#deals-grid");
  if(!visibleDeals.length){
    host.innerHTML='<div class="empty-list">'+esc(t("noResults"))+'</div>';
    return;
  }
  host.innerHTML=visibleDeals.map(function(deal,index){
    const watched=watchedFor(deal);
    const targetHit=watched&&Number(deal.salePrice)<=Number(watched.target);
    const thumb=safeThumb(deal);
    const image=thumb?'<img src="'+esc(thumb)+'" alt="" loading="lazy">':'';
    const store=stores[deal.storeID]||("Store "+(deal.storeID||"—"));
    const savings=Math.round(Number(deal.savings)||0);
    return '<article class="deal-card">'+
      '<div class="deal-thumb">'+image+'</div>'+
      '<div class="deal-body">'+
        '<div><h3 class="deal-title">'+esc(deal.title)+'</h3><span class="deal-store">'+esc(store)+'</span></div>'+
        '<div class="price-line"><strong class="price-now">'+esc(money(deal.salePrice))+'</strong><span class="price-retail">'+esc(money(deal.normalPrice))+'</span><span class="saving">-'+savings+'%</span></div>'+
        '<div class="deal-rating">'+esc(t("rating"))+' · '+Number(deal.dealRating||0).toFixed(1)+'</div>'+
        (targetHit?'<div class="target-hit">✓ '+esc(t("targetReached"))+' · '+esc(t("target"))+' '+esc(money(watched.target))+'</div>':'')+
        '<div class="deal-actions"><a href="'+esc(offerUrl(deal))+'" target="_blank" rel="noopener noreferrer nofollow">'+esc(t("seeDeal"))+'</a>'+
        '<button class="'+(watched?"watching":"")+'" type="button" data-target-index="'+index+'" aria-label="'+esc(watched?t("watching"):t("watch"))+'">'+(watched?"★":"☆")+'</button></div>'+
      '</div>'+
    '</article>';
  }).join("");
}
function syncWatchPrices(){
  const items=readWatch();
  if(!items.length)return;
  let changed=false;
  const next=items.map(function(item){
    const match=deals.find(function(deal){return dealKey(deal)===item.key;});
    if(!match)return item;
    changed=true;
    return Object.assign({},item,{
      current:Number(match.salePrice),
      normal:Number(match.normalPrice),
      dealID:match.dealID,
      storeID:match.storeID,
      thumb:match.thumb,
      checkedAt:new Date().toISOString()
    });
  });
  if(changed)writeWatch(next);
}
function renderWatchPreview(){
  const host=$("#watch-preview-list");
  const items=readWatch().slice().sort(function(a,b){
    const ah=Number(a.current)<=Number(a.target)?0:1;
    const bh=Number(b.current)<=Number(b.target)?0:1;
    return ah-bh||String(a.title).localeCompare(String(b.title));
  }).slice(0,4);
  if(!items.length){
    host.innerHTML='<div class="empty-list">'+esc(t("emptyWatch"))+'</div>';
    return;
  }
  host.innerHTML=items.map(function(item){
    const hit=Number(item.current)<=Number(item.target);
    return '<div class="watch-preview-item"><div><strong>'+esc(item.title)+'</strong><span>'+esc(t("target"))+' '+esc(money(item.target))+' · '+esc(t("current"))+' '+esc(money(item.current))+'</span></div><b>'+(hit?"✓":"")+'</b></div>';
  }).join("");
}
function renderWatchDialog(){
  const host=$("#watch-list");
  const items=readWatch();
  if(!items.length){
    host.innerHTML='<div class="empty-list">'+esc(t("emptyWatch"))+'</div>';
    return;
  }
  host.innerHTML=items.map(function(item){
    return '<article class="watch-item" data-watch-key="'+esc(item.key)+'">'+
      '<div><strong>'+esc(item.title)+'</strong><span>'+esc(t("current"))+' '+esc(money(item.current))+'</span></div>'+
      '<div class="watch-target"><b>'+esc(money(item.target))+'</b><small>'+esc(t("target"))+'</small></div>'+
      '<button type="button" data-remove-watch="'+esc(item.key)+'">'+esc(t("remove"))+'</button>'+
    '</article>';
  }).join("");
}
function openTarget(index){
  const deal=visibleDeals[index];
  if(!deal)return;
  targetDealIndex=index;
  const existing=watchedFor(deal);
  $("#target-game-title").textContent=deal.title;
  $("#target-price").value=existing?Number(existing.target).toFixed(2):Number(deal.salePrice).toFixed(2);
  $("#target-dialog").showModal();
  setTimeout(function(){$("#target-price").select();},0);
}
function saveTarget(){
  const deal=visibleDeals[targetDealIndex];
  if(!deal)return false;
  const target=Number($("#target-price").value);
  if(!Number.isFinite(target)||target<=0){
    showToast(t("invalidTarget"));
    return false;
  }
  const key=dealKey(deal);
  const items=readWatch().filter(function(item){return item.key!==key;});
  items.unshift({
    key:key,title:deal.title,target:target,current:Number(deal.salePrice),normal:Number(deal.normalPrice),
    dealID:deal.dealID,storeID:deal.storeID,thumb:deal.thumb,addedAt:new Date().toISOString(),checkedAt:new Date().toISOString()
  });
  writeWatch(items);
  renderDeals();
  showToast(t("saved"));
  return true;
}
function removeWatch(key){
  writeWatch(readWatch().filter(function(item){return item.key!==key;}));
  renderDeals();
  showToast(t("removed"));
}
function updateUrl(){
  const url=new URL(location.href);
  if(currentQuery)url.searchParams.set("q",currentQuery); else url.searchParams.delete("q");
  history.replaceState(null,"",url.pathname+(url.searchParams.toString()?"?"+url.searchParams.toString():""));
}
function applyLanguage(){
  document.documentElement.lang=lang==="pt"?"pt-BR":"en";
  document.querySelectorAll("[data-i18n]").forEach(function(element){
    const value=t(element.dataset.i18n);
    if(typeof value==="string"&&value.indexOf("<span>")>=0)element.innerHTML=value;
    else if(typeof value==="string")element.textContent=value;
  });
  document.querySelectorAll("[data-i18n-option]").forEach(function(element){element.textContent=t(element.dataset.i18nOption);});
  $("#language-toggle").textContent=lang==="pt"?"EN":"PT-BR";
  $("#source-note").textContent=sourceMode==="live"?t("liveSource"):t("demoSource");
  localStorage.setItem(LANGUAGE_KEY,lang);
  renderDeals();
  renderWatchPreview();
  renderWatchDialog();
}

$("#search-form").addEventListener("submit",function(event){
  event.preventDefault();
  loadDeals($("#search-input").value);
});
$("#refresh-button").addEventListener("click",function(){loadDeals(currentQuery);});
["#price-filter","#saving-filter","#sort-filter"].forEach(function(selector){
  $(selector).addEventListener("change",renderDeals);
});
$("#language-toggle").addEventListener("click",function(){lang=lang==="pt"?"en":"pt";applyLanguage();});
$("#watchlist-toggle").addEventListener("click",function(){$("#watch-dialog").showModal();renderWatchDialog();});
$("#open-watchlist").addEventListener("click",function(){$("#watch-dialog").showModal();renderWatchDialog();});
$("#watch-close").addEventListener("click",function(){$("#watch-dialog").close();});
$("#watch-clear").addEventListener("click",function(){localStorage.removeItem(WATCH_KEY);updateWatchCount();renderWatchPreview();renderWatchDialog();renderDeals();showToast(t("cleared"));});

document.addEventListener("click",function(event){
  const target=event.target.closest("[data-target-index]");
  if(target){openTarget(Number(target.dataset.targetIndex));return;}
  const remove=event.target.closest("[data-remove-watch]");
  if(remove)removeWatch(remove.dataset.removeWatch);
});

$("#target-form").addEventListener("submit",function(event){
  if(event.submitter&&event.submitter.value==="cancel")return;
  event.preventDefault();
  if(saveTarget())$("#target-dialog").close();
});

(function boot(){
  updateWatchCount();
  renderWatchPreview();
  const q=new URLSearchParams(location.search).get("q")||"";
  $("#search-input").value=q;
  applyLanguage();
  loadDeals(q);
})();