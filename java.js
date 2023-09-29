
// Escreva um programa em Javascript e crie uma variável chamada "nome_do_carro" e atribua-a um valor "Fusca". Exiba-a ao usuário.

function l1() {

    let nome_do_carro = ("fusca")

    alert(nome_do_carro)

}

//Escreva um programa em Javascript em que o usuário informe o seu nome e exiba a mensagem "Olá, [NomeDoUsuario]".

function l2() {

    let nome = prompt("digite seu nome");

    alert(`Olá, senhor ${nome}`);

}



function l3() {

    let nomeDoUsuario = prompt("Digite o seu nome:");
    let idadeDoUsuario = prompt("Digite a sua idade:");


    alert(`Olá, senhor ${nomeDoUsuario}, sua idade é ${idadeDoUsuario} anos.`);

}

//Considerando a figura abaixo, escreva um programa para cada forma que calcule e exiba em tela cada uma de suas respectivas áreas. O usuário irá informar os valores de cada variável.

function l4() {

    let A = 0;
    let baseR = prompt("Informe a Base para o Retângulo:");
    let alturaR = prompt("Informe a Altura o Retângulo:");
    A = baseR * alturaR;
    alert(`A área do Retângulo é de: ${A} `);

}



function l5() {

    let ladoQ = prompt("Informe o Lado do Quadrado:");
    A = ladoQ * ladoQ;
    alert(`A área do Quadrado é de: ${A} `);


}



function l6() {

    let diagonal_maior = prompt("Informe o Diagonal Maior para o Losango:");
    let diagonal_menor = prompt("Informe o Diagonal Menor para o Losango:");
    A = (diagonal_maior * diagonal_menor) / 2;
    alert(`A área do Losango é de: ${A} `);

}



function l7() {


    var bmaior = parseFloat(prompt("Digite o valor da base maior:"));
    var bmenor = parseFloat(prompt("Digite o valor da base menor:"));
    var h = parseFloat(prompt("Digite o valor da altura:"));

    var area = 0.5 * ((bmaior + bmenor) * h);

    alert(`A área do trapézio é ${area}`);


}



function l8() {

    let baseP = prompt("Informe a Base para o Paralelogramo:");
    let alturaP = prompt("Altura Paralelogramo:");
    A = baseP * alturaP;
    alert(`A área do Paralelogramo é de: ${A} `);


}



function l9() {

    let baseTri = prompt("Informe a base do Triângulo:");
    let alturaTri = prompt("Altura Triângulo:");
    A = (baseTri * alturaTri) / 2;
    alert(`A área do Triângulo é de: ${A} `);

}



function l10() {

    let raio = parseFloat(prompt("Digite o Raio do Círculo:"));
    let A = Math.PI * (raio * raio);
    alert(`A área do Círculo é de: ${A}`);
    


}