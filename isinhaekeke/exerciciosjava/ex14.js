//14. **Shadowing Médio**
//    - Crie variável global `mode = "light"`.
//    - Declare `toggleMode(mode)` que receba parâmetro `mode`, dentro crie uma variável local `mode` invertendo o valor (`"dark"` se for `"light"` e vice-versa`), e retorne o novo` mode`. Imprima global e local.
//    - *Tópicos:* shadowing, parâmetros, variáveis locais, return.

let mode = "light";

function toggleMode(mode) {
  let localMode = mode === "light" ? "dark" : "light";
  return localMode;
}

console.log("Variável global 'mode':", mode);
console.log("Resultado de toggleMode('light'):", toggleMode("light"));
console.log("Variável global permanece inalterada:", mode);