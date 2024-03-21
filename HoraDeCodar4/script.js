// 1 - Crie um programa onde o usuário possa cadastrar estudantes sem limites, e, em seguida, Se o usuário digitar "PARE" o programa deve exibir a quantidade de estudantes cadastrados e a lista com cada um deles. 
let estudantes = [];
let cadastro = true;

let escreverValoresArray = array => {
    let string = "";
    
    array.forEach((valor, index) => {
        index === (array.length - 1) ? string += `${valor}.` : index === (array.length - 2) ? string += `${valor} e ` : string += `${valor}, `;
    });

    return string;
};

alert("Cadastro de estudantes. Para sair do cadastro e escreva 'PARE'.");
for(let index = 0; cadastro === true; index++){
    let resposta = prompt("Insira o nome do estudante");
    resposta = resposta.toUpperCase();
    
    if(resposta !== "PARE"){
        estudantes.push(resposta);
        continue;
    };

    cadastro = false;
    console.log(`A quantidade de estudantes cadastrados são de ${estudantes.length} e eles são ${escreverValoresArray(estudantes)}`);
};

// 2 - Crie uma array de planetas que inclua "Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"  e, em seguida, peça ao usuário para digitar o nome de um planeta.  Verifique se o planeta que o usuário informou está na array e informe ao usuário.
const planetas = ["terra", "marte", "plutão", "vênus", "júpiter", "saturno"];
let validador = false;
let planetaEscolhido =  prompt("insira um planeta e veja se ele consta em nosso sistema: ");

for(let planeta of planetas){
    planetaEscolhido.toLocaleLowerCase();
    if(planetaEscolhido === planeta) validador = true;
}

validador === true ? alert("Seu planeta consta em nosso sistema!") : alert("Seu planeta não consta em nosso sistema.");

// 3 - Vamos criar uma lista de compras. Crie uma array de frutas, exiba-a ao usuário e, em seguida, peça ao usuário para digitar o nome de uma das frutas. Caso a fruta esteja no array, remova-a e exiba a mensagem "Fruta foi retirada da lista".  Peça novamente para o usuário digitar o nome de uma fruta para ser removida. Sempre que o usuário procurar por uma fruta que não está no array exiba a mensagem "Fruta indisponível no nosso mercado".  Quando o array não possuir mais itens dentro de si, escreva "Lista de compras finalizada".
let frutas = ["maça", "banana", "laranja", "pera"];
let sacola = 0;

alert(`Frutas cadastradas: ${escreverValoresArray(frutas)}`);

while(sacola < 4){
    let frutaEscolhida = prompt(`Frutas disponíveis: ${escreverValoresArray(frutas)} Escolha e escreva o nome da fruta desejada que esteja dentro da lista: `);
    let validador = false;

    for(let index in frutas){
        if(frutaEscolhida === frutas[index]){
            alert(`A fruta ${frutas[index]} foi retirada da lista`);
            sacola ++;
            delete frutas[index];

            validador = true;
        }
    };
    
    if(validador === true) continue;
    alert(`A fruta ${frutaEscolhida} está indisponível no nosso mercado!`);
};

alert("Lista de compras finalizada!");