//13. **Chamadas Encadeadas**
//    - Declare `double(n)` que retorne `n * 2`.
//    - Declare `quadruple(n)` que chame `double(double(n))` e retorne o resultado.
//    - Teste `quadruple(3)`.
//    - *Tópicos:* chamada de função, return.

function double(n) {
  return n * 2;
}

function quadruple(n) {
  return double(double(n));
}

console.log("Quadruple de 3:", quadruple(3));