function substituiPares(array){

    if(!array || !array.length) return -1;

    for(let i = 0; i < array.length; i++){
        if(array[i] === 0) {
            console.log("Você já é zero!");
        } else if(array[i] % 2 == 0) {
            console.log(`Substituindo ${array[i]} por 0...`);
            array[i] = 0;
        }
    }

    return array;
}

let arrayNumeros = [1,3,4,7,10,23,33,80,90,99];
console.log(substituiPares(arrayNumeros));