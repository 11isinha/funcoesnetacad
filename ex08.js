//8. **Primo Simples**
//    - Declare `isPrime(n)` que retorne `true` se `n` for primo e `false` caso contrário.
//    - Use um loop e variável local para contagem.
//    - Chame para vários valores e imprima.
//    - *Tópicos:* funções, variáveis locais, return.

function isPrime(n) {
  if (n <= 1) return false;
  let divisores = 0;
  
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      divisores++;
    }
  }
  
  return divisores === 2;
}

console.log("7 é primo?", isPrime(7));
console.log("10 é primo?", isPrime(10));
console.log("13 é primo?", isPrime(13));