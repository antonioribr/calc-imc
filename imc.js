const calcular = document.getElementById('calcular');

calcular.addEventListener('click', imc);

function imc() {

    /* Criando Variaveis */
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    /* Fazendo Comparação Lógica */
    if (nome !== '' && altura !== '' && peso !== '') {
        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5) {
            classificacao = 'Abaixo do Peso';
        } else if (valorIMC < 25) {
            classificacao = 'Peso Ideal';
        } else if (valorIMC < 30) {
            classificacao = 'Acima do Peso';
        } else if (valorIMC < 35) {
            classificacao = 'Obesidade Grau I';
        } else if (valorIMC < 40) {
            classificacao = 'Obesidade Grau II';
        } else {
            classificacao = 'Obesidade Grau III';
            /* Enviando o Resultado para a DIV com id = resultado */
            resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`
        }
    } else {
        resultado.textContent = "Preencha todos os campos"
    }
}
