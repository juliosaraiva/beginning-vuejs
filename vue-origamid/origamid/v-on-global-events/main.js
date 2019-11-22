const stock = new Vue({
  el: "#app",
  data: {
    totalScroll: 0
  },
  methods: {
    handleScroll() {
      this.totalScroll = window.scrollY;
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  }
});
