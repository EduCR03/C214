<script src="https://cdn.jsdelivr.net/npm/chart.js">
    let peso = 0;
    let altura = 0;
    let imc = 0;
    let classificacao;

    function generateIMC() {
      if (peso > 0 && altura > 0) {
        imc = (peso / Math.pow(altura, 2)).toFixed(2);
        classificacao = ClassificacaoIMC(imc);
        updateChart();
      } else {
        imc = 0;
        classificacao = "";
      }

      document.getElementById("imc").textContent = imc;
      document.getElementById("classificacao").textContent = classificacao
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

    function updateChart() {
        const ctx = document.getElementById("imcChart").getContext("2d");
        const labels = ["Abaixo do peso", "Peso ideal", "Levemente acima do peso", "Obesidade grau 1", "Obesidade grau 2", "Obesidade grau 3"];
        const data = [18.5, 24.9, 29.9, 34.9, 39.9, imc];
        
        new Chart(ctx, {
            type: "bar",
            data: {
                labels: labels,
                datasets: [{
                    label: "IMC",
                    data: data,
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.5)",
                        "rgba(54, 162, 235, 0.5)",
                        "rgba(255, 206, 86, 0.5)",
                        "rgba(75, 192, 192, 0.5)",
                        "rgba(153, 102, 255, 0.5)",
                        "rgba(255, 159, 64, 0.5)"
                    ],
                    borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)"
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
    document.getElementById("peso").addEventListener("input", calculateIMC);
    document.getElementById("altura").addEventListener("input", calculateIMC);
    
    document.addEventListener("DOMContentLoaded", function () {
            calculateIMC();
    });
  
  </script>
  
  <main>
    <h1>Calculadora de IMC</h1>
    <label>
      Peso (kg): <input type="number" bind:value={peso} on:input={generateIMC} />
    </label>
    <label>
      Altura (m): <input type="number" bind:value={altura} on:input={generateIMC} />
    </label>
    {#if imc > 0}
    <p>Seu IMC é {imc}</p>
    <p>Classificação: {classificacao}</p>
    {/if}


    <canvas id="imcChart" width="400" height="200"></canvas>
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