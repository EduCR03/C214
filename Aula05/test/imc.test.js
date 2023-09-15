const { expect } = require('chai');
const { calcularIMC} = require('../src/imc');

describe('Calculadora de IMC', () => {
    it('Calculadora deve rodar tranquilo', () => {
        const peso = 93;
        const altura = 175;

        const IMEsperado = (peso/Math.pow(altura / 100, 2)).toFixed(2);
        const IMCCalculado = calcularIMC(peso, altura);

        expect(IMCCalculado).to.equal('30.37 - Obesidade Grau I');
    });

    it('altura = 0, entrada inadequada', () => {
        const peso = 93;
        const altura = 0;

        const IMCCalculado = calcularIMC(peso, altura);

        expect(IMCCalculado).to.equal('NaN');
    });

    it('IMC abaixo do ideal', () => {
        const peso = 50;
        const altura = 165;

        const IMCCalculado = calcularIMC(peso, altura);

        expect(IMCCalculado).to.equal('18.37 - Magreza leve');
    });

    it('IMC acima do ideal', () => {
        const peso = 90;
        const altura = 180;

        const IMCCalculado = calcularIMC(peso, altura);

        expect(IMCCalculado).to.equal('27.78 - Sobrepeso');
    });

    it('Peso zero, entrada inadequada', () => {
        const peso = 0;
        const altura = 160;

        const IMCCalculado = calcularIMC(peso, altura);

        expect(IMCCalculado).to.equal('NaN');
    });

    it('Altura negativa, entrada inadequada', () => {
        const peso = 50;
        const altura = -170;

        const IMCCalculado = calcularIMC(peso, altura);

        expect(IMCCalculado).to.equal('NaN');
    });
});