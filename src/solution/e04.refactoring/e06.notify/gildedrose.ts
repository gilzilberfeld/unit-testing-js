import { Item } from "./item";
import { ItemFactory } from "./itemfactory";
import { NotifyService } from "./notify";

export class GildedRose {
  items: Array<Item>;
  notifier: NotifyService;

  constructor(items = [] as Array<Item>, notifier: NotifyService) {
    this.items = items;
    this.notifier = notifier;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      this.updateItem(this.items[i]);
    }
    return this.items;
  }

  private updateItem(item: Item) {
    const storedItem = ItemFactory.getItemByName(item);
    storedItem?.update();
    let notification = "";
    if (storedItem?.message != null) notification = storedItem.message;
    this.notifier?.notifyTownCrier(notification);
  }
}
