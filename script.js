 function pesquisar() {
  let div = document.getElementById("resultadopesquisa");

  let campoPesquisa = document.getElementById("campopesquisa").value;
  
  if (campoPesquisa == "") {
    return;
  }
  
campoPesquisa = campoPesquisa.toLowerCase()
  
  let resultados = "";

  for (let dado of dados) {
    if (dado.titulo.includes(campoPesquisa) || dado.descrição.includes(campoPesquisa) || dado.tags.includes(campoPesquisa))
    {
      resultados += `<h1> ${dado.titulo} </h1> <p> ${dado.descrição} </p>`;
    }
  } 
  div.innerHTML = resultados;
}
