
// 1 - Escreva um programa em Javascript e crie uma variável chamada "nome_do_carro" e atribua-a um valor "Fusca". Exiba-a ao usuário.
const nome_do_carro =  "fusca";
alert(`Olá usuário! A variável "nome_do carro" tem o valor de "${nome_do_carro}".`);

// 2 - Escreva um programa em Javascript em que o usuário informe o seu nome e exiba a mensagem "Olá, [NomeDoUsuario]".
const NomeDoUsuario = prompt("Insira seu nome: ");
alert(`Olá, ${NomeDoUsuario}, seja bem vindo!`);

// 3 - Escreva um programa em Javascript em que o usuário informe o seu nome e em seguida o programa perguntará a idade do usuário. Agora o programa deve exibir a mensagem "Olá, [NomeDoUsuario], sua idade é [idade]".
const IdadeDoUsuario = prompt("Insira a sua idade: ");
alert(`${NomeDoUsuario} você possui ${IdadeDoUsuario} anos.`)

// 4 - Considerando a figura abaixo, escreva um programa para cada forma que calcule e exiba em tela cada uma de suas respectivas áreas. O usuário irá informar os valores de cada variável.

// RETÂNGULO ABAIXO
alert("Vamos criar um retângulo, insira a base em centímetros e em seguinda a altura em centímetros.");
let base = parseFloat(prompt("Insira o valor da base do retângulo: "));
let altura = parseFloat(prompt("Insira o valor da altura do retângulo: "));
alert(`Seu retângulo tem uma base = ${base} cm, altura = ${altura} cm e uma área de ${base * altura} cm.`);

// QUADRADO ABAIXO
let aresta = parseFloat(prompt("Agora vamos criar um quadrado, insira o valor em centímetros das arestas: "));
alert(`Cada aresta de seu quadrado mede ${aresta} centímetros e possui uma base de ${aresta ** 2} centímetros`);

// LOSANGO ABAIXO
alert("Vamos criar um losango, insira o diagonal maior em centímetros e em seguinda o diagonal menor em centímetros.");
let diagonalMaior = parseFloat(prompt("Insira o valor do diagonal maior em centímetros: "));
let diagonalMenor = parseFloat(prompt("Insira o valor do diagonal menor em centímetros: "));
alert(`Seu losango possui um diagonal maior = ${diagonalMaior} centímetros, um diagonal menor = ${diagonalMenor} centímetros e uma base = ${(diagonalMaior + diagonalMenor) / 2} centímetros`);

// TRAPÉZIO ABAIXO
alert("Vamos criar um trapézio, insira a base maior em centímetros, a base menor em centímetros e então a altura");
let baseMaior = parseFloat(prompt("Insira o valor do base maior em centímetros: "));
let baseMenor = parseFloat(prompt("Insira o valor do base menor em centímetros: "));
altura = parseFloat(prompt("Insira o valor da altura em centímetros: "));
alert(`Seu trapézio tem a base maior = ${baseMaior}, a base menor = ${baseMenor}, altura com valor = ${altura} e por fim, possui uma área = ${((baseMaior + baseMenor) * altura) / 2}.`);

// PARALELOGRAMO ABAIXO
alert("Agora vamos criar um paralelogramo, insira a base em centímetros e em seguinda a altura em centímetros.");
base = parseFloat(prompt("Insira o valor da base do paralelogramo: "));
altura = parseFloat(prompt("Insira o valor da altura do paralelogramo: "));
alert(`Seu paralelogramo tem uma base = ${base} cm, altura = ${altura} cm e uma área de ${base * altura} cm.`);

// TRIÂNGULO ABAIXO
alert("Agora vamos criar um triângulo, insira a base em centímetros e em seguinda a altura em centímetros.");
base = parseFloat(prompt("Insira o valor da base do triângulo: "));
altura = parseFloat(prompt("Insira o valor da altura do triângulo: "));
alert(`Seu triângulo tem uma base = ${base} cm, altura = ${altura} cm e uma área de ${(base * altura) / 2} cm.`);

// CIRCULO ABAIXO
let raio = parseFloat(prompt("Agora vamos criar um circulo, insira a raio  em centímetros."));
alert(`Seu circulo tem um raio = ${raio} cm e uma área de ${3.14 * (raio ** 2)} cm.`);