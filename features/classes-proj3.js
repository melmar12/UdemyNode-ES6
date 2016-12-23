class BankAccount {
	constructor (balance) {
		this.balance = typeof balance === 'number' ? balance : 0; 
	}
	set balance (val) {
		this._balance = val;
		this.balanceUpdatedAt = new Date();
	}
	get balance () {
		return this._balance;
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
		console.log(`your balance is $${this.balance}. Last update at ${this.balanceUpdatedAt}`);
	}
}
class SavingsAccount extends BankAccount {
	withdrawl () {
		console.log('You are not able to remove funds from your savings account.');
	}
	deposit (amount) {
		if (super.deposit(amount)) {
			console.log(`congrats on making a new deposit of ${this.balance}! :D`);
		}
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

console.log('------------');
var account = new SavingsAccount(500);
account.deposit(600);
account.withdrawl(100);
account.printBalance();
console.log(account.balance);