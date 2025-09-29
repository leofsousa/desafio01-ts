import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (loanAmount: number): void => {
    if (this.validateStatus()) {
      this.balance = this.balance + loanAmount
      console.log(`Voce pegou um empréstimo de: ${loanAmount}`);
      console.log(`Seu novo saldo é: ${this.balance}`);
    }
  };
}
