import { ExternalDisplay } from "./externaldisplay"

export class MockDisplay extends ExternalDisplay {
    theIsOn : boolean = false
    theText : string = ""

    show(text: string): void {
        this.theText = text
    }

    isOn(): boolean {
        return this.theIsOn;
    }

}