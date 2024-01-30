import CalculatorDisplay from "./calculatordisplay"

// 1. Write tests
// 2. Incremental coding
describe('CalculatorDisplay tests', ()=>{
    it('at start displays 0', ()=>{
        const calc = new CalculatorDisplay()
        expect(calc.getDisplay()).toBe('0')
    })

    it('pressing 1 displays 1', ()=>{
        const calc = new CalculatorDisplay()
        calc.press('1')
        expect(calc.getDisplay()).toBe('1')
    })

    it('pressing 1,2 displays 12', ()=>{
        const calc = new CalculatorDisplay()
        calc.press('1')
        calc.press('2')
        expect(calc.getDisplay()).toBe('12')
    })
})