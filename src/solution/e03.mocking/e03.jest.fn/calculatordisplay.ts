export enum OperationType {
    Plus,
    Div
}

export default class CalculatorDisplay {
    display : string = "";
    lastArgument : number = 0;
    newArgument : boolean = false;
    shouldReset : boolean = true;
    lastOperation : OperationType = OperationType.Plus;
    externalDisplay: ExternalDisplay;
    hasDisplayConnected: boolean;

    constructor(exdisplay : ExternalDisplay) {
        this.externalDisplay = exdisplay
        this.hasDisplayConnected = false
    }

    press(key: string) {
        if (key === "+") {
            this.lastOperation = OperationType.Plus;
            this.lastArgument = parseInt(this.display);
            this.newArgument = true;
        } else {
            if (key === "/") {
                this.lastOperation = OperationType.Div;
                this.lastArgument = parseInt(this.display);
                this.newArgument = true;
            } else if (key === "=") {
                let currentArgument = parseInt(this.display);
                if (this.lastOperation === OperationType.Plus) {
                    this.display = (this.lastArgument + currentArgument).toString();
                }
                if (this.lastOperation === OperationType.Div && currentArgument === 0) {
                    this.display = "Division By Zero Error";
                }
                this.shouldReset = true;
            } else {
                if (this.shouldReset) {
                    this.display = "";
                    this.shouldReset = false;
                }
                if (this.newArgument) {
                    this.display = "";
                    this.newArgument = false;
                }
                this.display += key;
            }
        }
        if (this.externalDisplay.isOn()) {
            this.externalDisplay.show(this.getDisplay())
        }
    }

    getDisplay(): string {
        if (this.display === "")
            return "0";
        if (this.display.length > 5)
            return "E";
        return this.display;
    }
}