function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    console.log(section); 
    
    // Log para verificar se a seção foi encontrada

    let campoPesquisa = document.getElementById("campoPesquisa").value; 
  
    // Inicializa uma string vazia para armazenar os resultados
    let resultadosHtml = "";

    // se campoPesquisa for uma string sem nada
    if(campoPesquisa == "") {
        section.innerHTML = "<p>Nenhum resultado foi encontrado</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre os dados e cria o HTML para cada resultado
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // Se titulo icludes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes (campoPesquisa) || tags.includes(campoPesquisa)){
            //Cria um novo elemento 
            resultadosHtml += `
            <div class="item-resultado">
              <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
              </h2>
              <p class="descricao-meta">${dado.descricao}
              <a href="${dado.link}" target="_blank">Mais sobre mim</a></p>
              </div>
          `;
        }      
    }

    if (!resultadosHtml) {
        resultados = "<p>Nada foi encontrado<p/>"
    }
  
    // Atualiza o conteúdo da seção com os resultados
    section.innerHTML = resultadosHtml;
  
    // Log para depuração (pode ser removido em produção)
    console.log(dados);
  }