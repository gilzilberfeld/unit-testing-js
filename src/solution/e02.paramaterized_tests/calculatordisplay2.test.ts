//  2. Read from CSV file

import CalculatorDisplay from "./calculatordisplay"

    
describe('Parameterized tests', ()=>{
    let calc : CalculatorDisplay

    beforeEach(()=> {
         calc = new CalculatorDisplay()
    })

    test.each(loadFromFile())("after pressing %p should show %p", (input, expected) => {
        pressSequence(input);
        shouldDisplay(expected);
      });

      
    function pressSequence( sequence : string) {
        for (let i = 0; i < sequence.length; i++) {
            calc.press(sequence.charAt(i));
          }
    }
    function shouldDisplay(value: string) {
        expect(calc.getDisplay()).toBe(value)
    }
})

function loadFromFile(): readonly [string, string][] {
    // npm i csv
    // node-csv packagge, find example
    // build array, return it

    return [
        ["1", "1"],
        ["12", "12"],
        ["1+2", "2"],
    ]
}
