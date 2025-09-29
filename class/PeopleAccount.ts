import { DioAccount } from "./DioAccount"

export class PeopleAccount extends DioAccount {
  doc_id: number

  constructor(doc_id: number, name: string, accountNumber: number){
    super(name, accountNumber)
    this.doc_id = doc_id

    const bonusDeposit = (depositAmount: number): void => {
    if (this.validateStatus()) {
      this.balance = this.balance + depositAmount + 10;
      console.log(`Voce depositou ${depositAmount}`);
      console.log(`Seu novo saldo é R${this.balance}`);
    }
  };
  }
}