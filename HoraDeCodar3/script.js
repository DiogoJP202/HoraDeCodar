// - 1 - Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado for igual ou menor que ZERO, deve ser lido um novo valor. Ou seja, para o segundo valor não pode ser aceito o valor zero, nem um valor negativo.  O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor.
let valor1 = parseFloat(prompt("(1) Insira um número: "));

// Loop verificação da variável "valor2"
for(let i = false; i === false; i) {
    let valor2 = parseFloat(prompt("(1) Insira um valor maior que 1: "));
    
    // Verifica se o valor inserido é um número
    if(isNaN(valor2) || valor2 <=0) {
        alert("(1) Valor inválido, o valor precisa sem um número acima de 0!");
        i--;
        continue; // Encerra o loop se um valor inválido for inserido
    };

    alert(`(1) O resultado da divisão entre ${valor1} e ${valor2} é equivalente a ${valor1/valor2}.`);
    i = true;
};

// - 2 - Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem regressiva vá de 30 a 0. Utilize "document.write" para escrever em tela e no final da repetição escreva "EXPLOSÃO".
const divTempo = document.querySelector(".tempo"); // Optei por utilizar DOM, porque document.write estava substituindo todo o conteúdo de bory.
divTempo.innerHTML += "(2) Contagem regressiva para a bomba explodir: <br>";
let tempo = 30;
let contagem = setInterval(() => { 
    divTempo.innerHTML += `A bomba vai explodir em ${tempo} segundo! <br>`;
    tempo--;
    if(tempo < 0){
        divTempo.innerHTML += "BOOOOOMMM!! 'Explosão'. <br>";
        clearInterval(contagem);
    }
}, 1000);

// - 3 - Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente. Exemplo: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
for(let numero = 10; numero >= 1; numero--){ 
    document.write("(3) - " + numero + " - ");
};

// - 4 - Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).
document.write(`(4) A média aritmética de 15 e 100 é igual a ${(15 + 100) / 2}`);

// - 5 - Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo.

// - 6 - Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados.

// - 7 - Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total. Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário. 

// - 8 - Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO. N  é um valor informado pelo usuário

// - 9 - Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100.

// - 10 - Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário.

// - 11 - Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre os números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo.- 1 - Escreva um programa em que o usuário informe dois números utilizando o "prompt". Então escreva em tela o maior deles.