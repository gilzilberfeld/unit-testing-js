export enum ACMode {
  On,
  Off,
}

export class AirCondition {
  protected mode: ACMode;

  constructor(mode: ACMode) {
    this.mode = mode;
  }

  getMode(): ACMode {
    return this.mode;
  }
}
