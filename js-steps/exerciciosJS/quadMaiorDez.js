/*
Cria uma arrow function chamada quadradosMaioresQueDez que:

Recebe um array de números

Usa .map() pra elevar cada número ao quadrado

Depois usa .filter() pra manter só os que são maiores que 10

Retorna esse novo array
*/

const numbers = [1,2,3,4,5];

const newSquare = numbers.map(number => number * number).filter(number => number > 10);

console.log(`Numeros: ${numbers} | Quadrado: ${newSquare}`);