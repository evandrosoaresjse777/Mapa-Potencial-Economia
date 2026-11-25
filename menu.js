/* ===== MENU DO SITE: para criar uma página nova, adicione uma linha aqui ===== */
const PAGINAS=[
  {arq:"index.html",nome:"Início"},
  {arq:"potencial-economia.html",nome:"Potencial de Economia",desc:"Mapa do Brasil com o potencial de economia na migração para o mercado livre, por estado, distribuidora e ramo de atuação.",pronta:true},
  {arq:"noticias-setor.html",nome:"Notícias",desc:"Notícias relevantes para o setor de energia e o mercado livre.",pronta:false},
  {arq:"prospeccao.html",nome:"Prospecção",desc:"Prospecção de clientes via base de dados, com consumidores do mercado livre (ACL) e do mercado regulado (ACR).",pronta:false},
  {arq:"simulador.html",nome:"Simulador",desc:"Simulador de economia com leitura automática de fatura em PDF.",pronta:false},
  {arq:"auditoria.html",nome:"Auditoria",desc:"Simulador de auditorias de energia.",pronta:false},
  {arq:"projecao-encargos.html",nome:"Projeção de Encargos",desc:"Encargos históricos e projetados, com opção de incluir o consumo mensal e calcular o valor gasto.",pronta:true},
  {arq:"projecao-pld.html",nome:"Projeção PLD",desc:"Acompanhamento do PLD realizado e das projeções.",pronta:false}
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
