//11. **Média de Notas**
//    - Declare `average(scores)` que receba um array de notas, calcule a média e retorne o resultado.
//    - Imprima no console a média de `[8, 7.5, 9, 10]`.
//    - *Tópicos:* loops, variáveis locais, return.

function average(scores) {
  let soma = 0;
  
  for (let i = 0; i < scores.length; i++) {
    soma += scores[i];
  }
  
  return soma / scores.length;
}

console.log("Média das notas:", average([8, 7.5, 9, 10]));