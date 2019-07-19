new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        showAlert() {
            alert("Botao clicado!")
        },
        acao(event) {
            console.log(event)
            this.valor = event.target.value
        }

    }
})