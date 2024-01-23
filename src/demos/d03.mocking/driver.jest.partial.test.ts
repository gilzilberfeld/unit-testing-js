import { Driver } from './driver';
import { Car } from './car';
import { ACMode } from './aircondition';

describe.skip('Driver with partial mocking', () => {
  let driver: Driver;
  let mockCar : Car;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ {provide:  Car, useClass: Car}]
    });
    driver = TestBed.inject(Driver);
    mockCar = TestBed.inject(Car);
  });

  it('cannot drive a running car', () => {
    spyOn(mockCar, 'isRunning').and.returnValue(true);
    expect(driver.canDrive()).toBeFalsy();
  });

  it('or may be it can', () => {
    spyOn(mockCar, 'isRunning').and.returnValue(false);
    expect(driver.canDrive()).toBeTruthy();
  });

  it('can now check on method calls', ()=>{
    spyOn(mockCar, 'isRunning').and.returnValue(true);
    driver.canDrive();
    expect(mockCar.isRunning).toHaveBeenCalled();
  });

  it ('can even check the arguments', ()=>{
    spyOn(mockCar,'setAC').and.stub();
    spyOn(mockCar,'start').and.stub();

    driver.drive();
    expect(mockCar.setAC).toHaveBeenCalledWith(jasmine.objectContaining({
      mode: ACMode.On
    }));
    });
});
