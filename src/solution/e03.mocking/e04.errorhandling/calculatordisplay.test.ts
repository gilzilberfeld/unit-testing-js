// 4. test error handling

import CalculatorDisplay from "./calculatordisplay";
import { ExternalDisplay } from "./externaldisplay";

describe("Jest fn", () => {
  let display: ExternalDisplay;

  beforeEach(() => {
    display = {
      isOn: jest.fn(),
      show: jest.fn(),
    };
  });

  it("when external display is out of order, the display is E", () => {
    display.isOn.mockReturnValue(true);
    display.show.mockImplementation(()=> {
      throw new Error ("Out Of Order")
    })
    const cd = new CalculatorDisplay(display);
    cd.press("X");
    expect(cd.getDisplay()).toBe('E')
  });
});
