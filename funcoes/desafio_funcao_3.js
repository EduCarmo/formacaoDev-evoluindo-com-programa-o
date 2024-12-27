const nota1 = 7.9
const nota2 = 2.4
const nota3 = 6.5

function menorValor(n1, n2) {
    return n1 <= n2 ? n1 : n2
}

function mediaDasDuasMaioresNotas(n1, n2, n3) {
    const menorNota = menorValor(n1, menorValor(n2, n3))

    if (menorNota === n1) {
        return (n2 + n3) / 2
    } else if (menorNota === n2) {
        return (n1 + n3) / 2
    } else {
        return (n1 + n2) / 2
    }

}

function mediaParaStatus(nota) {
    if (nota >= 7) {
        return 'Aprovado'
    } else if (nota >= 4) {
        return 'Recuperação'
    } else {
        return 'Recuperação'
    }
}

function notasPataStatus(n1, n2, n3) {
    let media = mediaDasDuasMaioresNotas(n1, n2, n3)
    return mediaParaStatus(media)
}

console.log(notasPataStatus(nota1, nota2, nota3))
