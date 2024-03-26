const listaDeArgumentos = process.argv.slice(2);
// process.argv ele vai retornar um array que vai ser formado pelos elementos que foram passados pelo comando de node.
// vou usar o slice para retirar o meu path

console.log('----------EXECUTANDO FOR----------');

for(let i = 0; i < listaDeArgumentos.length; i++){
    console.log(`Posição ${i} valor lido ${listaDeArgumentos[i]}`);
}

console.log('----------EXECUTANDO WHILE----------');
controladorWhile = 0;
while (controladorWhile < listaDeArgumentos.length) {
    console.log(`Posição ${controladorWhile} valor lido ${listaDeArgumentos[controladorWhile]}`);
    controladorWhile++;
}


console.log('----------EXECUTANDO DO...WHILE----------');
controladorDoWhile = 0;
do {
    console.log(`Posição ${controladorDoWhile} valor lido ${listaDeArgumentos[controladorDoWhile]}`);
    controladorDoWhile++;
} while (controladorDoWhile < listaDeArgumentos.length);
// Se eu não colocar nada dentro do array ele vai executar a posição 0 como se fosse undefined

console.log('----------EXECUTANDO FOR....OF----------');
let controladorForOf = 0;
for (elementoDaLista of listaDeArgumentos) {
    console.log(`Posição ${controladorForOf} valor lido ${listaDeArgumentos[controladorForOf]}`);
    controladorForOf++
}