function VueClone(options) {
  this.options = options;
  this.el = document.querySelector(options.el);
  this.data = options.data;
}

const vm = new VueClone({
  el: "#app",
  data: {
    nome: "Martelo"
  }
});
