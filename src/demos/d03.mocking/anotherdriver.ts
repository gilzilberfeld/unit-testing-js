import { AnotherCar } from "./anothercar";

export class AnotherDriver {

	car: AnotherCar;

	constructor() {
		this.car = new AnotherCar();
	}

    getCar() {
        return this.car;
    }
    
	canDrive(): boolean {
		return !this.car.isRunning();
	}
}