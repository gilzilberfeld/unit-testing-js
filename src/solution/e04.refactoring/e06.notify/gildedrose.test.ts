import { GildedRose } from "./gildedrose";
import { Item } from "./item";
import { MockNotifier } from "./mocknotifier";

describe("Gilded Rose", () => {
  const items = [
    new Item("+5 Dexterity Vest", 10, 20), //
    new Item("Aged Brie", 2, 0), //
    new Item("Elixir of the Mongoose", 5, 7), //
    new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
    new Item("Sulfuras, Hand of Ragnaros", -1, 80),
    new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
    new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
    new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
    new Item("Conjured Mana Cake", 3, 6),
  ];

  function printItems(): string {
    let itemLog: string = "name, sellIn, quality\n";
    for (let item of items) {
      itemLog += item.toString();
    }
    itemLog += "\n";

    return itemLog;
  }

  it("30 days of shopping", () => {
    const notifier = new MockNotifier();
    const gildedRose = new GildedRose(items, notifier);
    let log = "";

    for (let day = 0; day < 30; day++) {
      log += "Day " + day + "\n";
      log += printItems();
      gildedRose.updateQuality();
      log += "\n";
    }
    expect(log).toMatchSnapshot();
  });

  it("30 days of notifications", () => {
    const notifier = new MockNotifier();
    const gildedRose = new GildedRose(items, notifier);

    for (let day = 0; day < 30; day++) {
      gildedRose.updateQuality();
    }

    expect(notifier.notification_log).toMatchSnapshot();
  });
});
