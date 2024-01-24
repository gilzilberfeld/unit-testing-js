import CalculatorDisplay from "./calculatordisplay";

class TestLogger {
  log = "";
  append(key: string, display: string) {
    const entry = "Pressed " + key + ", Display shows: " + display + "\n";
    this.log = this.log.concat(entry);
  }
}

describe("CalculatorDisplay snapshot tests ", () => {
  let cd: CalculatorDisplay;
  let logger: TestLogger;

  beforeEach(() => {
    cd = new CalculatorDisplay();
    logger = new TestLogger();
  });

  it.skip("simple snapshot", () => {
    cd.press("1");
    expect(cd.getDisplay()).toMatchSnapshot();
  });

  it.skip("more complex operation", () => {
    pressSequence("1+2=");
    expect(logger.log).toMatchSnapshot();
  });

  function pressSequence(keys: string) {
    for (let i = 0; i < keys.length; i++) {
      const key = keys.charAt(i);
      cd.press(key);
      logger.append(key, cd.getDisplay());
    }
  }
});
