const nome = ['Ana', 'Bia', 'Carlos', 'Daniel']

// function praCadaElemtno(elemento, indice, array){
//     console.log(elemento, indice, array)
// }

// nome.forEach(praCadaElemtno)

nome.forEach(function(elemento, i, array){
    console.log(elemento, i, array)
})