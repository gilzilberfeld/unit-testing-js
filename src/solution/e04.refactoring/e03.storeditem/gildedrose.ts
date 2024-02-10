import { AgedBrie } from "./agedbrie";
import { Backstage } from "./backstage";
import { ElixirOrVest } from "./elixirorvest";
import { Item } from "./item";
import { StoredItem } from "./storeditem";
import { Sulfuras } from "./sulfuras";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      this.updateItem(this.items[i]);
    }
    return this.items;
  }

  private updateItem(item: Item) {
    let storedItem: StoredItem;
    switch (item.name) {
      case "Elixir of the Mongoose":
      case "+5 Dexterity Vest":
        storedItem = new ElixirOrVest(item);
        storedItem.update();
        break;
      case "Aged Brie":
        storedItem = new AgedBrie(item);
        storedItem.update();
        break;
      case "Backstage passes to a TAFKAL80ETC concert":
        storedItem = new Backstage(item);
        storedItem.update();
        break;
      case "Sulfuras, Hand of Ragnaros":
        storedItem = new Sulfuras(item);
        storedItem.update();
    }
  }

}
