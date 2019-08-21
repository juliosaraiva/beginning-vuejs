import DolarHoje from './DolarHoje.js';

export default {
    name: "MarketHoje",
    data() {
        return {
            appleToday: {}
        }
    },
    components: {
        DolarHoje
    },
    template: `
        <div>
            <p>{{ appleToday.companyName }}: {{ appleToday.primaryExchange }} - $ {{ appleToday.latestPrice }}</p>
            <dolar-hoje></dolar-hoje>
        </div>
        `,
    methods: {
        getAppleAcao() {
            fetch("https://cloud.iexapis.com/stable/stock/aapl/quote/?token=pk_adcd85923cdc448abd4e01dde11227fd")
                .then(resp => resp.json())
                .then(json => this.appleToday = json)

        }
    },
    created() {
        this.getAppleAcao();
    }
}