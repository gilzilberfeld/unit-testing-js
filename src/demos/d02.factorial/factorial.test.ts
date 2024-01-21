import Factorial from "./factorial";

describe("Factorial calculations ", () => {
  it("should calculate factorials correctly", () => {
    const factorial = new Factorial();

    expect(factorial.calculate(1)).toBe(1);
    expect(factorial.calculate(3)).toBe(6);
    expect(factorial.calculate(6)).toBe(720);
    expect(factorial.calculate(10)).toBe(3628800);
  });

});
