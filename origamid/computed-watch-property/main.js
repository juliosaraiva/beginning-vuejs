const vm = new Vue({
  el: "#app",
  data: {
    cep: "",
    endereco: ""
  },
  computed: {
    getCep() {}
  },
  watch: {
    cep(valor) {
      if (valor.length === 8) {
        fetch(`https://viacep.com.br/ws/${valor}/json/`)
          .then(resp => resp.json())
          .then(json => (this.endereco = json));
      }
    }
  }
});
