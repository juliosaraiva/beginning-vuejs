# The Vue Instance

É uma função construtora que recebe um objeto como parâmetro um objeto, e possui algumas propriedades e métodos pré-definidos que devem ser passadas ao objeto para manipular elementos da DOM.

### Propriedades do Vue

Afim de evitar conflito com as propriedades que são criadas pelo usuário, Uma Instance Vue define um `$` e `_` para suas propriedades internas.

### Elemento

A primeira coisa que devemos fazer ao criar uma instance Vue, é definir na propriedade `el`, qual elemento desejamos selecionar para o Vue manipular.

### Data

A propriedade `data` é responsável por dar reatividade aos estados através de getters e setters. Seus valores pode ser um objeto ou uma função.

Tudo que estiver dentro de `data` terá acesso direto na raiz da instance Vue, para isso o Vue faz uso de um recurso chamado de proxy. Caso seja definido `$` e `_` na definição de uma propriedade em data, não será feito o proxy para evitar conflitos com propriedades internas do Vue, isso quer dizer que a propriedade que for definida iniciando-se com estes caracteres não terão acesso direto na raiz da Vue instance.

```javascript
const vm = new Vue({
  el: "#app",
  data: {
    mensagem: "Hello World!"
  }
});
console.log(vm.$data.mensagem);
console.log(vm.data);
```

No exemplo acima, podemos acessar o valor da propriedade definida em data diretamente na raiz da vue instance usando `vm.mensagem` ou fazendo referência direta através de `vm.$data.mensagem`.
