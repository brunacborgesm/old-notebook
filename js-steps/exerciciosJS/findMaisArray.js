/*
Cria uma função chamada buscarMaiorQueX que:

Recebe dois parâmetros: um array e um número x

Usa .find() pra retornar o primeiro número maior que x

Se não encontrar, mostra "Nenhum número encontrado."
*/

const numbers = [1,2,3,4,5];

function constmaiorX (array, x) {
    const buscar = array.find(number => number > x);
    if (!buscar) {
        console.log("Nenhum número encontrado.")
    } else {
        console.log(`Número encontrado: ${buscar}`)
    }
}

constmaiorX(numbers, 3)