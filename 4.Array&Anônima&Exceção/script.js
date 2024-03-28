// try/catch – essa abordagem abre um escopo onde, tudo que for executado dentro daquele escopo caso gere um erro o escopo do catch será iniciado e o escopo do try para de executar

/*let usuarios;
try {
      usuarios = buscarTodosUsuarios();
} catch (e) {
      console.log(“Ocorreu um erro buscar os usuários”);
} */

// finally – Este utilizamos pouco, mas ele serve para que alguma instrução ocorra tanto quando o try não der exceção quanto quando cai no catch:
/*let notificacao = "";
try {
     processarPagamentosPendentes();
     notificacao = "Pagamentos processados com sucesso!";
}  catch (e) {
     notificacao = "Erro ao processar pagamentos”;
} finally {
     notificarAdministradorSistema(notificacao);
} */

/*
-----------Array-------------
Encontrar um registro no meio da lista que atenda uma condição;
.map()-> Faz a transformação da linha para o formato que você desejar;
.find() -> Encontra o primeiro registro da lista que atende as condições fornecidas e retorna o mesmo;
.sort() -> Ordena a lista de acordo com a condição/atributo passado;
.push()-> Adiciona um ou mais itens na lista. */

/*map() --> tratar elementos dentro do meu array
filter() --> filtrar os elementos dentro do meu array
reduce() --> utilizado com o accumulator
indexOf() --> retornar o index do primeiro elemento que eu disse para ele achar dentro do arr 
find() --> é como se fosse uma mistura do filter com o indexOf, ele vai procurar o primeiro elemento de acordo com a minha condição
forEach() --> A mesma coisa que o map(), a unica diferença relevante é que não retorna um array*/
// minha lista
try{
     const listaDeProdutosDisponiveis = [
          'PAO',
          'LEITE',
          'LARANJA',
          'MACARRÃO',
          'MOLHO',
          'CERVEJA',
          'FRANGO'
     ]
     
     // função para remover a acentuação do meu input
     function removerAcentos(str) {
          return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
     }
     
     // primeiro faz o slice(2), depois vai fazer o map() para modificar o meu elemento, usando assim a função de acentuação e colocando tudo em maiúsculo
     const listaDeArgumentos = process.argv.slice(2).map((element) => removerAcentos(element.toUpperCase()));
     
     // Filtro de elementos que vai me devolver apenas os desejados;
     // Usando um find junto para conseguir procurar dentro da minha lista os argumento que eu passei via console 
     const listaDeProdutosSolicitadosDisponiveis = listaDeProdutosDisponiveis.filter(produto => {
          return listaDeArgumentos.find((argumento => argumento === produto));
      }); 
     
     
     listaDeProdutosSolicitadosDisponiveis.forEach(produto => console.log(`Este produto nos temos: ${produto}`));
     
     // Aqui eu quero os elementos que eu não tenho
     const listaDeProdutosSolicitadosNaoDisponiveis = listaDeArgumentos.filter(argumento => {
          return !listaDeProdutosDisponiveis.find(produto => produto === argumento);
      });
      listaDeProdutosSolicitadosNaoDisponiveis.forEach(argumento => console.log(`Este produto nos nao temos: ${argumento}`));
      
      listaDeProdutosDisponiveis.sort();
      listaDeProdutosDisponiveis.forEach(produto => console.log(`Este produto esta disponiveL: ${produto}`));
}catch(e){
     console.log('Nao foi possivel executar pedido de compra');
}