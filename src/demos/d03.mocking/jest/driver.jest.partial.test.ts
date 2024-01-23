import { exportTraceState } from "next/dist/trace";
import { Car } from "../car";
import { Driver } from "../driver";

describe('Driver with Jest partial mocking', () => {
  let driver: Driver;
  let mockCar : Car;

  beforeEach(() => {
    mockCar = new Car();
    driver = new Driver(mockCar);
  });

  afterEach(() => {

  })

  it('real car, mocked method for a while', () => {
    const spy = jest.spyOn(mockCar, "isRunning").mockImplementation(() => true);
    expect(driver.canDrive()).toBeFalsy();
    spy.mockRestore();
    expect(()=> driver.canDrive()).toThrow('Not yet');
  });

});
