const numeros = [68, 55, 123, 222, 95, 33, 45]

//foreach => para cada elemento do array, vai fazer uma ação



// for (let numero of numeros) {
//     console.log(numero)
// }

for (let i in numeros) {
    console.log(`${i} => ${numeros[i]}`)
}

numeros.forEach(numero => {
    console.log(numero)
});