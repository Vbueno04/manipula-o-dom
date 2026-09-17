// let nome = "Diogo";
// let idade = 30;

// // CONCATENAÇÃO
// console.log("Nome: " + nome + ", idade: " + idade);

// // INTERPOLAÇÃO
// console.log(`Nome: ${nome}, idade: ${idade}`);

// console.log(typeof nome);
// console.log(typeof idade);


// let soma = "5" + 3; // 53
// let sub = "5" - 3; // 2

// console.log(soma);
// console.log(sub);

// console.log(typeof soma);
// console.log(typeof sub);

// convertendo valores
// let numero = "ab" // string

// let convertido = Number(numero) // converte o valor para number

// console.log(typeof convertido);


// OPERADORES RELACIONAIS

// VALIDA IGUALDADE DE VALOR (SOMENTE VALOR)
// "10" == 10 -> true

// VALIDO IGUALDADE DE VALOR E TIPO DE DADO
// "10" === 10 -> false


// &&
// ||
// !

// let opcao = 2

// switch(opcao) {
//     case 1:
//         hgdhasghd
//         break;
//     case 2:
// }


// // ESTRUTURA DE REPETIÇÃO
// let frutas = ["Maçã", "Banana", "Acerola", "Uva"];

// console.log(frutas);

// frutas.forEach(function(fruta) {
//     console.log(`Fruta: ${fruta}`);
// })

// frutas.forEach(fruta => console.log(`Fruta: ${fruta}`));


// FUNÇÕES NATIVAS JS

// FUNÇÃO MAP()
// Percorre uma lista e cria uma nova lista com base em uma condição

// let numeros = [1, 2, 3, 4]

// let numerosDobrados = numeros.map(function(num) {
//     return num * 2
// })

// // numerosDobrados = [2, 4, 6, 8]
// console.log(numerosDobrados);

// // ou assim:
// // Arrow function com retorno implícito

// let numerosDobradosArrow = numeros.map(num => num * 2);


// FILTER
// Filtra os elementos com base em uma condição

// let numeros = [5, 10, 15, 20];

// let maioresQueDez = numeros.filter(num => num > 10);

// // maioresQueDez = [15, 20]
// console.log(maioresQueDez);

// REDUCE
// Reduz os valores de um array para um único valor

// let numeros = [1, 2, 3, 4]

// // acumulador inicia em 0
// // variavel auxiliar 
// // acumulador começa em 0 e soma com o auxiliar até o último valor do array

// let soma = numeros.reduce((acumulador, auxiliar) => acumulador + auxiliar, 0);

// console.log(soma);


// FIND 
// Retorna o primeiro elemento que atende a condição

// let produtos = [
//     { id: 1, nome: "Teclado", preco: 50 }, // produto
//     { id: 2, nome: "Mouse", preco: 30 },
//     { id: 2, nome: "Caderno", preco: 30 },
// ]

// let item = produtos.find(produto => produto.id === 2);

// console.log(item);
// //DIFERENÇA ENTRE FILTER E FIND
// //Find -> retorna somente o primeiro elemento que ele encontra
// //Filter -> retorna todos os elementos que econtra com a condição
// // arrow function / função lambda
// let itemFiltrado = produtos.filter(produto => produto.id === 2);

// console.log(itemFiltrado);                         


// SPLIT
//Divide a string em partes, transformando em um array 

// let frase = "JS é top";

// let palavras = frase.split(" ");
// console.log(palavras);

// TRIM
// trim remove espaços no inicio e final de string
// let nome = "      Paulo";
// let nomeLimpo = nome.trim();

// console.log(nome);
// console.log(nomeLimpo);

// INCLUDES
// Verifica se existe um valor dentro de um lista e retorna um booleano
// verdadeiro ou falso

// let frutas = ["maça", "banana"];

// let frutasIncludes = frutas.includes("maçã");
// console.log(frutasIncludes);//true

// toLowerCase() -> transforma o texto em minúsculo
// toUppercase() -> transforma o textoo em maiúsculo
// let nome = "KESSIA";
// let cargo = "instrutora";

// console.log(nome.toLowerCase())//kessia
// console.log(cargo.toUpperCase())// INSTRUTORA

// FOREACH
// let nomes = ["Guilherme", "João", "Maria"];

// nomes.forEach(nome => console.log(nome));

// //Guilherme
// //João
// // Maria                                              

// SOME 
// Verifica se pelomenos um item atende a condição
// retorna booleano

