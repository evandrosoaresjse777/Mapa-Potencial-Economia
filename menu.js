/* ===== MENU E LAYOUT DO SITE =====
   Para criar uma página nova: adicione uma linha em PAGINAS (grupo: "Mercado" ou "Comercial"). */
const PAGINAS=[
  {arq:"index.html",nome:"Início",grupo:"Geral"},
  {arq:"noticias-setor.html",nome:"Notícias",grupo:"Mercado",desc:"Notícias relevantes para o setor de energia e o mercado livre.",pronta:false},
  {arq:"projecao-pld.html",nome:"Projeção PLD",grupo:"Mercado",desc:"Acompanhamento do PLD realizado e das projeções.",pronta:false},
  {arq:"projecao-encargos.html",nome:"Projeção de Encargos",grupo:"Mercado",desc:"Encargos históricos e projetados, com opção de incluir o consumo mensal e calcular o valor gasto.",pronta:true},
  {arq:"consumo-acr-acl.html",nome:"Consumo ACR x ACL",grupo:"Mercado",desc:"Comparativo do consumo entre o mercado regulado (ACR) e o livre (ACL), mês a mês e acumulado no ano.",pronta:true},
  {arq:"potencial-economia.html",nome:"Potencial de Economia",grupo:"Comercial",desc:"Mapa do Brasil com o potencial de economia na migração para o mercado livre, por estado, distribuidora e ramo de atuação.",pronta:true},
  {arq:"prospeccao.html",nome:"Prospecção Agentes ACL",grupo:"Comercial",desc:"Consulta aos agentes do mercado livre (ACL) com filtros por nome, CNPJ, cidade, estado, distribuidora, ramo, data de migração, demanda e consumo.",pronta:true},
  {arq:"simulador.html",nome:"Simulador",grupo:"Comercial",desc:"Simulador de economia com leitura automática de fatura em PDF.",pronta:false},
  {arq:"auditoria.html",nome:"Auditoria",grupo:"Comercial",desc:"Simulador de auditorias de energia.",pronta:false}
];
const GRUPOS=["Mercado","Comercial"];
const FUNDOS={
  energia:{src:"img/fundo-energia.jpg",pos:"center 55%"},
  dados:{src:"img/fundo-dados.jpg",pos:"center 62%"},
  ideia:{src:"img/fundo-ideia.jpg",pos:"center 55%"}
};
const FUNDO_PAGINA={"index.html":"energia","potencial-economia.html":"dados","projecao-encargos.html":"dados","consumo-acr-acl.html":"dados","prospeccao.html":"dados"};
(function(){
  const atual=location.pathname.split("/").pop()||"index.html";
  const st=document.createElement("style");
  st.textContent=`
body.com-menu{display:grid;grid-template-columns:250px minmax(0,1fr);min-height:100vh}
.col{min-width:0}
body.com-menu main{max-width:1500px;margin:0 auto;padding:22px 24px}
.side{position:sticky;top:0;height:100vh;overflow:auto;background:var(--card);border-right:1px solid var(--bd);padding:18px 12px;display:flex;flex-direction:column;gap:2px}
.brand{display:flex;gap:10px;align-items:center;padding:4px 12px 14px;border-bottom:1px solid var(--bd);margin-bottom:10px}
.logo{width:34px;height:34px;border-radius:9px;background:var(--c1);display:grid;place-items:center;color:#fff;font-size:1.1rem}
.brand b{display:block;font-size:.95rem}.brand small{color:var(--mut);font-size:.72rem}
.side h3{font-size:.7rem;text-transform:uppercase;letter-spacing:.08em;color:var(--mut);margin:16px 12px 4px}
.side a{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:8px 12px;border-radius:8px;color:var(--tx);text-decoration:none;font-size:.92rem}
.side a:hover{background:color-mix(in srgb,var(--c1) 12%,transparent)}
.side a[aria-current="page"]{background:var(--c1);color:#fff}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]) .side a[aria-current="page"]{color:#08210f}}
.side em{font-style:normal;font-size:.66rem;color:var(--mut);border:1px solid var(--bd);border-radius:999px;padding:1px 7px;white-space:nowrap}
.side a[aria-current="page"] em{color:inherit;border-color:currentColor}
.hero{padding:26px 24px 22px}.hero.big{padding:60px 24px 54px}
.hero .in{max-width:1500px;margin:0 auto}
.hero h1{color:#fff;margin:0 0 6px;font-size:1.6rem;text-shadow:0 2px 12px rgba(0,0,0,.5)}
.hero.big h1{font-size:2.1rem}
.hero .sub{color:#d6dfe9;margin:0;font-size:1rem;text-shadow:0 1px 8px rgba(0,0,0,.5)}
.topbar{display:none;align-items:center;gap:10px;padding:10px 14px;background:var(--card);border-bottom:1px solid var(--bd);position:sticky;top:0;z-index:40}
.topbar button{font-size:1.3rem;background:none;border:0;color:var(--tx);cursor:pointer;padding:0 6px}
.ov{display:none}
@media (max-width:900px){
  body.com-menu{display:block}
  .side{position:fixed;left:0;top:0;bottom:0;width:270px;z-index:60;transform:translateX(-100%);transition:transform .2s}
  body.menu-aberto .side{transform:none;box-shadow:0 0 40px rgba(0,0,0,.5)}
  body.menu-aberto .ov{display:block;position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:55}
  .topbar{display:flex}
  body.com-menu main{padding:16px}.hero{padding:22px 16px 18px}.hero.big{padding:40px 16px 34px}
}
.grupo-t{font-size:.8rem;text-transform:uppercase;letter-spacing:.06em;color:var(--mut);margin:22px 0 10px}
.grid{grid-template-columns:repeat(auto-fill,minmax(290px,1fr))!important}
.layout{display:grid;grid-template-columns:minmax(0,1fr) 360px;gap:16px;align-items:start}
.painel{display:flex;flex-direction:column;gap:12px}
.painel .stats{display:flex;flex-direction:column;gap:10px;margin:0}
.dlist{max-height:44vh;overflow:auto}
.dlist .row{display:flex;justify-content:space-between;gap:12px;padding:6px 0;border-bottom:1px solid var(--bd);font-size:.9rem}
.dlist .v{font-weight:600}.dlist .na{color:var(--mut);font-style:italic}
@media (max-width:1200px){.layout{grid-template-columns:1fr}}
@media (min-width:1500px){.duo{display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,1fr);gap:16px;align-items:start}.duo2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}}`;
  document.head.appendChild(st);
  const main=document.querySelector("main");if(!main)return;
  const h1=main.querySelector("h1"),sub=main.querySelector(".sub"),old=document.getElementById("menu");if(old)old.remove();
  document.body.classList.add("com-menu");
  const link=p=>`<a href="${p.arq}"${p.arq===atual?' aria-current="page"':""}>${p.nome}${p.pronta===false?"<em>em breve</em>":""}</a>`;
  const side=document.createElement("aside");side.className="side";
  side.innerHTML=`<div class="brand"><span class="logo">⚡</span><div><b>Painel</b><small>Mercado Livre de Energia</small></div></div><nav>`+link(PAGINAS[0])+GRUPOS.map(g=>`<h3>${g}</h3>`+PAGINAS.filter(p=>p.grupo===g).map(link).join("")).join("")+`</nav>`;
  const col=document.createElement("div");col.className="col";
  const top=document.createElement("div");top.className="topbar";top.innerHTML='<button aria-label="Abrir menu">☰</button><span>Painel do Mercado Livre</span>';
  const ov=document.createElement("div");ov.className="ov";
  const alterna=()=>document.body.classList.toggle("menu-aberto");
  top.firstChild.onclick=alterna;ov.onclick=alterna;
  col.appendChild(top);
  if(h1){
    const f=FUNDOS[FUNDO_PAGINA[atual]||"ideia"],hero=document.createElement("header"),inn=document.createElement("div");
    hero.className="hero"+(atual==="index.html"?" big":"");inn.className="in";
    hero.style.backgroundSize="cover";hero.style.backgroundPosition=f.pos;hero.style.backgroundColor="#0b1118";
    hero.style.backgroundImage=`linear-gradient(to bottom,rgba(8,14,22,.4),rgba(8,14,22,.85)),url(${f.src})`;
    inn.appendChild(h1);if(sub)inn.appendChild(sub);hero.appendChild(inn);col.appendChild(hero);
  }
  main.parentNode.insertBefore(col,main);col.appendChild(main);
  document.body.insertBefore(side,col);document.body.appendChild(ov);
})();
