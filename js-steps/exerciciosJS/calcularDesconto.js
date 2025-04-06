/*Desafio guiado 2 de função:
Cria uma função chamada calcularDesconto.

Ela deve:

Receber dois parâmetros: preco e ehVip

Se for VIP, aplica 20% de desconto

Se não for VIP, retorna o preço normal

No final, console.log o valor final com a frase:
"Valor final: R$ XX,XX"*/
function clacularDesconto(preco, ehVip) {
  desconto = 0

  if (ehVip) {
    desconto = preco * 0.2
  }

  console.log(`Valor final: R$ ${preco - desconto.toFixed(2)}`)
}

clacularDesconto(100, true)