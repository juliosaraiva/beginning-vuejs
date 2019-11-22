const vm = new Vue({
  el: "#app",
  data: {
    github: {},
    followers: "",
    mensagem: "Essa é uma mensagem"
  },
  methods: {
    getGithub() {
      fetch("https://api.github.com/users/juliosaraiva")
        .then(resp => resp.json())
        .then(json => (this.github = json));
    }
  },
  beforeCreate() {
    console.log(this.mensagem);
  },
  created() {
    this.getGithub();
    console.log("Elemento: ", this.$el);
  },
  beforeMount() {
    this.followers = this.github;
    console.log("Elemento: ", this.$el);
    console.log("Seguidores: ", this.followers);
  },
  mounted() {
    console.log("Elemento: ", this.$el);
    console.log("Seguidores: ", this.followers);
  }
});
