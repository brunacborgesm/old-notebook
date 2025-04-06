/*Cria uma função chamada aumentarPrecos.
Ela deve:
Usar .map() pra aumentar R$ 10 em todos os serviços
Mostrar o novo array no console*/

const servicos = [
  {nome: "corte", valor: 30},
  {nome: "barba", valor: 40},
  {nome: "combo", valor: 60},
];

function aumentarPrecos() {
  const aumento = servicos.map(servico => {
    return {
      nome: servico.nome,
      valor: servico.valor +10
    }
  })
  console.log(aumento);
}

aumentarPrecos();