export default class CreditCard {
  expirationDate: Date;

  constructor(expirationDate: Date) {
    this.expirationDate = expirationDate;
  }

  isExpired(): boolean {
    const today = new Date();

    if (today < this.expirationDate) 
      return true;
    else 
      return false;
  }
}
