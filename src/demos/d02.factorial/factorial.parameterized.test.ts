import Factorial from "./factorial";

describe("Factorial data-driven] ", () => {
  let fact: Factorial;

  beforeEach(() => {
    fact = new Factorial();
  });

  test.each([
    [1, 1],
    [3, 6],
    [6, 720],
  ])("should calculate for %p with expected %p", (input, expected) => {
    expect(fact.calculate(input)).toBe(expected);
  });

  test.each`
  input   | expected
  ${1}    | ${1}
  ${3}    | ${6}
  ${6}    | ${720}
  `("should calculate for $input with the expected $expected ", ({input, expected}) => {
    expect(fact.calculate(input)).toBe(expected);
  });
});
