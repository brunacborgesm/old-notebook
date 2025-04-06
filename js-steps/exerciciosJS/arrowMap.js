/*
Cria uma arrow function chamada elevarAoQuadrado que:
Recebe um array de números
Usa .map() dentro dela pra retornar um novo array com todos os números ao quadrado
Mostra o resultado com console.log
*/

const numbers = [1,2,3,4];

const newSquare = numbers.map(number => number * number);

console.log(
    `Numeros:  ${numbers} | Ao quadrado: ${newSquare}`
);