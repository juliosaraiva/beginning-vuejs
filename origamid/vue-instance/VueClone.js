class VueClone {
  constructor(options) {
    this.options = options;
    this.el = document.querySelector(options.el);
    this.data = options.data;
  }
}

const vmClone = new VueClone({
  el: "#app",
  data: {
    mensagem: "Martelo"
  }
});

const vm = new Vue({
  el: ".container",
  data: {
    instrumento: "Guitarra",
    mensagem: "Hello World"
  }
});
