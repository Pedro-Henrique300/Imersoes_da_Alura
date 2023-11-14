var numeroSecreto = Math.ceil(Math.random() * 1000); 
var tentativas = 0

alert('O computador pensou em um número entre 1 e 1000, e você terá que adivinhar O.o, você terá 10 tentativas!')

while(chute != numeroSecreto) {
  tentativas += 1
  if (tentativas >= 11){
    alert('Você utilizou todas suas tentativas...Tente novamente! O número era ' + numeroSecreto)
    break
  }
  var chute = prompt('Qual é o número?')
  if (chute == numeroSecreto) {
    alert('Você Acertou!! Parabéns ^-^')
  }else if (chute > numeroSecreto) {
    alert('Você Errou... Dica: O número secreto é menor!')
    alert('Tentativas: ' + tentativas)
  }else if (chute < numeroSecreto) {
    alert('Você Errou... Dica: O número secreto é maior!')
    alert('Tentativas: ' + tentativas)
  }
}