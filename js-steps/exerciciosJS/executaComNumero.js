/*
Cria uma função chamada executaComNumero
Ela deve receber dois parâmetros:

numero: um valor numérico
callback: uma função

Dentro da função, mostra:
Valor recebido: 5
Depois executa o callback, passando esse número pra ele
*/

function executarComNumero(numero,callback){
    console.log(`Valor recebido: ${numero}`);
    callback(numero);
}

function dobrar(valor){
    console.log(`O drobro do valor é de ${valor * 2}`)
}

executarComNumero(5,dobrar)