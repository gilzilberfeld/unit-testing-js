//  2. Read from CSV file

import fs from 'fs'
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

function loadFromFile(): [string, string][] {

    const rows = fs.readFileSync('./src/solution/e02.paramaterized_tests/data.csv', {encoding : 'utf-8'})
    .split('\r\n')
    .map((row: string): string[] => {
        return row.split(',')
    })
    
    const retyped_rows : [string,string][] = 
        rows.map(([input,expected]) => [input,expected])
    return retyped_rows;
}
