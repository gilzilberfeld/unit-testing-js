//  1. Add data-driven / parameterized tests

import CalculatorDisplay from "./calculatordisplay";

describe("Parameterized tests", () => {
  let calc: CalculatorDisplay;

  beforeEach(() => {
    calc = new CalculatorDisplay();
  });

  it("at start displays 0", () => {
    expect(calc.getDisplay()).toBe("0");
  });

  test.each([
    ["1", "1"],
    ["12", "12"],
    ["12+", "12"],
  ])("after pressing %p should show %p", (input, expected) => {
    pressSequence(input);
    shouldDisplay(expected);
  });

  test.each([
    ["1", "1"],
    ["12", "12"],
    ["12+", "12"],
  ])("after pressing %p should show %p", (input, expected) => {
    pressSequence(input);
    shouldDisplay(expected);
  });

  test.each`
    input | expected
  ${'1'} | ${'1'}
  ${'12'} | ${'12'}
  ${'12+'} | ${'12'}
  `("after pressing %input should show %expected", ({input, expected}) => {
    pressSequence(input);
    shouldDisplay(expected);
  });

  function pressSequence(sequence: string) {
    for (let i = 0; i < sequence.length; i++) {
      calc.press(sequence.charAt(i));
    }
  }
  function shouldDisplay(value: string) {
    expect(calc.getDisplay()).toBe(value);
  }
});
