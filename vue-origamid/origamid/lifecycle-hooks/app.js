const vm = new Vue({
  el: "#app",
  data: {
    github: {},
    contador: 0
  },
  watch: {},
  methods: {
    getGithub() {
      fetch("https://api.github.com/users/juliosaraiva")
        .then(resp => resp.json())
        .then(json => (this.github = json));
    },
    count() {
      this.contador++;
    }
  },
  created() {
    this.getGithub();
  },
  updated() {
    document.title = this.contador;
  }
});
