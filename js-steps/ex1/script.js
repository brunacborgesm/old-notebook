/*Cria uma função exibirServicos que usa .forEach() pra mostrar no console todos os serviços assim:

Serviço: corte | Preço: R$30
Serviço: barba | Preço: R$40
Serviço: combo | Preço: R$60*/

const servicos = [
  {nome: "corte", valor:30},
  {nome: "barba", valor: 40},
  {nome: "combo,", valor: 60}
];

function exibirServicos () {
  servicos.forEach(servicos => {
    console.log(`Serviço: ${servicos.nome} | Valor: R$ ${servicos.valor}`)
  })
}

exibirServicos()
