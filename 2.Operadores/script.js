const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Verficar se o cliente tem mais de 18 anos e habilitação para dirigir o kart");
console.log("Verificar se o cliente está na lista de presença");



readLine.question("Qual o ano de seu nascimento? ", idade => {
    if(idade < 18){
        console.log("Menor de 18 anos");
    } else{
        readLine.question("A pessoa tem habilitação?  ", carteira =>{
            if (!(carteira.toUpperCase() == "SIM")) {
                console.log("Não tem habilitação para entrar no kart");
            }else{
                readLine.question("Qual o nome do Cliente?  ", nome =>{
                    switch (nome.toUpperCase()) {
                        case "SAMUEL":
                            console.log("Bem vindo ao Kart Space");
                            break;
                        case "RAFAEL":
                            console.log("Bem vindo ao Kart Space");
                        default:
                            console.log("Entrada proibida no Kart Space");
                            break;
                    }
                })
            }
        })
    }
})
