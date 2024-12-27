function exibirNoConsole(funcao) {
    const resultado = funcao()
    console.log(resultado)
}

function bomDia() {
    return 'Bom dia'
}

exibirNoConsole(bomDia)
