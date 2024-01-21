import { ACMode, AirCondition } from './aircondition';
import { Car } from './car.';

export class Driver {

	car: Car;
	isCarBroken: boolean = false;

	constructor(car: Car) {
		this.car = car;
	}

	canDrive(): boolean {
		return !this.car.isRunning();
	}

	drive() {
		this.car.setAC(new AirCondition(ACMode.On));
		this.car.start();
	}

	checkTemp() {
		this.car.getTemperature().subscribe(
			temp => {
				if (temp > 50)
					this.isCarBroken = true;
				else
					this.isCarBroken = false;
			}
		);
	}

	shouldGoToGarage(): boolean {
		return this.isCarBroken;
	}

}
