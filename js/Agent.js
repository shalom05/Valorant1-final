const searchTxt = document.getElementById("inputBuscar")
const containerAgents = document.getElementById("containerAgents") 

async function pedirAPI() {
    const response = await fetch ("https://valorant-api.com/v1/agents")
    const json = await response.json()
    const data = json.data 

    crearClase(data)    
}



function crearClase(data) {
    var listAgents = []   
    for (let i = 0; i < data.length; i++) {
        if (i != 8 ) {
        const element = data[i]; 

        var newAgent = new Character (element.uuid, element.displayName, element.description, element.fullPortrait, element.displayIcon, element.role.displayName, element.role.displayIcon, element.abilities[0].displayName, element.abilities[0].description, element.abilities[0].displayIcon, element.abilities[1].displayName, element.abilities[1].description, element.abilities[1].displayIcon, element.abilities[2].displayName, element.abilities[2].description, element.abilities[2].displayIcon, element.abilities[3].displayName, element.abilities[3].description, element.abilities[3].displayIcon)
        containerAgents.innerHTML += newAgent.toCards(i)
        listAgents.push(newAgent)
        }
    }
    window.listaAgentesGlobal = listAgents; 
}



pedirAPI()

function buscar() {
    containerAgents.innerHTML = ""
    var textoABuscar = searchTxt.value.toLowerCase()
    console.log(textoABuscar)
    for (let i = 0; i < listaAgentesGlobal.length; i++) {
        const element = listaAgentesGlobal[i];
        console.log(element.name.toLowerCase())
        if (element.name.toLowerCase().includes(textoABuscar)) {
            containerAgents.innerHTML += element.toCards(i)
        }
        
    }
}

function enviarADetalle(uuid) {
    window.location.href = `../html/Agentsd.html?id=${uuid}`
}

