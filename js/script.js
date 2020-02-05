let addTarefa = document.querySelector('#adicionar-tarefa')
let tarefas = document.querySelector('#tarefas')
let inputTarefa = document.querySelector('#tarefa-digitada')



addTarefa.onclick = function(){

    let valorDigitado = inputTarefa.value

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

    tarefas.innerHTML += tarefaNova
}