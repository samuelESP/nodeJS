const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const validarNumero = (numero) => {
    const resultado = parseFloat(numero);
    if(!resultado){
        console.log("Numero informado invalido");
    }else{
        return resultado;
    }
    
}

const validarOperador = (operador) => {
    switch(operador){
        case "+":
        case "-":
        case "*":
        case "/":
        case "%":
            return operador;
        default:
            console.log("Operador informado invalido");
            return null
    }
}

readLine.question("Informe um numero", (numero1) => {
    const numeroValidado1 = validarNumero(numero1);

    if (numeroValidado1) {
        readLine.question("Informe o segundo numero", (numero2) => {
            const numeroValidado2 = validarNumero(numero2);

            if (numeroValidado2) {
                readLine.question("Infome um operador", (operador1) => {
                    const operadorValidado1 = validarOperador(operador1);

                    if(operadorValidado1){
                        switch (operadorValidado1) {
                            case "+":
                                console.log(`resultado.....: ${numero1} + ${numero2} = ${numeroValidado1+ numeroValidado2} `);
                                break;
                            case "-":
                                console.log(`resultado.....: ${numero1} - ${numero2} = ${numeroValidado1- numeroValidado2} `);
                                break;
                            case "*":
                                console.log(`resultado.....: ${numero1} X ${numero2} = ${numeroValidado1* numeroValidado2} `);
                                break;
                            case "/":
                                console.log(`resultado.....: ${numero1} / ${numero2} = ${numeroValidado1 / numeroValidado2} `);
                                break;    
                            case "%":
                                console.log(`resultado.....: ${numero1} % ${numero2} = ${numeroValidado1 % numeroValidado2} `);
                                break;    
                            default:
                                break;
                        }
                    }
                })
            }
        })
    }

})