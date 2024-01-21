import { Observable, of } from "rxjs";
import { Car } from "./car.";


export class MockCar extends Car {

    constructor() {
        super();
        this.temperature = of(40, 50, 60);
    }

    isRunning(): boolean {
        return true;
    }

    setTemperature(tempStream : Observable<number>) {
        this.temperature = tempStream
    }


}
