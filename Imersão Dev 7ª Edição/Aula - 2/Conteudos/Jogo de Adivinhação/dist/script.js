var numeroSecreto = parseInt(Math.random() * 1001)


while(chute != numeroSecreto) {
  var chute = prompt('O computador pensou em um número entre 0 e 1000, e você terá que adivinhar O.o')
  if (chute == numeroSecreto) {
    alert('Você Acertou!! Parabéns ^-^')
  }else if (chute > numeroSecreto) {
    alert('Você Errou... Dica: O número secreto é menor!')
  }else if (chute < numeroSecreto) {
    alert('Você Errou... Dica: O número secreto é maior!')
  }
}