import Factorial  from "./factorial";

describe('Factorial calculations ', () => {

  it('should calculate factorials correctly', () => {
    expect(Factorial.calculate(1)).toBe(1);
    expect(Factorial.calculate(3)).toBe(6);
    expect(Factorial.calculate(6)).toBe(720);
    expect(Factorial.calculate(10)).toBe(3628800);

  });

});

