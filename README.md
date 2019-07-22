# Iniciando os estudos com o Vue.JS

### Notes

#### Acessando dados no template

- O Vue.JS cria acesso direto para data e methods quando trabalhamos com esses dados dentro do template. Sabendo disso, métodos e atributos que estiverem contidos dentro de data, methods, watch e computed, podem ser referenciadas diretamente. A interpolação só funciona para o conteúdo da tag, para seus atributos devemos usar as diretivas.

```javascript
new Vue({
  el: "#app",
  data: {
    titulo: "Estudando VueJS"
  }
});
```

Neste exemplo, temos uma instância da classe Vue (que é a raiz de um projeto Vue) e nela temos um objeto data com uma propriedade título. Essa propriedade pode ser referenciada diretamente no template. Sabendo disso, para chamá-la no template podemos usá-la da seguinte forma:

```html
<div id="app">
  <p>{{ titulo }}</p>
</div>
```

### Acessando propriedades da instância

Para acessarmos um atributo da própria instância diretamente, podemos fazer referenciando a própria instância seguida do atributo que desejamos acessar. Neste exemplo, estamos referenciando o titulo definido em data.

```javascript
{
    data {
        titulo: 'VueJS é legal!'
    },
    methods: {
      saudacao: this.titulo
    }
}
```

## Diretivas

Diretivas são estruturas que nos permite deixar o HTML dinâmico, sendo rederizado a cada vez que é a página é processada (ou não =), conforme será visto mais pra frente). Todas as diretivas que já vem com o Vue começam com `v-` para indicar que se trata de um atributo especial para ele. Ao invés de usar interpolação em atributos HTML, devemos usar a diretivas.

#### Diretiva v-bind

O `v-bind` cria uma ligação dinâmica entre um atributo e uma expressão.

```html
<div id="app">
  <a v-bind:href="link">Google</a>
</div>
<script>
  new Vue({
    el: "#app",
    data: {
      link: "https://www.google.com"
    }
  });
</script>
```

No exemplo acima o atributo será `href`, e a expressão é o que está entre aspas, neste caso `link`. a diretiva `v-bind` irá substituir a expressão, por uma propriedade equivalente declarada na Vue Instance. Como no exemplo, no atributo `data` da vue instance, `link` terá seu valor substituído pelo site do Google no atributo `href`. Ao ver a expressão link, basicamente o que o `v-bind` faz é ligar para a Vue instance para perguntar qual valor está associado a `link`.

#### Diretiva v-once

O `v-once` é muito útil quando temos uma tag que não desejamos que seja monitorada pelo view, sendo assim seu conteúdo será renderizado uma única vez.

### Eventos

#### Diretiva v-on

A diretiva `v-on` é usada para escutar eventos na DOM e disparar uma ação quando este evento for disparado.

> Os modificadores de evento, podem alterar o comportamento padrão de determinados eventos que ocorrem na DOM. É muito útil em eventos de interação com o mouse.

> `v-bind` Altera no sentido Javascript -> HTML

> `v-on` Altera no sentido HTML -> Javascript

> `v-model` Altera em ambos os sentidos. Este é considerado uma propriedade reativa.

### computed property

Propriedades computadas são síncronas, isso quer dizer que a partir do momento que for chamada, deve retornar um valor

### watch property

Permite fazer chamadas síncronas e assíncronas. Essa propriedade fica monitorando as alterações de uma determinada propriedade. É muito útil para fazer requisições API.

### Syntax reduzida

> `@` é o mesmo que usar `v-on`

> `:param` é o mesmo que usar `v-bind`

## Renderização condicional

É a técnica usada para renderizar na DOM somente um bloco que atende uma determinada condição. É usado com a diretiva `v-if`.

```javascript
<h1 v-if="top">O Vue é mesmo incrível</h1>
```

Neste exemplo, este bloco só será renderizado, se o valor de top retornar `true`.

Também é possível usar `v-else` se a condição do `v-if` não for atendida. o `v-else` deve vir imediatamente logo após `v-if`.

```javascript
<h1>Qual o melhor framework?</h1>
<p v-if="theBest">Vue, é claro</p>
<p v-else>React</p>
```

## Renderização de listas
