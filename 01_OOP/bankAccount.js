class BankAccount {
    constructor(accoutHolder,accoutNumber,balance=0){
        this.accoutHolder = this.accoutHolder;
        this.accoutNumber = this.accoutNumber;
        this.balance = balance;
    }

    deposit(amt){
       if(amt > 0){
        this.balance += amt;
        console.log(`You deposited: $${amt} and your balance is: $${this.balance}`);
       }else{
        console.log(`can't deposite nagative amount !`);
       }
    }

    withdraw(amt){
        if(amt > this.balance){
            console.log(`You can't withdraw that much !`);
        }else{
            this.balance -= amt;
            console.log(`You withdrwal amount is: $${amt} and your balance is : $${this.balance}`);
            
        }
    }
}

const bank = new BankAccount(100,0,100);
bank.deposit(100);
bank.withdraw(10);

