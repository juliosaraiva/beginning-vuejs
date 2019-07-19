# Iniciando os estudos com o Vue.JS


### Notes


#### Acessando dados no template


- O Vue.JS cria acesso direto para data e methods quando trabalhamos com esses dados dentro do template. Sabendo disso, se estivermos a seguinte estrutura podemos referenciá-la direto no template.
```javascript
new Vue({
    el: "#app",
    data: {
        titulo: "Estudando VueJS"
    }
})
```

Neste exemplo, temos uma instância da classe Vue e nela temos um objeto data com uma propriedade título. Essa propriedade pode ser referenciada diretamente no template. Sabendo disso, para chamá-la no template podemos usá-la da seguinte forma:

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
Diretivas é a nomenclatura que o VueJS usa para propriedades personalizadas em tags HTML.

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
    })
</script>
```
No exemplo acima o atributo será `href`, e a expressão é o que está entre aspas, neste caso `link`. a diretiva `v-bind` irá substituir a expressão, por uma propriedade equivalente declarada na Vue Instance. Como no exemplo, em `data` na vue instance, `link` terá seu valor substituído no valor do atributo de `href`.


#### Diretiva v-once
O `v-once` é muito útil quando temos uma tag que não desejamos que seja monitorada pelo view, sendo assim seu conteúdo será renderizado uma única vez.

### Eventos

#### Diretiva v-on
A diretiva `v-on` é usada para escutar eventos na DOM e disparar uma ação quando este evento for disparado.


> Os modificadores de evento, podem alterar o comportamento padrão de determinados eventos que ocorrem na DOM. É muito útil em eventos de interação com o mouse.