//15. **Analisador de Números Completo**
//    - Crie variável global `analysisType = "sum"`.
//    - Declare função `analyzeNumbers(analysisType, numbers)` que receba um parâmetro `analysisType` (podendo ser `"sum"` ou `"average"`) e um array de números.
//    - Dentro de `analyzeNumbers`, faça *shadowing* de `analysisType`. Declare duas funções auxiliares:
//        - `sumNumbers(arr)` retorna soma de `arr`.
//        - `averageNumbers(arr)` retorna média de `arr`.
//    - Use variáveis locais para acumular resultados.
//    - Se o parâmetro `analysisType` (shadowed) for "sum", chame `sumNumbers(numbers)` e retorne; se for "average", chame `averageNumbers(numbers)` e retorne.
//    - Fora da função, chame `analyzeNumbers("sum", [1,2,3,4])` e `analyzeNumbers("average", [1,2,3,4])` e imprima os resultados, mostrando como o shadowing altera o fluxo.
//    - *Tópicos:* declaração e chamada de funções, parâmetros, variáveis locais, return, shadowing, chamadas de funções auxiliares.

let analysisType = "sum";

function analyzeNumbers(analysisType, numbers) {
  // O parâmetro 'analysisType' faz o shadowing da variável global 'analysisType'
  
  function sumNumbers(arr) {
    let acumulador = 0;
    for (let i = 0; i < arr.length; i++) {
      acumulador += arr[i];
    }
    return acumulador;
  }

  function averageNumbers(arr) {
    let total = sumNumbers(arr);
    return total / arr.length;
  }

  if (analysisType === "sum") {
    return sumNumbers(numbers);
  } else if (analysisType === "average") {
    return averageNumbers(numbers);
  }
}

// Demonstração:
let resultadoSoma = analyzeNumbers("sum", [1, 2, 3, 4]);
let resultadoMedia = analyzeNumbers("average", [1, 2, 3, 4]);

console.log("Resultado 'sum':", resultadoSoma);       // Retorna 10
console.log("Resultado 'average':", resultadoMedia);  // Retorna 2.5
console.log("Variável global 'analysisType':", analysisType); // Permanece "sum"