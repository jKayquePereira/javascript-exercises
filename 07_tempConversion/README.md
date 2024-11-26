# Exercise 07 - tempConversion

Escreva duas funções que convertam temperaturas de Fahrenheit para Celsius e vice-versa:
```
convertToCelsius(32) //fahrenheit para Celsius, deve retornar 0

convertToFahrenheit(0) // Celsius para Fahrenheit, deve retornar 32
```

Como somos humanos, queremos que a temperatura resultante seja arredondada para uma casa decimal: ou seja, `convertToCelsius(100)` deveria retornar `37.8` e não `37.77777777777778`.

Este exercício pede que você crie mais de uma função para que o `module.exports` A seção do arquivo javascript principal parece um pouco diferente desta vez. Não há nada com que se preocupar, estamos apenas empacotando as duas funções em um único objeto para ser exportado.

## Dicas
- Você pode encontrar as fórmulas relevantes em [Wikipedia](https://en.wikipedia.org/wiki/Conversion_of_units_of_temperature).

- Tente descobrir por si mesmo na Internet como arredondar um número para 1 casa decimal em JavaScript. Se você tem dificuldade, dê uma olhada [aqui](https://stackoverflow.com/q/7342957/5433628).
