lista = [
	{
		preco: 2,
		nome: 'maçã',
	},
	{
		preco: 30,
		nome: 'roupa',
	},
	{
		preco: 25,
		nome: 'carne',
	},
];

saldo = 100;

/*
function calculaSaldo(saldo, lista) {
	if (!saldo || !lista || !lista.length) return 'Envie todos os parâmetros';

	const saldoFinal = lista.reduce((ant, item) => ant - item.preco, saldo);

	return `O saldo final será de ${saldoFinal} reais`;
}
*/

function calculaSaldo(saldo, lista) {
	if (!saldo || !lista || !lista.length) return 'Envie todos os parâmetros';

    const saldoFinal = lista.reduce(function(ant, item, indice){
        console.log('rodada', indice + 1);
        console.log({ ant });
        console.log({ item });
        return ant - item.preco;
    }, saldo);

    return `O saldo final será de ${saldoFinal} reais`;
}   

console.log(calculaSaldo(saldo, lista));