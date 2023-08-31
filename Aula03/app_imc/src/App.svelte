<script>
    let peso = 0;
    let altura = 0;
    let imc = 0;
    let classificacao;
    function generateIMC(){
        if(peso > 0 && altura > 0){
            imc = (peso / Math.pow(altura, 2)).toFixed(2);
            classificacao = ClassificacaoIMC(imc);
        }
        else{
            imc = 0;
            classificacao = "";
        }
    }
    function ClassificacaoIMC(imc) {
        if (imc < 18.5) {
            return "Abaixo do peso";
        } else if (imc < 24.9) {
            return "Peso ideal(parabens)";
        } else if (imc < 29.9) {
            return "Levemente acima do peso";
        } else if (imc < 34.9) {
            return "Obesidade grau 1";
        } else if (imc < 39.9) {
            return "Obesidade grau 2 (Severa)";
        } else {
            return "Obesidade grau 3 (Morbida)";
        }
    }
</script>

<main>
    <h1>Calculadora de IMC</h1>
    <label>
        Peso (kg): <input type="number" bind:value={peso} on:input={generateIMC} />
    </label>
    <label>
        Altura (m): <input type="number" bind:value={altura} on:input={generateIMC}/>
    </label>
    {#if imc > 0}
    <p>Seu IMC é {imc}</p>
    <p>Classificação: {classificacao}</p>
    {/if}
</main>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    h1 {
        color: #ff3e00;
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
