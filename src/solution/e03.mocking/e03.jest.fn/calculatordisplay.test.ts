// 3. use jest.fn on interface

import CalculatorDisplay from "./calculatordisplay";
import { ExternalDisplay } from "./externaldisplay";

describe("Jest fn", () => {
  let display: ExternalDisplay;

  beforeEach(() => {
      display = {
        isOn : jest.fn(),
        show : jest.fn()
      }
  });

  it("when external display is off, expose through property", () => {
    display.isOn.mockReturnValue(false)
    const cd = new CalculatorDisplay(display);
    expect(cd.hasDisplayConnected).toBeFalsy();
});

it("when external display is on, it shows the sent text", () => {
    display.isOn.mockReturnValue(true)
    const cd = new CalculatorDisplay(display);
    cd.press("1");
    expect(display.show).toHaveBeenCalledWith("1");
  });
});
