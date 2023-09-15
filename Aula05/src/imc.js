function calcularIMC(peso, altura) {
    if (altura <= 0) {
        return 'NaN';
    }
    if(peso <= 0){
        return 'NaN';
    }

    const alturaMetros = altura / 100;
    const imc = peso / (alturaMetros * alturaMetros);
    const imcArredondado = imc.toFixed(2);

    let classificacao = '';
    if (imcArredondado < 16) {
        classificacao = 'Magreza grave';
    } else if (imcArredondado >= 16 && imcArredondado < 16.9) {
        classificacao = 'Magreza moderada';
    } else if (imcArredondado >= 17 && imcArredondado < 18.4) {
        classificacao = 'Magreza leve';
    } else if (imcArredondado >= 18.5 && imcArredondado < 24.9) {
        classificacao = 'Peso saudável';
    } else if (imcArredondado >= 25 && imcArredondado < 29.9) {
        classificacao = 'Sobrepeso';
    } else if (imcArredondado >= 30 && imcArredondado < 34.9) {
        classificacao = 'Obesidade Grau I';
    } else if (imcArredondado >= 35 && imcArredondado < 39.9) {
        classificacao = 'Obesidade Grau II (severa)';
    } else {
        classificacao = 'Obesidade Grau III (mórbida)';
    }

    return `${imcArredondado} - ${classificacao}`;
}

module.exports = { calcularIMC };

