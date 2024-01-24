import exp from "constants";
import { ACMode } from "../aircondition";
import { Car } from "../car";
import { Driver } from "../driver";

jest.mock("../car");

describe("Driver with jest module mock", () => {
  let driver: Driver;
  let mockCar: Car;

  beforeEach(() => {
    mockCar = new Car();
    driver = new Driver(mockCar);
  });

  afterEach(() => {
    Car.mockRestore();
  });

  it("getting the mock", () => {
    const carMock = Car.mock.instances[0];
    expect(carMock).toEqual(mockCar);
  });

  it("method was called", () => {
    driver.canDrive();
    const carMock = Car.mock.instances[0];

    const mockIsRunning = carMock.isRunning;
    expect(mockIsRunning.mock.calls.length).toBe(1);
  });

  it("change the behavior of a method", () => {
    const carMock = Car.mock.instances[0];
    jest.spyOn(carMock, "isRunning").mockImplementation(() => true);

    const result = driver.canDrive();
    expect(result).toBeFalsy();
  });

  it("can even check the arguments", () => {
    const carMock = Car.mock.instances[0];
    driver.drive();
    const expectedArg = { mode: ACMode.On  }
    expect(carMock.setAC).toHaveBeenCalledWith(expectedArg);
    // OR
    expect(carMock.setAC.mock.calls).toContainEqual([expectedArg]);
    // OR
    expect(carMock.setAC.mock.calls[0]).toContainEqual(expectedArg);
    // OR
    const theArg = carMock.setAC.mock.calls[0][0];
    var theMode = theArg['mode'];
    expect(theMode).toEqual(ACMode.On);
  });
});
