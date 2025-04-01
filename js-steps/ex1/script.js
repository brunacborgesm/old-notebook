const servicos = [
  { nome: "corte", preco: 30 },
  { nome: "barba", preco: 20 },
  { nome: "combo", preco: 45 }
];

function calculaServico(servicoEscolhido, ehVip) {
  
  const servico = servicos.find(servico => servico.nome === servicoEscolhido);
  if(!servico){
    console.log("Serviço não encontrado");
    return;
  }

  if (ehVip) {
    const desconto = servico.preco * 0.2;
    const precoDescontado = servico.preco - desconto;
    console.log(`O preço do ${servicoEscolhido} é de ${precoDescontado}`)
  } else {
    console.log(`Nao ha desconto para o serviço ${servicoEscolhido}`)
  }
}

calculaServico("corte", true);