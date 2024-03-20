// 1. Escreva um programa em que o usuário informe dois números utilizando o "prompt". Então escreva em tela o maior deles.
const n1 = parseFloat(prompt("(1) Adicione um número: "));
const n2 = parseFloat(prompt("(1) Adicione outro número: "));

if(n1 == n2){
    alert("1- Os números são iguais!")
} else {
    const maior = n1 > n2 ? n1 : n2;
    alert(`(1) ${maior} é o maior!`);
};

// 2. Faça um programa que leia um valor informado pelo usuário e diga se o valor informado é positivo, negativo ou zero.
let numero = parseFloat(prompt("(2) Insira um número: "));
const tipoNumero = numero === 0 ? "neutro" : numero > 0 ? "positivo" : "negativo";
alert(`(2) ${numero} é um número ${tipoNumero}.`);

// 3. Faça um programa para ler 3 valores (considere que não serão informados valores iguais) e escrever o maior deles.
let valores = [];
for(let i = 0; i < 3; i++){
    valores.push(parseFloat(prompt("(3) Insira um valor: ")));
};

let maiorNumero = valores.reduce((acumulador, valor) => {
    if(valor > acumulador) acumulador = valor;
    return acumulador; // É preciso retornar o valor novamente em métodos ".reduce".
}, valores[0]); // Inicia o acumulador com o primeiro valor do array.

alert(`(3) ${maiorNumero} é o maior número comparado aos demais.`)

// 4. Faça um programa que leia 3 valores informados pelo usuário (considere que não serão informados valores iguais) e escrever a soma dos 2 maiores.
valores = [];

// Loop para obter os valores
for(let i = 0; i < 3; i++) {
    let input = parseFloat(prompt("(4) Insira um valor: "));
    
    // Verifica se o valor inserido é um número
    if(isNaN(input)) {
        alert("(4) Valores inválidos. Insira apenas números.");
        i--;
        continue; // Encerra o loop se um valor inválido for inserido
    };
    
    valores.push(input);
};

// Função de comparação para ordenar numericamente
function compararNumeros(a, b) {
    console.log(a, b);
    return b - a;
};

// Ordena os valores em ordem decrescente usando a função de comparação
valores.sort(compararNumeros);

// Os dois maiores valores são os dois primeiros elementos no array
let maioresValores = valores.slice(0, 2);

alert(`(4) Os dois maiores valores são: ${maioresValores[0]} e ${maioresValores[1]}`);

// Fonte de ajuda: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#primeiroelemento

// 5. Faça um programa que leia 6 valores informados pelo usuário, calcule, exiba os números informados e escreva a média aritmética desses valores lidos.
let valor = 0;

// Loop para obter os valores
for(let i = 0; i < 6; i++) {
    let input = parseFloat(prompt("(5) Insira um valor: "));
    
    // Verifica se o valor inserido é um número
    if(isNaN(input)) {
        alert("(5) Valores inválidos. Insira apenas números.");
        i--;
        continue; // Volta o loop se um valor inválido for inserido e decrementa 1 a variável "i".
    };
    
    valor += input;
};

alert(`(5) A média aritmética dos valores inseridos é igual a ${valor/6}`);

// 6. Faça um programa que receba quatro valores informados pelo usuário, mas informe somente o primeiro, o último e o maior de todos eles (considere que todos os números informados serão diferentes).
valores = [];

// Loop para obter os valores
for(let i = 0; i < 4; i++) {
    let input = parseFloat(prompt("(6) Insira um valor: "));
    
    // Verifica se o valor inserido é um número
    if(isNaN(input)) {
        alert("(6) Valores inválidos. Insira apenas números.");
        i--;
        continue; // Encerra o loop se um valor inválido for inserido
    };
    
    valores.push(input);
};

maiorNumero = valores.reduce((acumulador, valor) => {
    if(valor > acumulador) acumulador = valor;
    return acumulador; // É preciso retornar o valor novamente em métodos ".reduce".
}, valores[0]); // Inicia o acumulador com o primeiro valor do array.

alert(`(6) De acordo com os números inseridos, o seu primeiro valor inserido foi ${valores[0]}, o último valor inserido foi ${valores[valores.length-1]} e o maior valor inserido foi ${maiorNumero}`)

// 7. Faça um programa que leia 6 números que o usuário vai informar. Todos os números lidos com valor inferior a 72 devem ser somados. Escreva o valor final da soma efetuada e também todos valores que o usuário informou.
valor = 0;
valores = [];

// Loop para obter os valores
for(let i = 0; i < 6; i++) {
    let input = parseFloat(prompt("(7) Insira um valor: "));
    
    // Verifica se o valor inserido é um número
    if(isNaN(input)) {
        alert("(7) Valores inválidos. Insira apenas números.");
        i--;
        continue; // Volta o loop se um valor inválido for inserido e decrementa 1 a variável "i".
    };
    
    if(input < 72) valor += input;
    valores.push(input);
};

