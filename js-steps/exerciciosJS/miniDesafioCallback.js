/*C
ria uma função chamada executaComMensagem que:
Recebe dois parâmetros:

uma mensagem (string)
uma função callback

Mostra no console:

Iniciando execução...
Mensagem: (a mensagem passada)
Depois disso, executa a função callback 

function executaComMensagem(mensagem, callback) {
    console.log("Iniciando execuçao...");
    console.log(`Mensagem ${mensagem}`);
    callback();
}

function dizOi() {
    console.log("Oi Pessoal! Me chamo Bruna e estou aprendendo JavaScript")
}

executaComMensagem("Mostrando mensagem: ", dizOi)*/

function executaComMensagem(mensagem, callback){
    console.log("Iniciando execuçao...");
    console.log(`Mensagem: ${mensagem}`);
    callback();
}

function dizOi(){
    console.log("Oi Pessoal! Me chamo Bruna e estou aprendendo JavaScript")
}

executaComMensagem("Mensagem: ", dizOi)