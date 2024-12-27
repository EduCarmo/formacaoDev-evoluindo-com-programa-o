const notas = [7.3, 8.1, 9.2, 8.1, 6.3, 7.9, 5.0, 6.0, 8.9]

let total = 0
// for (let i = 0; i < notas.length; i++){
//     total += notas[i]
// }

// console.log(total)

for (let nota of notas) {
    total += nota
}

media = total / notas.length

console.log(`A média deu ${(media).toFixed(2)}`)


// for (let nota in notas) {
//     total += notas[nota]
// }

// media = total / notas.length

// console.log(`A média deu ${(media).toFixed(2)}`)