
//Solucao 1 (Apenas 1 palavra)
function verificaPalindromo(string){

    if(!string) return "String Inexistente!";

    return string.split("").reverse().join("") === string;
}

//Solucao 2 (Com uma ou mais palavras e com espacos)
function verificaPalindromo2(string){

    if(!string) return "String Inexistente!";

    string = string.split(" ").join("");

    for(let i = 0; i < string.length / 2; i++){
        if(string[i] !== string[string.length - 1 - i]) return "Não são Palíndromos!";
    }
    return "São Palíndromos!";
}

console.log(verificaPalindromo("ovo"));
console.log(verificaPalindromo2("a base do teto desaba"));