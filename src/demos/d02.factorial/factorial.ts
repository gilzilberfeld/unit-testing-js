export default class Factorial {
  calculate(theNumber: number): number {
    if (theNumber <= 1) return 1;
    else return this.calculate(theNumber - 1) * theNumber;
  }
}
