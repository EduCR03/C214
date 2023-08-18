class Filme:
    def __init__(self, titulo, ano, genero, duracao, assistido, avaliacao):
        self.titulo = titulo
        self.ano = ano
        self.genero = genero
        self.duracao = duracao
        self.assistido = assistido
        self.avaliacao = avaliacao

    def get_titulo(self):
        return self.titulo

    def get_ano(self):
        return self.ano

    def get_genero(self):
        return self.genero

    def get_duracao(self):
        return self.duracao

    def is_assistido(self):
        return self.assistido

    def get_avaliacao(self):
        return self.avaliacao

    def avaliar(self, avaliacao):
        self.avaliacao = avaliacao

    def exibir_detalhes(self):
        print("Título:", self.get_titulo())
        print("Ano:", self.get_ano())
        print("Gênero:", self.get_genero())
        print("Duração:", self.get_duracao(), "minutos")
        if self.is_assistido():
            print("Assistido: Sim")
        else:
            print("Assistido: Nao")
        print("Avaliação:", self.get_avaliacao())


filme1 = Filme("Jurassic Park", 1993, "Ficção Científica", 126, True, 10)
filme2 = Filme("The Lost World: Jurassic Park", 1997, "Ficção Científica", 130, True, 9)
filme3 = Filme("Jurassic Park III", 2001, "Ficção Científica", 95, True, 7)

filme1.exibir_detalhes()
print("\n------------------------------------------")
filme2.exibir_detalhes()
print("\n------------------------------------------")
filme3.exibir_detalhes()
