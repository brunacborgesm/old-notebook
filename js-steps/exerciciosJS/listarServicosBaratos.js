/*Filtra e imprime todos os serviços que custam menos de 40 reais.
Cria uma função chamada listarServicosBaratos e usa .filter() dentro dela.
Se quiser tentar e me mostrar, eu reviso e já mando um desafio com .map() depois!*/

const servicos = [
  {
    nome: "corte", valor: 30,
  },
  {
    nome: "barba", valor: 40,
  },
  {
    nome: "combo", valor: 60,
  },
];

function listarServicosBaratos () {
  const servicoBarato = servicos.filter(servico => servico.valor < 45);
  console.log(servicoBarato);
};

listarServicosBaratos();