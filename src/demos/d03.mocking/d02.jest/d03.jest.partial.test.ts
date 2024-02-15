import { Car } from "../car";
import { Driver } from "../driver";

describe('Driver with Jest partial mocking', () => {
  let driver: Driver;
  let realCar : Car;

  beforeEach(() => {
    realCar = new Car();
    driver = new Driver(realCar);
  });

  it('real car, mocked method for a while', () => {
    const spy = jest.spyOn(realCar, "isRunning").mockImplementation(() => true);
    expect(driver.canDrive()).toBeFalsy();
    spy.mockRestore();
    expect(()=> driver.canDrive()).toThrow('Not yet');
  });
  
  it('real car, mocked method', ()=>{
    realCar.isRunning = jest.fn(()=> true);
    expect(driver.canDrive()).toBeFalsy();
  })
  
  it('real car, method not mocked this time', ()=>{
      expect(()=> driver.canDrive()).toThrow('Not yet');
    })
});
