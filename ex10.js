//10. **Máximo em Array**
//    - Declare `getMax(arr)` que receba um array de números e retorne o maior valor.
//    - Utilize uma variável local para armazenar o máximo temporário e retorne ao final.
//    - *Tópicos:* variáveis locais, return.

function getMax(arr) {
  let max = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  
  return max;
}

console.log("Maior elemento:", getMax([10, 45, 3, 99, 23]));