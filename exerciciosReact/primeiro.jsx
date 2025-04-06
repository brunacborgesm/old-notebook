/*
Um componente chamado Barbearia

Que exibe o nome da barbearia e a quantidade de serviços

Usando JSX e uma variável dentro do return
*/

const loja = "Barbearia";
const servicos = 5;

const Barbearia = () => {
    return (
        <div>
            <h1>{loja}</h1>
            <span>{servicos}</span>
        </div>
    )
}

export default Barbearia;