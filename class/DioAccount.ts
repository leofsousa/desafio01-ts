export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  balance: number = 0;
  private status: boolean = true;
  private depositAmount: number = 0;
  private withdrawAmount: number = 0;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName = (name: string): void => {
    this.name = name;
    console.log("Nome alterado com sucesso!");
  };

  getName = (): string => {
    return this.name;
  };

  deposit = (depositAmount: number): void => {
    if (this.validateStatus()) {
      this.balance = this.balance + depositAmount;
      console.log(`Voce depositou ${depositAmount}`);
      console.log(`Seu novo saldo é ${this.balance}`);
    }
  };

  withdraw = (withdrawAmount: number): void => {
    if (this.validateStatus() && this.balance > withdrawAmount) {
      this.balance = this.balance - withdrawAmount;
      console.log(`Voce sacou R${withdrawAmount}`);
      console.log(`Seu novo saldo é R${this.balance}`);
    }
  };

  getBalance = (): void => {
    console.log(this.balance);
  };

  public validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
