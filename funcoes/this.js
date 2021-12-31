function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Amelia',
	idade: 23,
};

const pessoa2 = {
	nome: 'Márcia',
	idade: 20,
};

const pessoa3 = {
	nome: 'Jonas',
	idade: 13,
};

const cachorro = {
	nome: 'Scooby',
	idade: 2,
	raca: 'Vira-Lata',
};

console.log(calculaIdade.call(pessoa3, 40)); 
console.log(calculaIdade.call(cachorro, 8)); 
console.log(calculaIdade.apply(pessoa2, [24]));