import { Item } from "./item";
import { StoredItem } from "./storeditem";

export class ElixirOrVest extends StoredItem {
  constructor(item: Item) {
    super(item);
  }

  update(): void {
    if (this.item.quality > 0) {
      this.decreaseQuality();
    }
    this.decreaseSellIn();
    if (this.item.quality > 0 && this.item.sellIn < 0) {
      this.decreaseQuality();
    }
    this.updateMessage();
  }
}
