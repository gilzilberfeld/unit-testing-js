
export class AnotherCar {
    constructor() {
      throw new Error("Production problem");
    }

    static modelIsBlack(): boolean {
        throw new Error("Not painted yet");
    }
    
    isRunning(): boolean {
      throw new Error("Not yet");
    }
}