// let numeros = [1, 3, 5, 8];

// let temPar = numeros.some(num => num %2 === 0);
// console.log(temPar); // true

// // EVERY 
// // Verifica se todos os elementos atendem a condição 
//  let todosPares = numeros.every(num => num % 2 === 0);
//  console.log(todosPares); //false

// SORT
// Ordena os elementos do array

// let numeros = [3, 10, 5, 3, 4];
// let letras = ["c", "a", "x", "h"]

// //para letras
// letras.sort();
// console.log(letras);

// //para numeros 
// numeros.sort((a, b)=> a - b)
// console.log(numeros);

// REVERSE 
// Inverte a ordem dos elemenots no array
// let numeros = [1,2,3];

// numeros.reverse();
// console.log(numeros);// [3, 2, 1]

// JOIN
// junta os elementos de um array em  uma string
// let palavras = ["JS", "é", "top"];

// let frase = palavras.join(" ")

// console.log(frase)//Js é top

// ADICIONANDO E REMOVENDO ELEMENTO DO ARRAY
// PUSH
// POP
// SHIFT
// UNSHIFT

// let lista = ["A", "B"];

// // PUSH -> Adiciona elementos  no final do array
// lista.push("C"); // adiciona
// console.log(lista);

// // POP -> Remove o elemento no final da lista
// lista.pop(); // removendo
// console.log(lista);

// // SHIFT -> Remove elemento no começo da lista
// lista.shift(); // remove
// console.log(lista);

// // UNSHIFT -> Adiciona elementos no inicio da lista
// lista.unshift("A"); // adicionando 
// console.log(lista);

// SLICE
// Cria uma cópia de uma parte da lista

/*
array.slice(inicial, final)

inicial -> onde começa
final -> onde termina (não inicial a posição/indice/index)
*/

// let numeros = [1, 2, 3, 4];

// let parte = numeros.slice(1, 3); // posições do array 
// console.log(parte); // [2,3] 

// SPLICE
// remove ou adiciona elementos em QUALQUER POSIÇÂO

/*
array.splice(index, count, item1, ..., itemX);

index -> indice(posição do elemento no array);
count -> número de elementos a serem removidos (pode ser 0)
item1, ..., itemX -> itens a serem adicionados
*/

// let numeros = [1, 2, 3, 4];

// // removendo elementos, sem adicionar
// numeros.splice(1, 1);
// console.log(numeros);

// // removendo elementos e adicionando mais dois elementos
// let frutas = ["Banana", "Laranja", "Maça", "Manga"];

// // frutas.splice(0, 3, "Limão", "Kiwi");
// // console.log(frutas); // ["Limão", "Kiwi", "Manga"];

// // adicionando elementos sem remover
// frutas.splice(2, 0, "Limão", "Kiwi")
// console.log(frutas); // ["Banana", "Laranja", "Limão", "Kiwi" "Maça", "Manga"];

// REPLACE
// substitui uma parte da string

/* 
replace(valorProcurado, "valorQueSubstitui")
*/

// let texto = "Olá, mundo!";

// let novoTexto = texto.replace("mundo", "cliente");
// console.log(novoTexto);

// NOSSAS FUNÇÕES

// função comum
// function exibirMensagem(){
//     console.log("Bem vindo(a)!");
// }

// exibirMensagem();

// função com parâmetros
// function cumprimentar(nome){
//     console.log(`Olá, ${nome}`);
// }

// // chamando a função
// cumprimentar("Ana");
// cumprimentar("Carlos");

//FUNCAO COM MAIS DE UM PARAMENTRO

// function somar(n1, n2) {
//     let soma = n1 + n2 ;
//     console.log(soma);
    
//     //se quiser usar a variavel soma fora da funcao, precisa retornar ela
//     //return soma;


// }

// somar(2, 3);

// const somar = (n1, n2) => n1 + n2

// console.log(somar(1,2));

// PROMPT
// recebe/solicita uma informação do usuário
// o valor recebido pelo prompt() normalmente é string

let nome = prompt("Digite o seu nome: ");
console.log(nome);
alert(nome);

// recebendo um número e convertendo 
// Numero() -> converte de forma genérica
let idade = Number(prompt("Digite sua idade: "));

// ParseInt() -> converte o valor para um número inteiro 
idade = paraseInt(prompt("Digite sua idade: "));

// PaseFloat() -> converte o valor para número decial/quebrado 
idade = paraseFloat(prompt("Digite sua idade: "));