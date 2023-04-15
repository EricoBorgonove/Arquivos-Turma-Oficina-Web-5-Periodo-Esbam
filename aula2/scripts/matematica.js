function somar() {
    let numero1 = Number(document.querySelector('#numero1').value)
    let numero2 = Number(document.querySelector('#numero2').value)
    let soma = numero1 + numero2
    document.querySelector('#resultado').value = soma
    //document.querySelector('#resultado').disabled = false
    //document.querySelector('#texto').innerHTML = "Aprendeu ??"
}
function subtrair() {
    let numero1 = Number(document.querySelector('#numero1').value)
    let numero2 = Number(document.querySelector('#numero2').value)
    let subtracao = numero1 - numero2
    document.querySelector('#resultado').value = subtracao
}
function multiplicar() {
    let numero1 = Number(document.querySelector('#numero1').value)
    let numero2 = Number(document.querySelector('#numero2').value)
    let multiplicao = numero1 * numero2
    document.querySelector('#resultado').value = multiplicao
}
function dividir() {
    let numero1 = Number(document.querySelector('#numero1').value)
    let numero2 = Number(document.querySelector('#numero2').value)
    if (numero2 != 0) {
        let divisao = numero1 / numero2
        document.querySelector('#resultado').value = divisao.toFixed(2)
    } else {
        //alert ("Não existe Divisão por zero")
        //document.querySelector('#texto').innerHTML = "Não existe Divisão por Zero"
        //document.querySelector('#resultado').value = "Não existe Divisão por Zero"  // não esqueca de mudar o tipo do campo para text
        document.querySelector('#labelNumero2').innerHTML = "Não existe Divisão por Zero"
        document.querySelector('#numero2').value = ""
    }
}
function limpaErro(){
    document.querySelector('#labelNumero2').innerHTML = "Numero2"
}
function limpar(){
    document.querySelector('#numero2').value = ""
    document.querySelector('#numero1').value = ""
    document.querySelector('#resultado').value = ""
    document.querySelector('#labelNumero2').innerHTML = "Numero2"
}
function sumir (){

    let visibilidade =  document.querySelector('#divBotaoSomar').style.visibility


    document.querySelector('#divBotaoSomar').style.visibility = ((visibilidade != "hidden") ? "hidden" : "visible"  ) 
  
}
