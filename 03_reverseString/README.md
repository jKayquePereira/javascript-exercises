# Exercise 03 - Reverse a String

Muito simples, escreva uma função chamada `reverseString`que retorna sua entrada, invertida!

```javascript
reverseString('hello there') // returns 'ereht olleh'
```

Você notará neste exercício que existem vários testes (no arquivo `reverseString.spec.js`).Atualmente, apenas o primeiro teste está habilitado. Depois de garantir que o primeiro teste foi aprovado, ative os testes restantes, um por um, removendo o `.skip` da função `test.skip()`.


## Dicas
Strings em JavaScript não podem ser revertidas diretamente, então você terá que dividi-las em outra coisa primeiro. Faça a reversão e depois junte-as novamente em uma string.