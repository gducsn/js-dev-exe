class BankAccount {

    importo = 0;
    constructor(p1) {
        this.importo = p1;
    }

    deposit(p1) {
        this.importo += p1;
    }
    withdraw(p1) {
        this.importo -= p1;
    }
    view() {
        console.log(this.importo)
    }


}



const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();