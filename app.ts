import { CompanyAccount } from "./class/CompanyAccount";
import { PeopleAccount } from "./class/PeopleAccount";
import { PromotionAccount } from "./class/PromotionAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(1, "Nath", 10);
console.log(peopleAccount);
peopleAccount.deposit(100);
const companyAccount: CompanyAccount = new CompanyAccount("DIO", 20);
companyAccount.deposit(1000);
console.log(companyAccount);

const promotionAccount: PromotionAccount = new PromotionAccount(
  2,
  "Léo",
  2,
  100
);

promotionAccount.bonusDeposit(100);
console.log(promotionAccount)
