class ContaBancaria {
	constructor(agencia, numero, tipo) {
		this.agencia = agencia;
		this.numero = numero;
		this.tipo = tipo;
		this._saldo = 0;
	}

    set saldo(valor) {
		this._saldo = valor;
	}

	get saldo() {
		return this._saldo;
	}

	sacar(valor) {
		if (valor > this._saldo) {
			return console.log('Saque negado, saldo insuficiente!');
		}

		this._saldo = this._saldo - valor;
		return this._saldo;
	}

	depositar(valor) {
		this._saldo = this._saldo + valor;
		return this._saldo;
	}
}

class ContaCorrente extends ContaBancaria {
	constructor(agencia, numero, cartaoCredito) {
		super(agencia, numero);
		this.tipo = 'corrente';
		this._cartaoCredito = cartaoCredito;
	}

	set cartaoCredito(valor) {
		this._cartaoCredito = valor;
	}

	get cartaoCredito() {
		return this._cartaoCredito;
	}
}

class ContaPoupanca extends ContaBancaria {
	constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'poupança';
	}
}

class ContaUniversitaria extends ContaBancaria {
	constructor(agencia, numero) {
		super(agencia, numero);
		this.tipo = 'universitária';
	}

	sacar(valor) {
		if (valor > 500 || valor > this.saldo) {
			return console.log('Operação negada!');
		}

		this._saldo = this._saldo - valor;
		return this._saldo;
	}
}

const minhaConta = new ContaCorrente(1, 211, true);
console.log(minhaConta);
const contaUni = new ContaUniversitaria(2, 333);
console.log(contaUni);

minhaConta.depositar(1000);
console.log(minhaConta);
minhaConta.sacar(500);
console.log(minhaConta);

contaUni.sacar(600);
contaUni.depositar(300);
console.log(contaUni);
contaUni.sacar(200);
console.log(contaUni);
