function loadTasks() {
    const body = document.querySelector(".task-tbody")
    body.innerHTML = ""

    callApiFocus("GET", "focus", function (data) {
        const aListaData = data
        aListaData.forEach(function (value, key) {
            console.log("dados retornado:" + value + " KEY: " + key)
            console.log("dados - id:" + value.id)

            // CARREGA APENAS AS TAREFAS QUE ESTAO PAUSADAS OU EM PLAY, E NAO EXCLUIDAS
            const loadTask = value.status != "DONE" && value.status != "DELETE"
            if (loadTask) {
                body.innerHTML += ` 
                <tr>
                  <td>${value.id}</td>
                  <td>${value.description} - ${value.id}</td>
                  <td>${value.status}</td>
                  <td class="btn-table">
                    <button class="btn btn-3" onclick="editTask('${value.id}','play')">play</button>
                    <button class="btn btn-1" onclick="editTask('${value.id}','pause')">pause</button>
                    <button class="btn btn-2" onclick="editTask('${value.id}','done')">done</button>
                    <button class="btn btn-3" onclick="editTask('${value.id}','edit')">Edit</button>
                    <button class="btn btn-1" onclick="editTask('${value.id}','delete')">Delete</button>
                  </td>
                </tr>
              `
            }
        })
    })
}

async function updateFocus(status) {
    const id = document.querySelector("#id").value
    console.log("ID ATUAL:" + id)

    route = "focus/" + id
    const method = "GET"
    const executou = await callApiFocus(method, route)

    if (executou) {
        console.log("EXECUTOU SEM ERROS....")
        updateTask(id, status)
    } else {
        console.log("EXECUTOU COM ERROS....")
        insertTask()
    }

    return executou
}

async function updateTask(id, status) {
    callApiFocus("PUT", "focus/" + id, false, getBody(next, status))
}

async function insertTask() {
    await getNextId(function (next) {
        callApiFocus("POST", "focus", false, getBody(next, "PLAY"))
    })
}

async function getNextId(fn) {
    await callApiFocus("GET", "focus", function (data) {
        const next = parseInt(data.length) + 1
        fn(next)
    })
}

function getBody(nextId, status) {
    const description = document.querySelector("#description").value
    const hora = document.querySelector("#hora").textContent
    const minuto = document.querySelector("#minuto").textContent
    const segundo = document.querySelector("#segundo").textContent

    return {
        id: nextId,
        description,
        status,
        inicio: {
            day: "00",
            month: "00",
            year: "00",
            hour: "00",
            minute: "21",
            second: "5",
        },
        fim: {
            day: "00",
            month: "00",
            year: "00",
            hour: "00",
            minute: "21",
            second: "5",
        },
        tempo_atual_inicio: {
            day: "00",
            month: "00",
            year: "00",
            hour: "00",
            minute: "21",
            second: "5",
        },
        tempo_atual_fim: {
            day: "00",
            month: "00",
            year: "00",
            hour: "00",
            minute: "21",
            second: "5",
        },
        tempo_decorrido: {
            day: "00",
            month: "00",
            year: "00",
            hour: "00",
            minute: "21",
            second: "5",
        },
    }
}

function editTask(id, acao) {
    switch (acao) {
        case ACAO_PLAY:
            // EXECUTA A ACAO PLAY
            // CARREGA A TAREFA ATUAL NA TELA DO RELOGIO
            break
        case ACAO_PAUSE:
            // EXECUTA A ACAO PAUSE
            // CARREGA A TAREFA ATUAL NA TELA DO RELOGIO
            break
        case ACAO_DONE:
            // EXECUTA A ACAO DONE
            break
        case ACAO_EDIT:
            // EXECUTA A ACAO EDIT
            // CARREGA A TAREFA ATUAL NA TELA DO RELOGIO
            break
        case ACAO_DELETE:
            // EXECUTA A ACAO DELETE, E APENAS MARCA COMO EXCLUIDO, MAS NAO DELETA
            // CARREGA A TAREFA ATUAL NA TELA DO RELOGIO
            break

        default:
            break
    }

    // RECARREGA AS TASKS
    loadTasks()
}