alert(`(7) A soma dos valores inseridos que são inferiores a 72 resultou em ${valor} e os valores inseridos foram de ${valores.join(", ")}.`);

// 8. Escreva um programa que calcule a média de quatro números informados pelo usuário, mas somente se esses números forem maiores que 0 e menores que 10. No final, se a média for maior que cinco o usuário receberá uma mensagem "Você passou no teste". Em qualquer outra situação, ele receberá uma mensagem de "tente novamente".
let media = 0;

// Loop para obter os valores
for(let i = 0; i < 4; i++) {
    let input = parseFloat(prompt("(8) Insira um valor: "));
    
    // Verifica se o valor inserido é um número
    if(isNaN(input)) {
        alert("(8) Valores inválidos. Insira apenas números.");
        i--;
        continue; // Volta o loop se um valor inválido for inserido e decrementa 1 a variável "i".
    };
    
    if(input > 0 && input < 10) media += input;
};
 
media > 5 ? alert("(8) Você passou no teste!") :alert("(8) tente novamente");

// 9. Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que ela nasceu).
let anoDeNascimento;

for(let i = false; i !== true; i) {
    anoDeNascimento = parseFloat(prompt("(9) Insira o seu ano de nascimento: "));
    
    // Verifica se o valor inserido é um número e se está entre 0 e 2024.
    if(isNaN(anoDeNascimento) || anoDeNascimento > 2024 || anoDeNascimento < 0) {
        alert("(9) Valores inválidos. Tente novamente.");
        continue; // Volta o loop se um valor inválido for inserido e decrementa 1 a variável "i".
    };
    i = true;
};

let mensagem;
(2024 - anoDeNascimento) < 16 ? mensagem = "Você ainda não pode votar." : (2024 - anoDeNascimento) < 18 ? mensagem = "Você já pode votar." : mensagem = "Você tem que votar.";

alert(`(9) ${mensagem}`);

/* 10. Tendo como entrada a altura e o sexo (codificado da seguinte forma: 1: feminino 2: masculino) de uma pessoa, construa um programa que calcule e imprima seu peso ideal, utilizando as seguintes fórmulas:

Para homens: (72.7 * altura) - 58;
Para mulheres: (62.1 * altura) - 44.7;
*/

let altura;
let sexo;

for(let i = false; i !== true; i) {
    altura = parseFloat(prompt("(10) Insira a sua altura em centímetros (170cm = 1,70 metros): ")); // Coloquei em centímetro para não haver confusão entre "." e ",";
    sexo = parseFloat(prompt("(10) Insira as opções de sexo, sendo '1' para feminino e '2' para masculino: "));

    if(isNaN(altura, sexo) || sexo < 1 || sexo > 2) {
        alert("(10) Valores inválidos. Tente novamente.");
        continue; // Volta o loop se um valor inválido for inserido e decrementa 1 a variável "i".
    };
    i = true;
};

sexo === 1 ?alert(`(10) Seu peso ideal é igual a ${(62.1 * (altura/100)) - 44.7}`) :alert(`(10) Seu peso ideal é igual a ${(72.7 * (altura/100)) - 58}`);

/* 
11. Uma micro calculadora
Escreva um programa para ler 2 valores inteiros informados pelo usuário e uma das seguintes operações a serem executadas (codificada da seguinte forma: 1. Adição, 2. Subtração, 3. Divisão, 4. Multiplicação).

O programa deve calcular e escrever o resultado dessa operação sobre os dois valores lidos. 
Observação: Considere que só serão lidos os valores 1, 2, 3 ou 4 para as operações.
*/
let operacao;
let valorA;
let valorB;

for(let i = false; i !== true; i) {
    operacao = parseFloat(prompt("(11) Insira a operação matemática, sendo: 1 para Adição, 2 para Subtração, 3 para Divisão, 4 para Multiplicação: "));
    valorA = parseFloat(prompt("(11) Insira o primeiro valor: "));
    valorB = parseFloat(prompt("(11) Insira o segundo valor: "));

    if(isNaN(operacao, valorA, valorB) || operacao < 1 || operacao > 4) {
        alert("(11) Valores inválidos. Tente novamente.");
        continue; // Volta o loop se um valor inválido for inserido e decrementa 1 a variável "i".
    };
    i = true;
};

if(operacao === 1) alert(`(11) O resultado da adição entre ${valorA} e ${valorB} equivale a ${valorA + valorB}.`);
if(operacao === 2) alert(`(11) O resultado da Subtração entre ${valorA} e ${valorB} equivale a ${valorA - valorB}.`);
if(operacao === 3) alert(`(11) O resultado da Divisão entre ${valorA} e ${valorB} equivale a ${valorA / valorB}.`);
if(operacao === 4) alert(`(11) O resultado da Multiplicação entre ${valorA} e ${valorB} equivale a ${valorA * valorB}.`);