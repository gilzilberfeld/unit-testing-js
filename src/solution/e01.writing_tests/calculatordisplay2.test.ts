import CalculatorDisplay from "./calculatordisplay";

// 3. Refactor resrs
describe("Refactored tests", () => {
  let calc: CalculatorDisplay;

  beforeEach(() => {
    calc = new CalculatorDisplay();
  });

  it("at start displays 0", () => {
    expect(calc.getDisplay()).toBe("0");
  });

  it("pressing 1 displays 1", () => {
    calc.press("1");
    shouldDisplay("1");
  });

  it("pressing 1,2 displays 12", () => {
    pressSequence("12");
    expect(calc.getDisplay()).toBe("12");
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
