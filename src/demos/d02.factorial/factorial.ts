export default class Factorial {
  static calculate(theNumber: number): number {
    if (theNumber <= 1) return 1;
    else return Factorial.calculate(theNumber - 1) * theNumber;
  }
}
