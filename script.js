function adicionar() {

    let tarefa = document.getElementById('tarefa').value;

    let listaTarefas = document.getElementById('listaTarefas');

    let novaTarefa = document.createElement('li');

    novaTarefa.innerHTML = tarefa;

    listaTarefas.appendChild(novaTarefa);
    
    contador();
}

function contador() {

    let contador = document.getElementById('contador');

    let cont = Number(contador.innerHTML);

    cont = cont + 1;

    contador.innerHTML = cont;

}