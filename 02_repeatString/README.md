# Exercise 02 - repeatString

Escreva uma função que simplesmente repita a string um determinado número de vezes:

```javascript
repeatString('hey', 3) // returns 'heyheyhey'
```

Esta função terá dois argumentos, `string` e `num`.

Use loops para implementar `repeatString` em vez de usar o embutido `String.prototype.repeat` que tem o mesmo comportamento.

*Nota:* Os exercícios posteriores a este não terão argumentos fornecidos como este - você mesmo precisará fornecê-los a partir de agora. Portanto, leia atentamente o README de cada exercício para ver que tipos de argumentos serão esperados.

Você notará neste exercício que existem vários testes (veja no arquivo `repeatString.spec.js`). Apenas o primeiro teste está habilitado no momento. Então, depois de se certificar de que este primeiro foi aprovado, habilite os outros um por um, excluindo o `.skip` da função `test.skip()`.


## Dicas

- Observe a chamada de função acima - como exatamente ela está sendo chamada?

- Crie uma variável para armazenar a string que você retornará, crie um loop que se repete o número determinado de vezes e adicione a string fornecida ao resultado em cada loop.

- Se estiver executando `npm test repeatString.spec.js` returns resultados semelhantes aos abaixo, certifique-se de ter habilitado o restante dos testes, conforme descrito nas instruções acima.

```
Conjuntos de testes: 1 aprovado, 1 no total
Testes: 6 ignorados, 1 aprovado, 7 no total
```
