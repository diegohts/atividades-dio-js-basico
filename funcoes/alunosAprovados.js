const alunos = [
	{
		nome: 'Diego',
		nota: 9,
		turma: '1A',
	},
	{
		nome: 'Fulano',
		nota: 6,
		turma: '1C',
	},
	{
		nome: 'Ciclano',
		nota: 4,
		turma: '2B',
	},
	{
		nome: 'Antônio',
		nota: 7,
		turma: '2A',
	},
];

function alunosAprovados(array, media = 6) {
	let aprovados = [];

	for (let i = 0; i < array.length; i++) {
		let { nota, nome } = array[i];

		if (nota >= media) aprovados.push(nome);
	}

	return aprovados;
}

console.log(alunosAprovados(alunos, 7));