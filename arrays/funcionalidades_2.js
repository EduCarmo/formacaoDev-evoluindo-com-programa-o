const numeros = [1, 2, 3, 4, 5, 6]

numeros.splice(2, 2, 'a', 'b')
console.log(numeros)

const numerosExcluido = numeros.pop()
console.log(numeros, numerosExcluido)
