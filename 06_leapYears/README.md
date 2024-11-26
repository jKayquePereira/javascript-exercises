# Exercise 06 - leapYears

Crie uma função que determine se um determinado ano é ou não bissexto. Os anos bissextos são determinados pelas seguintes regras:

> Anos bissextos são anos divisíveis por quatro (como 1984 e 2004). No entanto, os anos divisíveis por 100 não são anos bissextos (como 1800 e 1900), a menos que sejam divisíveis por 400 (como 1600 e 2000, que foram na verdade anos bissextos). (Sim, é tudo muito confuso)
>
> -- <cite>[Learn to Program](https://pine.fm/LearnToProgram/chap_06.html) by Chris Pine</cite>

```javascript
leapYears(2000) // é um ano bissexto: retorna verdadeiro
leapYears(1985) // não é um ano bissexto: retorna falso
```


## Dicas
- use um `if` declaração e `&&` para garantir que todas as condições sejam atendidas corretamente
