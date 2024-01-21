import Factorial from "./factorial";

describe("Factorial fixture ", () => {
 let fact: Factorial;

  beforeEach(() => {
   fact = new Factorial();
  });

  test("should calculate factorials correctly", () => {
    expect(fact.calculate(1)).toBe(1);
    expect(fact.calculate(3)).toBe(6);
    expect(fact.calculate(6)).toBe(720);
    
  });

  it.skip('should skip because not implemented', ()=> {
    expect(fact.calculate(-2)).toBe(0);
  })

  it('should calculate for big numbers', ()=> {
    expect(fact.calculate(10)).toBe(3628800);
  })
});
