const desafio = new Vue({
	el: '#desafio',
	data: {
		seen: true,
		array: ['Pedro', 'Bia', 'Ana', 'Rebeca'],
		livro: {
			titulo: 'O Senhor dos Anéis',
			autor: 'J.R.R. Tolkiens',
			volume: '3'
		},
		aluno: {
			id: 10,
			nome: 'Maria',
			notas: [7.67, 8.33, 6.98, 9.21]
		},
		languages: ['Vue.JS', 'HTML', 'CSS', 'Node.JS'],
	},
});
