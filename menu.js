/* ===== MENU DO SITE: para criar uma página nova, adicione uma linha aqui ===== */
const PAGINAS=[
  {arq:"index.html",nome:"Início"},
  {arq:"potencial-economia.html",nome:"Potencial de Economia",desc:"Mapa do Brasil com o potencial de economia na migração para o mercado livre, por estado, distribuidora e ramo de atuação.",pronta:true},
  {arq:"noticias-setor.html",nome:"Notícias",desc:"Notícias relevantes para o setor de energia e o mercado livre.",pronta:false},
  {arq:"prospeccao.html",nome:"Prospecção Agentes ACL",desc:"Consulta aos agentes do mercado livre (ACL) com filtros por nome, CNPJ, cidade, estado, distribuidora, ramo, data de migração, demanda e consumo.",pronta:true},
  {arq:"consumo-acr-acl.html",nome:"Consumo ACR x ACL",desc:"Comparativo do consumo entre o mercado regulado (ACR) e o livre (ACL), mês a mês e acumulado no ano.",pronta:true},
  {arq:"simulador.html",nome:"Simulador",desc:"Simulador de economia com leitura automática de fatura em PDF.",pronta:false},
  {arq:"auditoria.html",nome:"Auditoria",desc:"Simulador de auditorias de energia.",pronta:false},
  {arq:"projecao-encargos.html",nome:"Projeção de Encargos",desc:"Encargos históricos e projetados, com opção de incluir o consumo mensal e calcular o valor gasto.",pronta:true},
  {arq:"projecao-pld.html",nome:"Projeção PLD",desc:"Acompanhamento do PLD realizado e das projeções.",pronta:false}
];
/* Imagens de fundo do topo de cada página (arquivos na pasta img/) */
const FUNDOS={
  energia:{src:"img/fundo-energia.jpg",pos:"center 55%"},
  dados:{src:"img/fundo-dados.jpg",pos:"center 62%"},
  ideia:{src:"img/fundo-ideia.jpg",pos:"center 55%"}
};
const FUNDO_PAGINA={"index.html":"energia","potencial-economia.html":"dados","projecao-encargos.html":"dados","consumo-acr-acl.html":"dados","prospeccao.html":"dados"};
(function(){
  const atual=location.pathname.split("/").pop()||"index.html";
  const st=document.createElement("style");
  st.textContent=`#menu{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 20px;padding-bottom:12px;border-bottom:1px solid var(--bd)}
#menu a{padding:7px 14px;border-radius:999px;border:1px solid var(--bd);background:var(--card);color:var(--tx);text-decoration:none;font-size:.9rem}
#menu a[aria-current="page"]{background:var(--c1);border-color:var(--c1);color:#fff}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]) #menu a[aria-current="page"]{color:#08210f}}
.hero{background-color:#0b1118;background-size:cover;background-position:var(--pos,center);padding:34px 16px 30px}
.hero.big{padding:72px 16px 66px}
.hero .in{max-width:900px;margin:0 auto}
.hero h1{color:#fff;margin:0 0 6px;font-size:1.7rem;text-shadow:0 2px 12px rgba(0,0,0,.5)}
.hero.big h1{font-size:2.2rem}
.hero .sub{color:#d6dfe9;margin:0;font-size:1rem;text-shadow:0 1px 8px rgba(0,0,0,.5)}`;
  document.head.appendChild(st);
  const main=document.querySelector("main"),h1=main&&main.querySelector("h1");
  if(h1){
    const f=FUNDOS[FUNDO_PAGINA[atual]||"ideia"],sub=main.querySelector(".sub");
    const hero=document.createElement("header"),inn=document.createElement("div");
    hero.className="hero"+(atual==="index.html"?" big":"");inn.className="in";
    hero.style.setProperty("--pos",f.pos);
    hero.style.backgroundImage=`linear-gradient(to bottom,rgba(8,14,22,.35),rgba(8,14,22,.82)),url(${f.src})`;
    inn.appendChild(h1);if(sub)inn.appendChild(sub);hero.appendChild(inn);
    document.body.insertBefore(hero,main);
  }
  const m=document.getElementById("menu");
  if(m)PAGINAS.forEach(p=>{const a=document.createElement("a");a.href=p.arq;a.textContent=p.nome;if(p.arq===atual)a.setAttribute("aria-current","page");m.appendChild(a)});
})();
