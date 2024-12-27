// Objeto: Aluno
// Atributos: nome, disciplinas (nome, 3 notas)
// Método: media(nomeDaDisciplina), mediaGlobal


function mediaDeUmArray(numeros) {
    if (!Array.isArray(numeros)) return null

    let total = 0
    for (let numero of numeros) {
        total += numero
    }
    return total / numeros.length
}

const aluno = {
    nome: 'Eduardo',
    disciplina: [
        { nome: 'Português', notas: [5.4, 9, 8.1] },
        { nome: 'Matemática', notas: [7.9, 6.3, 8.9] },
        { nome: 'Inglês', notas: [8.7, 9, 9.6] }
    ],
    media: function (nomeDaDisciplina) {
        for (let disciplina of this.disciplina) {
            if (disciplina.nome.toLocaleLowerCase() === nomeDaDisciplina.toLocaleLowerCase()) {
                return mediaDeUmArray(disciplina.notas)
            }
        }
        return null
    },

    mediaGlobal(){
        let medias = []
        for (let disciplina of this.disciplina) {
            medias.push(mediaDeUmArray(disciplina.notas))
        }
        return mediaDeUmArray(medias)
    }
}


console.log(aluno.nome)
console.log(aluno.media('português'))
console.log(aluno.media('matemática'))
console.log(aluno.media('ingles'))
console.log(aluno.mediaGlobal())