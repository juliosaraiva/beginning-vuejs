export default {
    name: "TempoHoje",
    data() {
        return {
            tempMax: 0
        }
    },
    template: `<p>Brasília, máxima hoje: {{ tempMax }}</p>`,
    methods: {
        getTempo() {
            fetch("https://www.metaweather.com/api/location/455819/")
                .then(resp => resp.json())
                .then(json => this.tempMax = json.consolidated_weather[0].max_temp.toFixed(2))
        }
    },
    created() {
        this.getTempo();
    }
}