import { Observable } from "rxjs";

export enum DisplayStatus{
    On,
    Off
}
export class PlasmaScreen
{
    static currentStatus : Observable<DisplayStatus>

    static  getStatus() : Observable<DisplayStatus> {
        return this.currentStatus;
      }
    
    static show(text: string) {
        throw new Error("Not Connected");
    }
}