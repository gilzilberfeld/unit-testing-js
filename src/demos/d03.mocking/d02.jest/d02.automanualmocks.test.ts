import exp from "constants";
import { AnotherCar } from "../anothercar";
import { AnotherDriver } from "../anotherdriver";

jest.mock('../anothercar')

describe('AnotherDriver with auto manual mock', () => {
    let driver: AnotherDriver;
  
    it('future auto manual mock', () => {
      driver = new AnotherDriver();

      const carMock = driver.getCar();

      expect(carMock.isRunning).toBeTruthy()
      expect(driver.canDrive()).toBeFalsy();
    });
  
    it('static method not on the manual mock', ()=> {
      driver = new AnotherDriver();
      const mockStatic = jest.fn();
      mockStatic.mockReturnValue(true);
      AnotherCar.modelIsBlack = mockStatic;

      expect(driver.isCarBlack()).toBeTruthy();

    })
});