import { Item } from "./item";
import { ItemFactory } from "./itemfactory";

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
    const storedItem = ItemFactory.getItemByName(item)
    storedItem?.update()
  }

}
