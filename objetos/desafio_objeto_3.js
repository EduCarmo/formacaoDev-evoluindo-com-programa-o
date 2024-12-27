function Aluno(nome, disciplinas) {
    this.nome = nome
    this.disciplina = disciplinas

    
function mediaDeUmArray(numeros) {
    if (!Array.isArray(numeros)) return null

    let total = 0
    for (let numero of numeros) {
        total += numero
    }
    return total / numeros.length
}

    this.media = function (nomeDaDisciplina) {
        for (let disciplina of this.disciplina) {
            if (disciplina.nome.toLocaleLowerCase() === nomeDaDisciplina.toLocaleLowerCase()) {
                return mediaDeUmArray(disciplina.notas)
            }
        }
        return null
    },

        this.mediaGlobal = function () {
            let medias = []
            for (let disciplina of this.disciplina) {
                medias.push(mediaDeUmArray(disciplina.notas))
            }
            return mediaDeUmArray(medias)
        }
}

const aluno1 = new Aluno('Pedro', [
    { nome: 'Português', notas: [5.4, 9, 8.1] },
    { nome: 'Matemática', notas: [7.9, 6.3, 8.9] },
    { nome: 'Inglês', notas: [8.7, 9, 9.6] }
])



console.log(aluno1.nome)
console.log(aluno1.media('português'))
console.log(aluno1.media('matemática'))
console.log(aluno1.media('ingles'))
console.log(aluno1.mediaGlobal())