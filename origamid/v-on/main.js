const stock = new Vue({
  el: "#stock",
  data: {
    api: {}
  },
  computed: {
    company() {
      return this.api.companyName;
    },
    lastValue() {
      return this.api.latestPrice;
    },
    marketCap() {
      return this.api.marketCap;
    }
  },
  methods: {
    getApi(event) {
      fetch(event.toElement.href)
        .then(resp => resp.json())
        .then(json => (this.api = json));
    }
  }
});
