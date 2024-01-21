import { of } from 'rxjs';
import { MockCar } from './mockcar';
import { Car } from './car.';
import { Driver  } from './driver';

describe('Driver with manual mock', () => {
  let driver: Driver;
  let mockCar: Car;

  beforeEach(() => {
    mockCar = new MockCar();
    driver = new Driver(mockCar);
  });

  it('cannot drive a running car using a derived mock', () => {
    expect(driver.canDrive()).toBeFalsy();
  });

  it('should go to garage when temperature is high with mock observables', () => {
    expect(driver.shouldGoToGarage()).toBe(false);
    driver.checkTemp();
    // all values were streamed
    expect(driver.shouldGoToGarage()).toBe(true);
  });

  it('mock temperature values to check garage logic', ()=>{
    const mockHandler = mockCar as MockCar;
    mockHandler.setTemperature(of(100));
    driver.checkTemp();
    expect(driver.shouldGoToGarage()).toBe(true);
    
    mockHandler.setTemperature(of(0));
    driver.checkTemp();
    expect(driver.shouldGoToGarage()).toBe(false);
  });

  it.skip('cannot check on method calls', () => {
    driver.canDrive();
    // we used a real object, not a spy
    expect(mockCar.isRunning).toHaveBeenCalled();
  })
});
