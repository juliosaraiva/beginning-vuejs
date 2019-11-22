export default {
    name: "DolarHoje",
    data() {
        return {
            dolarHoje: 0,
        }
    },
    template: `<p>USD: {{ dolarHoje.rates.USD }} => BRL: {{ dolarHoje.rates.BRL }}</p>`,
    methods: {
        getDolarHoje() {
            fetch("https://api.exchangeratesapi.io/latest?base=USD")
                .then(resp => resp.json())
                .then(json => this.dolarHoje = json)
        }
    },
    created() {
        this.getDolarHoje();
    }
}