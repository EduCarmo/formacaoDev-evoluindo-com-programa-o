function criarData(dia, mes, ano) {
    return {
        dia: dia,
        mes: mes,
        ano: ano,
        formatar: function() {
            return `${this.dia}/${this.mes}/${this.ano}`
        }
        
    }
}

const data1 = criarData(22, 12, 2024)
const data2 = criarData(15, 10, 2024)
const data3 = criarData(3, 10, 2024)

console.log(data1.formatar())
console.log(data2.formatar())
console.log(data3.formatar())