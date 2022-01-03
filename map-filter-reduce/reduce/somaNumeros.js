/*
function somaNumeros(arr) {
	if (!arr || !arr.length) return;
	const soma = arr.reduce((prev, curr) => prev + curr);

	return soma;
}
*/
function somaNumeros(arr){
    if (!arr || !arr.length) return;
    return arr.reduce( function (prev,curr){
        console.log({ prev });
        console.log({ curr });
        return prev + curr; 
    });
}

console.log(somaNumeros([1, 1, 1, 3]));