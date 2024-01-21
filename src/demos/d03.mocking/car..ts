import { Observable } from "rxjs";
import { AirCondition } from "./aircondition";

export class Car {
  protected temperature: Observable<number>;

  getTemperature() : Observable<number> {
    return this.temperature;
  }
  
  isRunning(): boolean {
    throw new Error("Not yet");
  }

  setAC(ac: AirCondition) {
    throw new Error("Not yet");
  }

  start() {
    throw new Error("Not yet");
  }
}
