import { AnotherCar } from "../anothercar";
import { AnotherDriver } from "../anotherdriver";

jest.mock('../anothercar')

describe('AnotherDriver with auto manual mock', () => {
    let driver: AnotherDriver;
    let mockCar: AnotherCar;
  
    it('future auto manual mock', () => {
      driver = new AnotherDriver();

      const carMock = driver.getCar();

      expect(carMock.isRunning).toBeTruthy()
      expect(driver.canDrive()).toBeFalsy();
    });
  
});