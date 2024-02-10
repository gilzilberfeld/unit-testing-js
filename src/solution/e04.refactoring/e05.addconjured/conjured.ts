import { StoredItem } from "./storeditem";

export class Conjured extends StoredItem {
  update(): void {
    if (this.item.quality > 0) {
      this.decreaseQuality();
      this.decreaseQuality();
    }
    this.decreaseSellIn();
    if (this.item.sellIn < 0) {
      this.item.quality = 0;
    }
  }
}
