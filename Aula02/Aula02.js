const prompt = require('prompt-sync')();

class Filme {
    constructor(titulo, ano, genero, duracao, assistido, avaliacao) {
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.duracao = duracao;
        this.assistido = assistido;
        this.avaliacao = avaliacao;
    }

    getTitulo() {
        return this.titulo;
    }

    getAno() {
        return this.ano;
    }

    getGenero() {
        return this.genero;
    }

    getDuracao() {
        return this.duracao;
    }

    isAssistido() {
        return this.assistido;
    }

    getAvaliacao() {
        return this.avaliacao;
    }

    avaliar(avaliacao) {
        this.avaliacao = avaliacao;
    }

    assistido(){
        this.assistido = true
    }

    exibirDetalhes() {
        console.log("Título:", this.getTitulo());
        console.log("Ano:", this.getAno());
        console.log("Gênero:", this.getGenero());
        console.log("Duração:", this.getDuracao(), "minutos");
        if (this.isAssistido()) {
            console.log("Assistido: Sim");
        } else {
            console.log("Assistido: Não");
        }
        console.log("Avaliação:", this.getAvaliacao());
    }
}

function main(){
    while(true){
        console.log("Escolha uma opcao")
        console.log("1 - Adicionar um novo filme");
        console.log("2 - Marcar um filme como assistido");
        console.log("3 - Avaliar um filme");
        console.log("4 - Exibir a lista de filmes");
        console.log("5 - Sair");

        const opcao = parseInt(prompt("Digite sua escolha:"));

        switch (opcao) {
            case 1:
                const titulo = prompt("Nome do filme: ")
                const ano = prompt("Ano do filme: ")
                const genero = prompt("Qual o genero: ")
                const duracao = prompt("Tempo do filme(em minutos): ")
            
                const addFilme = new Filme(titulo, ano, genero, duracao, false, 0);
                filmes.push(addFilme)
            
                console.log("Filme adicionado!!!!!!!!")
                break;
            case 2:
                const index = prompt("Digite o indice do filme que voce assistiu")
                filmes[index].assistido();
                console.log("Marcado como ja assistido!")
                break;
            case 3:
                const i = prompt("Digite o indice do filme que ira avaliar: ")
                const nota = prompt("Digite a sua nota para o filme: ")
            
                filmes[i].avaliar(nota)
                break;
            case 4:
                console.log("Filmes no sistema")
                for (let i = 0; i < filmes.length; i++) {
                    console.log("_________________________________________")
                    filmes[i].exibirDetalhes()
                }
                break;
            case 5:
                console.log("Encerrando o programa.");
                return;
            default:
                console.log("Opção inválida.");
        }
    }
}

const filme1 = new Filme("Jurassic Park", 1993, "Ficção Científica", 126, true, 10);
const filme2 = new Filme("The Lost World: Jurassic Park", 1997, "Ficção Científica", 130, true, 9);
const filme3 = new Filme("Jurassic Park III", 2001, "Ficção Científica", 95, true, 7);

const filmes = []
filmes.push(filme1)
filmes.push(filme2)
filmes.push(filme3)

main();

