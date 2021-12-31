function adicao(numero1, numero2){
    alert(`${numero1} + ${numero2} = ${numero1+numero2}`);
    novaOperacao();
}

function subtracao(numero1, numero2){
    alert(`${numero1} - ${numero2} = ${numero1-numero2}`);
    novaOperacao();
}

function multiplicacao(numero1, numero2){
    alert(`${numero1} * ${numero2} = ${numero1*numero2}`);
    novaOperacao();
}

function divisaoReal(numero1, numero2){
    alert(`${numero1} / ${numero2} = ${numero1/numero2}`);
    novaOperacao();
}

function divisaoInteira(numero1, numero2){
    alert(`O resto da divisão entre ${numero1} e ${numero2} = ${numero1%numero2}`);
    novaOperacao();
}

function potenciacao(numero1, numero2){
    alert(`${numero1} elevado a ${numero2} = ${numero1**numero2}`);
    novaOperacao();
}

function calculadora(){

    let valor1 = Number(prompt("Digite o primeiro valor: "));
    let valor2 = Number(prompt("Digite o segundo valor: "));

    const operacao = prompt("Escolha a operação que deseja realizar com esses 2 números:\n" 
    +"  1 - Adição [+] \n  2 - Subtração [-] \n  3 - Multiplicação [*] \n  4 - Divisão Real[/] \n"
    +"  5 - Divisão Inteira [%] \n  6 - Potenciação [**]");

    switch(operacao){
        case '1':
            adicao(valor1, valor2);
            break;
        case '2':
            subtracao(valor1, valor2);
            break;
        case '3':
            multiplicacao(valor1, valor2);
            break;
        case '4':
            divisaoReal(valor1, valor2);
            break;
        case '5':
            divisaoInteira(valor1, valor2);
            break;
        case '6':
            potenciacao(valor1, valor2);
            break;
        default:
            alert(`Você digitou ${operacao}. Uma opção Inválida!`);
            calculadora();
            break;    
    }    
}

function novaOperacao(){
    let opcao = prompt("Deseja realizar outra operacao?\n 1 - SIM\n 2 - NÃO");
    if(opcao == '1'){
        calculadora();
    } else if(opcao = '2'){
        alert("Obrigado! Volte Sempre :)");
    } else {
        alert("Opção Inválida!");
        novaOperacao();
    }
}

calculadora();


