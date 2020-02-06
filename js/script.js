let addTarefa = document.querySelector('#adicionar-tarefa')
let tarefas = document.querySelector('#tarefas')
let inputTarefa = document.querySelector('#tarefa-digitada')
let tarefaConcluida = document.querySelector('.botao-tarefa')
let listaTarefas = localStorage.getItem('listaTarefas') ? JSON.parse(localStorage.getItem('listaTarefas')) : []


const salvarLocalStorage = tarefas => {
    let tarefasEmJson = JSON.stringify(tarefas)
    localStorage.setItem('listaTarefas', tarefasEmJson)
    console.log("Lista de tarefas salva com sucesso");
}

const mostrarNaTela = (arrayTarefas) => {
    arrayTarefas.forEach(textoTarefa => {
        let tarefaNova = `<div class="col-md-4">
        <div class="card-tarefa">
            <div class="texto-tarefa">
                ${textoTarefa}
            </div>
            <div class="botao-tarefa">
                 <img src="img/check-icone-1.png" width="25" alt="botão para finalizar tarefa">
            </div>
        </div>
        </div>`

        tarefas.insertAdjacentHTML('beforeend', tarefaNova)

        let objTarefaNova = tarefas.lastElementChild

        let btnCheckTarefaNova = objTarefaNova.lastElementChild.lastElementChild
        btnCheckTarefaNova.onclick = (event) => {
        tarefas.removeChild(event.target.parentNode.parentNode.parentNode)
        listaTarefas = listaTarefas.filter(valor => valor != textoTarefa)

        salvarLocalStorage(listaTarefas)
        };







    });
}

mostrarNaTela(listaTarefas);

const criarTarefaComEnter = (event) => {
    console.log(event)
    if (event.keyCode == 13 || event.type == "click") {

        let valorDigitado = inputTarefa.value
        if (inputTarefa.value == "") {
            alert("Você deve digitar uma tarefa primeiro!")
            return
        }

        listaTarefas.push(valorDigitado);
        salvarLocalStorage(listaTarefas)


        inputTarefa.value = ""

        let tarefaNova = `<div class="col-md-4">
<div class="card-tarefa">
    <div class="texto-tarefa">
        ${valorDigitado}
    </div>
    <div class="botao-tarefa">
         <img src="img/check-icone-1.png" width="25" alt="botão para finalizar tarefa">
    </div>
</div>
</div>`

        tarefas.insertAdjacentHTML('beforeend', tarefaNova)

        let objTarefaNova = tarefas.lastElementChild

        let btnCheckTarefaNova = objTarefaNova.lastElementChild.lastElementChild
        btnCheckTarefaNova.onclick = (event) => {
            event.target.parentNode.parentNode.parentNode.remove()
        }

    }
}

inputTarefa.addEventListener('keypress', criarTarefaComEnter)

addTarefa.addEventListener('click', criarTarefaComEnter)