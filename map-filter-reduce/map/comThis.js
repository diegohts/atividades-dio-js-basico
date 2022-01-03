const laranja = {
	valor: 2,
};

const maca = {
	valor: 3,
};

function mapArray(thisArg) {
	const array = [1, 2, 3, 4, 5];

	return array.map(function (item) {
		return item * this.valor;
	}, thisArg);
}

console.log('Maçã:', mapArray(maca));
console.log('Laranja:', mapArray(laranja));