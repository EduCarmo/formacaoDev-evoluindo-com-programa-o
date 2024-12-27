const data = {
    dia: 21, 
    mes: 12,
    ano: 2024,
    formatar: function(){
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}


console.log(data.formatar())
