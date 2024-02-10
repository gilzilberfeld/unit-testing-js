import { StoredItem } from "./storeditem";

export class Backstage extends StoredItem {
  update(): void {
    if (this.item.quality < 50) {
      this.increaseQuality();
      if (this.item.quality < 50) {
        if (this.item.sellIn < 11) {
          this.increaseQuality();
        }
        if (this.item.sellIn < 6) {
          this.increaseQuality();
        }
      }
    }
    this.decreaseSellIn();
    if (this.item.sellIn < 0) {
      this.item.quality = 0;
    }
    this.updateMessage();
  }
}
