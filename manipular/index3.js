//function manipulaHtml(){
// alert ('O documento será alterado')
//let lista = document.getElementById('dados')
//lista.innerHTML = 'Olá Manipulamos o dados'
//}

let x = 0

let contador = 0

function manipulaHtml() {

    // alert("O documento sera Alterado")

    let lista = document.getElementById('dados')
    let exibeContador = document.getElementById('contador')
    if (x == 0) {
        lista.innerHTML = "Liked" 
        x = 1

       contador = contador + 1
       exibeContador.innerHTML = contador
    }
}