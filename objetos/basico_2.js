function precoComDesconto(preco, desconto){
    return preco * (1 - desconto)
}

const produto = {
    nome: 'Macbook',
    preco: 32000,
    desconto: 0.25,
    precoComDesconto: function () { // Método
        return this.preco * (1 - this.desconto)
    }
}

console.log(`O valor do desconto foi ${produto.precoComDesconto()}$ reais`)
console.log(precoComDesconto(produto.preco, produto.desconto))

