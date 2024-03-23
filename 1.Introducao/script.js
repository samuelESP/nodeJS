


const olaMundo = "Ola mundo!";
console.log(olaMundo);

// Leitor de arquivos
const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let leituraDeCampo;
readLine.question("Por favor digite alguma coisa....: ", input => {
    leituraDeCampo = input
    console.log(`O usuário digitou: ${leituraDeCampo}`);
});

testede

