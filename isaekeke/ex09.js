//9. **Conversão de Temperatura**
//    - Declare `toFahrenheit(celsius)` e `toCelsius(fahrenheit)` que façam as conversões apropriadas e retornem os valores.
//    - Teste chamando as duas funções.
//    - *Tópicos:* declaração, parâmetros, return.

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

console.log("25°C em Fahrenheit:", toFahrenheit(25));
console.log("77°F em Celsius:", toCelsius(77));