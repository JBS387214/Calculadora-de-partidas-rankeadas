// Solicita ao usuário que insira o nome do herói e a quantidade de XP
var nomeHeroi = prompt("Digite o nome do herói: ");
var xpHeroi = parseInt(prompt("Digite a quantidade de experiência (XP) do herói: "));

// Utiliza estrutura de decisão para determinar o nível do herói
var nivel;

if (xpHeroi < 1000) {
    nivel = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
    nivel = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
    nivel = "Prata";
} else if (xpHeroi >= 6001 && xpHeroi <= 7000) {
    nivel = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
    nivel = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
    nivel = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Exibe a mensagem com o nome do herói e seu nível
console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel);


// Calculadora de prtidas rankeadas.

function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 10 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}

// Exemplo de uso
const quantidadeVitorias = parseInt(prompt("Digite a quantidade de vitórias:"));
const quantidadeDerrotas = parseInt(prompt("Digite a quantidade de derrotas:"));

const { saldoVitorias, nivel } = calcularNivel(quantidadeVitorias, quantidadeDerrotas);

console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`);







