import { ExternalDisplay } from "./externaldisplay"

export class MockDisplay implements ExternalDisplay {
    theIsOn : boolean = false
    theText : string = ""

    show(text: string): void {
        this.theText = text
    }

    isOn(): boolean {
        return this.theIsOn;
    }

}