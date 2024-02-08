// 1. Add code to calculator
// 2. mock the external display manually

import CalculatorDisplay from "./calculatordisplay";
import { MockDisplay } from "./mockdisplay";

describe('Manual Mocking', ()=>{
    it('when external display is off, expose through property', ()=>{
        const display = new MockDisplay();
		display.theIsOn = false;
		const cd = new CalculatorDisplay(display);

		expect(cd.hasDisplayConnected).toBeFalsy();
    })

    it('when external display is on, it shows the sent text', ()=>{
        const display = new MockDisplay();
		display.theIsOn = true;
		const cd = new CalculatorDisplay(display);
        cd.press('1')
		expect(display.theText).toBe('1')
    })

})