// Objetivo:
// Compreender e aplicar funções em JavaScript, explorando parâmetros, retorno de valores e
// reutilização de código.
// Descrição:
// Você deverá desenvolver uma pequena aplicação que utilize funções para realizar operações
// matemáticas e manipulação de dados. A atividade deve evidenciar o uso de funções
// nomeadas, funções anônimas e arrow functions. FUNCAO ANONIMA
// O que deve ser feito:
// • Criar funções que realizem operações básicas (soma, subtração, multiplicação, divisão). FEITO
// • Implementar uma função que manipule arrays (ex: filtrar números pares, calcular média). FEITO
// • Usar arrow functions em pelo menos duas partes do código.
// • Criar uma função que receba outra função como parâmetro (callback).
// Entrega:/
// • Arquivo .html com código JavaScript embutido ou .js externo.
// • Documentação curta (1 página) explicando as funções criadas e seus usos.
// • Submissão via repositório no GitHub.

// Funções nomeadas:

function soma(a,b) {
    return a + b;
}

function subtracao(a,b) {
    return a - b;
}

function multiplicacao(a,b) {
    return a * b;
}

function divisao(a,b) {
    return a / b;
}

function filtrarPares(lista) {
    let pares = [];
    lista.forEach(numero => {
        if (numero % 2 == 0) {
            pares.push(numero);
        }
    }
);
    return pares;
}

function calcularMedia(lista) {
    let soma = 0;
    lista.forEach(numero => {soma += numero});

    return soma / lista.length;
}

const input1 = document.getElementById("input-1");
const input2 = document.getElementById("input-2");
const operacao = document.getElementById("operacao");
const resultado = document.getElementById("resultado");

input1.addEventListener('keyup', () => {
    
        if (!isNaN(input1.value)) { // se input1.value é um numero, atualiza 
            atualizarCalculo();
        } else {
            input1.value = "";
        }   
})

input2.addEventListener('keyup', () => {
    
        if (!isNaN(input2.value)) {
            atualizarCalculo();
        } else {
            input2.value = "";
        }
})

operacao.addEventListener('change', () => {
    atualizarCalculo();
})


function atualizarCalculo() {

    const operacoesMapa = {
        "soma": soma,
        "subtracao": subtracao,
        "multiplicacao": multiplicacao,
        "divisao": divisao
    }

    const num1 = parseFloat(input1.value);
    const num2 = parseFloat(input2.value);

    let res = retornaResOperacao(num1, num2, operacoesMapa[operacao.value]);

    if (isNaN(res)) {
        resultado.innerText = "RESULTADO: -- ";
    } else {
        resultado.innerText = "RESULTADO: " + res;
    }
}

function retornaResOperacao(num1, num2, operacao) {
    return operacao(num1,num2);
}

const botao = document.getElementById("botao")

let qtdPontos = 0;
let valorPonto = 10;

botao.addEventListener('click', () => {
    somarPontos();
    atualizarCalculoPontos();
})


function somarPontos() {
    qtdPontos += valorPonto;
}

function atualizarCalculoPontos() {
    pontuacao.innerText = "Pontuação: " + qtdPontos;
}

console.log(calcularMedia([1,2,3,10,10,10]))
console.log(filtrarPares([1,2,3,10]))
