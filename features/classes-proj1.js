class BankAccount {
	constructor (balance) {
		this.balance = typeof balance === 'number' ? balance : 0; 
	}

	deposit (amount) {
		if (typeof amount === 'number') {
			this.balance += amount;
			return true;
		} else {
			console.log('amount must be a number');
			return false
		}
	}

	withdrawl (amount) {
		if (typeof amount === 'number') {
			this.balance -= amount;
			return this.balance;
		} else {
			console.log('amount must be a number');
			return false;
		}

	}

	printBalance () {
		console.log(`your balance is $${this.balance}`);
	}
}

var account = new BankAccount(100);
account.deposit(100);
account.withdrawl(10);
account.printBalance();
console.log(account.balance);

console.log('------------');
var account2 = new BankAccount('dskfjdh');
account2.deposit('mel');
account2.withdrawl(true);
account2.printBalance();
