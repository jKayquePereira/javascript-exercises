# Exercise 01 - Hello World

O objetivo principal deste exercício é orientar você no processo de execução dos testes e garantir que tudo esteja configurado e funcionando corretamente.

Neste diretório você encontrará outros 2 arquivos:
  1. `helloWorld.js`
  2. `helloWorld.spec.js`

Esta configuração deve ser a mesma para todos os exercícios.  O arquivo javascript simples é onde você escreverá seu código, e o `spec` contém os testes que verificam se seu código está funcional.

Vejamos primeiro o arquivo de especificações:
```javascript
const helloWorld = require('./helloWorld');

describe('Hello World', function() {
  test('says "Hello, World!"', function() {
    expect(helloWorld()).toEqual('Hello, World!');
  });
});
```
No topo do arquivo que usamos `require()` para importar o código do arquivo javascript (`helloWorld.js`) para que possamos testá-lo.

O próximo bloco (`describe()`) é o corpo do teste.  Basicamente, tudo o que ele faz é executar seu código e testar para ver se a saída está correta.  O `test()` função descreve o que deveria estar acontecendo em inglês simples e depois inclui o `expect()` função.  Para este exemplo simples, deve ser bem simples de ler.

Por enquanto você não precisa se preocupar em como escrever testes, mas você deve tentar se sentir confortável o suficiente com a sintaxe para descobrir o que os testes estão pedindo para você fazer.  Vá em frente e execute os testes digitando `npm test helloWorld.spec.js` no terminal e observe-o falhar.  A saída desse comando deve informar exatamente o que deu errado com seu código.  Neste caso, executando o `helloWorld()` função deve retornar a frase 'Hello, World!' mas em vez disso retorna uma string vazia ...

então vamos dar uma olhada no arquivo javascript:```javascript
const helloWorld = function() {
  return ''
}

module.exports = helloWorld
```
Neste arquivo temos uma função simples chamada helloWorld que retorna uma string vazia... que é exatamente o que nosso teste estava reclamando.  O `module.exports` na última linha está como exportamos a função para que ela possa ser importada com `require()` no arquivo de especificações.

Vá em frente e veja se você consegue fazer o teste passar editando o valor de retorno da função e executando o arquivo de teste novamente.

Só para ter certeza, caso você esteja confuso neste momento, o teste está lhe dizendo que executar a função`helloWorld` deveria retornar a frase`Hello, World!`.  Pontuação e letras maiúsculas definitivamente são importantes aqui, então verifique novamente se o teste ainda não passou.

Esta é a aparência da função final:
```javascript
const helloWorld = function() {
  return 'Hello, World!'
}

module.exports = helloWorld
```

Na maioria das vezes, configuramos esses testes de forma que você só precise escrever o código que está sendo testado.  Você não deve se preocupar em importar ou exportar nada neste estágio. Então, apenas contorne essa parte do código e escreva o que for necessário para fazê-los passar!
