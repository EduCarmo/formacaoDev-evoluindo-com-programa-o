// Classe

// Função Contrutora -> Criar objetos

function Data(dia, mes, ano) {
    this.dia = dia
    this.mes = mes
    this.ano = ano

    this.formatar = function() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

const data1 = new Data(21, 12, 2024)
console.log(data1.formatar())


// 1. Inicia com Letra Maiúscula
// 2. Chamar a função com new Data(...)
// 3. Usar o this para acrescentar o atributos e métodos no objeto

