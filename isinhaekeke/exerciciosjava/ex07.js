//7. **Shadowing Básico**
//    - Crie uma variável global `x` com valor `10`.
//    - Declare uma função `shadowExample(x)` que receba um parâmetro `x` e dentro imprima o parâmetro e depois a variável global.
//    - Chame `shadowExample(20)`.
//    - *Tópicos:* shadowing, parâmetros, variáveis locais, escopo.

let x = 10;

function shadowExample(x) {
  console.log("Parâmetro local (shadowed):", x);
  // No navegador/NetAcad, a variável global fica acessível no escopo global
  console.log("Variável global:", window.x);
}

shadowExample(20);