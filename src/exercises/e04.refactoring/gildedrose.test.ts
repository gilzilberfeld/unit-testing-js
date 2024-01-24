import { GildedRose } from "./gildedrose";
import { Item } from "./item";

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
  ];

  function printItems(): string {
    let itemLog: string = "name, sellIn, quality\n";
    for (let item of items) {
      itemLog += item.toString();
    }
    itemLog += "\n";

    return itemLog;
  }

  it.skip("first update", () => {
    let log = "Before Update\n";
    log += printItems();
    new GildedRose(items).updateQuality();
    log += "After Update\n";
    log += printItems();
    expect(log).toMatchSnapshot();
  });
});
