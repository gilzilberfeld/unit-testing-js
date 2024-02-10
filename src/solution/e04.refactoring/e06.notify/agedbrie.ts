import { StoredItem } from "./storeditem";

export class AgedBrie extends StoredItem {
    update(): void {
        if (this.item.quality < 50) {
            this.increaseQuality();
          }
          this.decreaseSellIn();
          if (this.item.sellIn < 0 && this.item.quality < 50) {
            this.increaseQuality();
          }
          this.updateMessage()
       }
}