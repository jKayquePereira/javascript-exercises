# Exercise 04 - removeFromArray

Implemente uma função que receba um array e alguns outros argumentos e depois remova os outros argumentos desse array:

```javascript
removeFromArray([1, 2, 3, 4], 3); // should remove 3 and return [1,2,4]
```

## Dicas

O primeiro teste deste é bastante fácil, mas há algumas coisas em que pensar (ou pesquisar no Google) aqui para os testes posteriores:

- você pode manipular o array original passado para a chamada de função ou criar um novo array que é retornado como resultado.
- como remover um único elemento de um array
- como lidar com vários argumentos opcionais em uma função JavaScript
- Para mais informações, confira a página do MDN em [function arguments](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) - role para baixo até a parte sobre `Array.from` ou o operador de spread. Você também pode conferir a página do MDN em [rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters).
