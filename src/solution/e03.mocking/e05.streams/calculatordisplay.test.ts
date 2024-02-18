// 4. test stream of observable

import { DisplayStatus, PlasmaScreen } from "./plasmascreen";
import CalculatorDisplay from "./calculatordisplay";
import { of } from "rxjs";

describe("Streams", () => {

  beforeEach(() => {
    PlasmaScreen.show = jest.fn();
  });
  
  it("Plasma Screen only called once, and with the full set", () => {
    const cd = new CalculatorDisplay();
    PlasmaScreen.getStatus = jest.fn(() => of(DisplayStatus.Off));
    cd.press("1");
    expect(PlasmaScreen.show).not.toHaveBeenCalled()
    PlasmaScreen.getStatus = jest.fn(() => of(DisplayStatus.Off));
    cd.press("2");
    expect(PlasmaScreen.show).not.toHaveBeenCalled()
    PlasmaScreen.getStatus = jest.fn(() => of( DisplayStatus.On));
    cd.press("3");
    expect(PlasmaScreen.show).toHaveBeenCalledTimes(1)
    expect(PlasmaScreen.show).toHaveBeenCalledWith("123")
  });
});

