const nomes = ['Rafaela', 'Larissa', 'Ana', 'Pedro']

function forEach(array, funcao) {
    for (let i in array){
        funcao(array[i], i, array)
    }
}

function praCadaElemento(elemento, i, array) {
    console.log(elemento, i, array)
}

forEach(nomes, praCadaElemento)