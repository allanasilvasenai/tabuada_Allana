let btnEnviar = document.getElementById('calc')
btnEnviar.addEventListener("click", calcular)
let resposta = ''

function calcular(){
    resposta = ""

    let input1 = document.getElementById('n1')

    let resp = document.getElementById('resp')

    let n1 = input1.value

    for(let i = 1; i < 11; i++){
        resposta += `${n1} x ${i} = ${n1 * i}. \n`
    }
    resp.innerText = `${resposta}`
}