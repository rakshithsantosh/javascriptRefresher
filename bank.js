class bank{
    constructor(accountNumber, balance=0, name){
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.name = name;
    }

    desposit(amount){
        if(amount >= 0) {
            this.balance += amount;  
        }
        else{
            console.log("invalid amount");
        }
    }

    withdraw(amount){
        if(amount <= this.balance){
            this.balance -= amount;
        }
        else{
            console.log("insufficient balance");
        }
    }
}