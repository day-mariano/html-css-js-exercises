function calcular() {
    //pegar dados
    var peso = document.getElementsByName('peso')[0]
    var altura = document.getElementsByName('altura')[0]
    //tratar dados
    var p = Number(peso.value)
    var a = Number(altura.value)
    //calcular resposta
    var result = p / (a**2)
    //classificar resultado
    if (result < 17) {
        var classification = 'Muito abaixo do peso'
    } else if (result <= 18.5) {
        var classification = 'Abaixo do peso'
    } else if (result < 25) {
        var classification = 'Peso adequado'
    } else if (result < 30) {
        var classification = 'Sobrepeso'
    } else if (result < 35) {
        var classification = 'Obesidade grau 1'
    } else if (result < 40) {
        var classification = 'Obesidade grau 2'
    } else {
        var classification = 'Obesidade grau 3'
    }
    //mostrar resposta
    resultado.innerHTML= `Seu resultado de IMC é <strong>${result.toFixed(2)}</strong> kg/m2. Classificado como <strong>${classification}</strong>.`
}

