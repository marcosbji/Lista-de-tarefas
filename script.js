let contador =0; //contador de tarefas
let input = document.getElementById('tarefa');
let btn_add = document.getElementById('addTarefa');
let item = document.getElementById('area_lista');

function addTarefa() {
    let valor_input = input.value; 
    
    if (valor_input !== "" && valor_input !== null && valor_input !== undefined) {
        
        ++contador;

        let novoItem = `<div id="${contador}" class="item">
            <div onclick="marcarTarefa(${contador})" class="item_icone">
                <img id="icone_${contador}" class="vazio" src="./img/radio_button_unchecked_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt="icone de circulo">
            </div>
            <div onclick="marcarTarefa(${contador})" class="item_nome">
                ${valor_input}
            </div>
            <div class="item_botao">
                <button  onclick="deletar(${contador})" class="delete"><img src="./img/delete_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.png" alt=""></button>
            </div>
        </div>`;
        //add item.
        item.innerHTML += novoItem;

        //limpar campo.
        input.value = "";
        input.focus();
    }
    };
//deletar
  function deletar(id) {
        var tarefa = document.getElementById(id);
        tarefa.remove();
    }
// marcar tarefa

function marcarTarefa(id) {
  var item = document.getElementById(id);
  var classe = item.getAttribute("class");
  console.log(classe);

  if (classe == "item") {
    item.classList.add("item_feito");

    var icone = document.getElementById("icone_" + id);
    icone.classList.remove("vazio");
    icone.classList.add("selecionado");

    item.parentNode.appendChild(item);
  } else {
    item.classList.remove("item_feito");

    var icone = document.getElementById("icone_" + id);
    icone.classList.remove("selecionado");
    icone.classList.add("vazio");
  }
}

//adicionar enviar ao clicar enter
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    btn_add.click();
  }
});

//toggleMode
function toggleMode(){
  const html = document.documentElement
  if(html.classList. contains('light')) {
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  }
}
