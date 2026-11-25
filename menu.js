/* ===== MENU DO SITE: para criar uma página nova, adicione uma linha aqui ===== */
const PAGINAS=[
  {arq:"index.html",nome:"Início"},
  {arq:"potencial-economia.html",nome:"Potencial de Economia",desc:"Mapa do Brasil com o potencial de economia na migração para o mercado livre, por estado, distribuidora e ramo de atividade.",pronta:true},
  {arq:"projecao-encargos.html",nome:"Projeção de Encargos",desc:"Encargos setoriais (ESS, EER, ERCAP e Angra): média anual realizada e projeção até 2030.",pronta:true},
  {arq:"potencial-preco.html",nome:"Potencial de Preço",desc:"Comparativo de preços de energia no mercado livre.",pronta:false},
  {arq:"noticias-setor.html",nome:"Notícias do Setor",desc:"Principais notícias e movimentos do setor de energia.",pronta:false}
];
(function(){
  const atual=location.pathname.split("/").pop()||"index.html";
  const st=document.createElement("style");
  st.textContent=`#menu{display:flex;flex-wrap:wrap;gap:6px;margin:0 0 20px;padding-bottom:12px;border-bottom:1px solid var(--bd)}
#menu a{padding:7px 14px;border-radius:999px;border:1px solid var(--bd);background:var(--card);color:var(--tx);text-decoration:none;font-size:.9rem}
#menu a[aria-current="page"]{background:var(--c1);border-color:var(--c1);color:#fff}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]) #menu a[aria-current="page"]{color:#08210f}}`;
  document.head.appendChild(st);
  const m=document.getElementById("menu");
  if(m)PAGINAS.forEach(p=>{const a=document.createElement("a");a.href=p.arq;a.textContent=p.nome;if(p.arq===atual)a.setAttribute("aria-current","page");m.appendChild(a)});
})();
