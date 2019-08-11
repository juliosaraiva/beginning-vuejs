const vm = new Vue({
  el: "#app",
  created: function() {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(resp => resp.json())
      .then(json => (this.countries = json));
  },
  data: {
    countries: "",
    selectedCountry: "",
    country: ""
  },
  watch: {
    selectedCountry(valor) {
      this.country = this.countries.find(country => {
        if (country.name === valor) {
          return country.name;
        }
      });
    }
  }
});
