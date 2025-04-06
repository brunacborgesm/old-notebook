/*
Desafio: Cria uma função chamada temNumeroPar que:

Recebe um array de números

Usa .some() pra verificar se existe algum número par

Mostra:

"Tem número par" se existir

"Não tem número par" se não existir
*/

const numbers = [1,3];

function temNumPar(array) {
    const temPar = array.some(number => number % 2 === 0);
        
    if (!temPar) {
        console.log("Não tem número par")
    } else {
        console.log("Tem número par")
    }
}

temNumPar(numbers);