export enum OperationType {
    Plus,
    Div
}

let display = "";
let lastArgument = 0;
let newArgument  = false;
let shouldReset  = true;
let lastOperation = OperationType.Plus;

export default class ServerCalculator {
    press(key: string) {
        if (key === "+") {
            lastOperation = OperationType.Plus;
            lastArgument = parseInt(display);
            newArgument = true;
        } else {
            if (key === "/") {
                lastOperation = OperationType.Div;
                lastArgument = parseInt(display);
                newArgument = true;
            } else if (key === "=") {
                let currentArgument = parseInt(display);
                if (lastOperation === OperationType.Plus) {
                    display = (lastArgument + currentArgument).toString();
                }
                if (lastOperation === OperationType.Div && currentArgument === 0) {
                    display = "Division By Zero Error";
                }
                shouldReset = true;
            } else {
                if (shouldReset) {
                    display = "";
                    shouldReset = false;
                }
                if (newArgument) {
                    display = "";
                    newArgument = false;
                }
                display += key;
            }

        }
    }

    getDisplay(): string {
        if (display === "")
            return "0";
        if (display.length > 5)
            return "E";
        return display;
    }

    reset() {
        display=""
    }
}