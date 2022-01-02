function validaArrays(arr, num) {
	try {
		if (!arr && !num) throw new ReferenceError('Envie os parâmetros!');

		if (typeof arr !== 'object') throw new TypeError('Envie um elemento do tipo Array!');

		if (typeof num !== 'number') throw new TypeError('Envie um elemento do tipo Number!');

		if (arr.length !== num) throw new RangeError('Tamanho do array inválido!');

		return arr;
	} catch (e) {
		if (e instanceof ReferenceError) {
			console.log('Este erro é um ReferenceError!');
			console.log(e.stack);
		} else if (e instanceof TypeError) {
			console.log('Este erro é um TypeError!');
			console.log(e.stack);
		} else if (e instanceof RangeError){
			console.log('Este erro é um RangeError!');
			console.log(e.stack);
		} else {
			console.log('Outro tipo de erro aconteceu: ' + e);
			console.log(e.stack);
		}
	}
}

console.log(validaArrays([1, 2, 3], 3)); // Sem erro 
console.log(validaArrays()); // Envie os parâmetros!
console.log(validaArrays('A')); // Envie um elemento do tipo Array!
console.log(validaArrays([1, 2, 3], 'String')); // Envie um elemento do tipo Number!'
console.log(validaArrays([1, 2, 3], 0)); // Tamanho do array inválido!