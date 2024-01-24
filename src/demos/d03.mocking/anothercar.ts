
export class AnotherCar {
    static modelIsBlack(): boolean {
        throw new Error("Not Painted yet");
    }
    
    isRunning(): boolean {
      throw new Error("Not yet");
    }
}