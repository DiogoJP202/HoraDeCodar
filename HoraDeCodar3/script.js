// - 1 - Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado for igual ou menor que ZERO, deve ser lido um novo valor. Ou seja, para o segundo valor não pode ser aceito o valor zero, nem um valor negativo.  O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor.
let valor1 = parseFloat(prompt("(1) Insira um número: "));

// Loop verificação da variável "valor2"
for(let i = false; i === false; i) {
    let valor2 = parseFloat(prompt("(1) Insira um valor maior que o primeiro valor: "));
    
    // Verifica se o valor inserido é um número
    if(isNaN(valor2) || valor2 <= 0) {
        alert("(1) Valor inválido, o valor precisa ser um número acima de 0!");
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
alert("(3) Contagem de 1 a 10 em ordem decrescente: ");
for(let numero = 10; numero >= 1; numero--){ 
    alert(" - " + numero + " - ");
};

// - 4 - Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive).
alert(`(4) A média aritmética de 15 e 100 é igual a ${(15 + 100) / 2}`);

// - 5 - Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo.
let numeros = [];
let soma = 0;
let todosOsNumeros = [];
// Loop verificação da variável "valor2"
for(let i = false; i === false; i) {
    numeros[0] = parseFloat(prompt("(5) Insira um número: "));
    numeros[1] = parseFloat(prompt("(5) Insira outro número: "));

    // Verifica se o valor inserido é um número
    if(isNaN(numeros[0], numeros[1])) {
        alert("(5) Valor inválido!");
        continue; // Encerra o loop se um valor inválido for inserido
    };

    numeros.sort((a,b) => a-b);
 
    for(let contador = numeros[0]; contador <= numeros[1]; contador++){
           soma += contador;
           todosOsNumeros.push(contador);
    };

    alert(`(5) a soma dos números ${todosOsNumeros.join(", ")} é igual a ${soma} e a média aritmetíca deles é equivalente a ${soma / todosOsNumeros.length}`);

    i = true;
};

// - 6 - Escreva um programa para ler 2 notas de um aluno, calcular e imprimir a média final. Considere que a nota de aprovação é 9,5. Logo após escrever a mensagem "Calcular a média de outro aluno Sim/Não?" e solicitar um resposta. Se a resposta for "S", o programa deve ser executado novamente, caso contrário deve ser encerrado exibindo a quantidade de alunos aprovados.

let alunosAprovados = 0;
let alunosReprovados = 0;
let checagem1 = true; 

alert("(6) Iniciando programa de checagem de notas de alunos.");

while(checagem1 === true){
    let nota1 = parseFloat(prompt("(6) Insira a primeira nota: "));
    let nota2 = parseFloat(prompt("(6) Insira a segunda nota: "));
    
    if(isNaN(nota1, nota2)) {
        alert("(6) Valor inválido!");
        continue; // Encerra o loop se um valor inválido for inserido
    };
    
    let media = (nota1 + nota2) / 2;

    media >= 9.5 ? alunosAprovados++ : alunosReprovados++;

    let checagem2 = true; 

    while(checagem2 === true){
        let respostaUsuario = prompt("(6) Calcular a média de outro aluno Sim/Não? (RESPONDER COM 'S' ou 'N'!)");

        if(respostaUsuario  != 'n' && respostaUsuario != 'N' && respostaUsuario != 'S' && respostaUsuario != 's') {
            alert("(6) Valor inválido!");
            continue; // Encerra o loop se um valor inválido for inserido
        }; 
        
        if(respostaUsuario === 'n' || respostaUsuario === 'N'){
            alert(`(6) A quantidade de alunos aprovados foram de ${alunosAprovados} e a de reprovados foi de ${alunosReprovados}.`);
            checagem1 = false; 
            checagem2 = false;
        } else{
            checagem2 = false;
        };
    };
};

// - 7 - Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total. Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido, deve ser solicitado um novo valor ao usuário. 
let notas = [];
let media = 0;

for(let contador = 0; contador < 6; contador++) {
    notas[contador] = parseFloat(prompt(`(7) Insira a nota ${contador + 1}: `));
    
    // Verifica se o valor inserido é um número
    if(isNaN(notas[contador]) || notas[contador] > 10 || notas[contador] < 0) {
        alert("(7) Valores inválidos. Insira apenas números entre 0 e 10.");
        contador--;
        continue; // Volta o loop se um valor inválido for inserido e decrementa 1 a variável "i".
    };
    
    media += notas[contador];
};

alert(`(7) As notas do alunos foram ${notas.join(", ")} e a média dele foi de ${media / 6}`);

// - 8 - Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO. N  é um valor informado pelo usuário
for(let i = false; i === false; i) {
    let N = parseFloat(prompt("(8) Insira um valor maior que o 0: "));
    let numeros = [];

    // Verifica se o valor inserido é um número
    if(isNaN(N) || N <= 0) {
        alert("(8) Valor inválido, o valor precisa ser um número acima de 0!");
        continue; // Encerra o loop se um valor inválido for inserido
    };

    i = true;

    for(let numero = 1; numero <= N; numero++){ 
        numeros.push(numero);
    };

    alert(`(8) Os valores entre 1 e ${N} são ${numeros.join(", ")}`);
};

// - 9 - Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100.
let maioresQue100 = [];

for(let i = 101; i <= 110; i++){
    maioresQue100.push(i);
}

alert(`(9) Os 10 primeiros números maiores que 100 são ${maioresQue100.join(", ")}`);

// - 10 - Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário.

for(let i = false; i === false; i) {
    let N = parseFloat(prompt("(10) Insira um valor maior que o 0: "));
    let numeros = [];

    // Verifica se o valor inserido é um número
    if(isNaN(N) || N <= 0) {
        alert("(10) Valor inválido, o valor precisa ser um número acima de 0!");
        continue; // Encerra o loop se um valor inválido for inserido
    };

    i = true;

    for(let numero = 1; numero <= N; numero++){ 
        numeros.push(numero);
    };

    for(let i = 1; i <= N; i++){
        const tabuada = document.querySelector('.tabuada');
        tabuada.innerHTML += `Tabuada de ${i}: <br>`;
        tabuada.innerHTML += `${i} x 1 = ${i * 1} <br>`;
        tabuada.innerHTML += `${i} x 2 = ${i * 2} <br>`;
        tabuada.innerHTML += `${i} x 3 = ${i * 3} <br>`;
        tabuada.innerHTML += `${i} x 4 = ${i * 4} <br>`;
        tabuada.innerHTML += `${i} x 5 = ${i * 5} <br>`;
        tabuada.innerHTML += `${i} x 6 = ${i * 6} <br>`;
        tabuada.innerHTML += `${i} x 7 = ${i * 7} <br>`;
        tabuada.innerHTML += `${i} x 8 = ${i * 8} <br>`;
        tabuada.innerHTML += `${i} x 9 = ${i * 9} <br>`;
        tabuada.innerHTML += `${i} x 10 = ${i * 10} <br>`;
    };
};

// - 11 - Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre os números 24 e 42 (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo.

let valores = [];
let valoresEntre24e42 = [];
let restoDosValores = [];
alert("(11) Insira 10 valores: ");

for(let contador = 0; contador < 10; contador++) {
    valores[contador] = parseFloat(prompt(`(11) Insira a um valore: `));

    // Verifica se o valor inserido é um número
    if(isNaN(valores[contador])) {
        alert("(11) Valores inválidos. Insira apenas números.");
        contador--;
        continue; // Volta o loop se um valor inválido for inserido e decrementa 1 a variável "i".
    };  
};

for (const valor of valores) { 
    if(valor >= 24 && valor <= 42){
        valoresEntre24e42.push(valor); 
        continue;
    }
    restoDosValores.push(valor);
}

alert(`Os valores que estão entre 24 e 42 são ${valoresEntre24e42.join(", ")} e as que não estão são ${restoDosValores.join(", ")}`);