// 3. use jest.mock

import CalculatorDisplay from "./calculatordisplay";
import { ExternalDisplay } from "./externaldisplay";

jest.mock("./externaldisplay");

describe("Mocking with Jest", () => {
  let display: ExternalDisplay;

  beforeEach(() => {
      display = new ExternalDisplay();
  });

  afterEach(() => {
    ExternalDisplay.mockRestore();
  });

  it("when external display is off, expose through property", () => {
    jest.spyOn(display, "isOn").mockImplementation(() => false);
    const cd = new CalculatorDisplay(display);
    
    expect(cd.hasDisplayConnected).toBeFalsy();
});

it("when external display is on, it shows the sent text", () => {
    jest.spyOn(display, "isOn").mockImplementation(() => true);
    const cd = new CalculatorDisplay(display);
    cd.press("1");
    expect(display.show).toHaveBeenCalledWith("1");
  });
});
