const containerAdicionar = document.querySelector('.adicionar')
const btnAdicionar = document.querySelector("button")
const inputAdicionar = document.querySelector("input")
const containertarefas = document.querySelector(".tarefas")
const tarefasTemplates = containertarefas.querySelector("template")

function criarTarefa(texto){
    if (texto.trim()=="")return
    const tarefa = tarefasTemplates.content.cloneNode(true)
    const btnexcluir = tarefa.querySelector("button")
    const span = tarefa.querySelector("span")
    btnexcluir.onclick = () => {
        btnexcluir.closest(".tarefa").remove()
    }
    span.textContent = texto 
    containertarefas.appendChild(tarefa)
}

btnAdicionar.onclick = function(){
    const texto = inputAdicionar.value.trim();

    criarTarefa(texto)
    inputAdicionar.value = ""
}
