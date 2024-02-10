import { StoredItem } from "./storeditem";

export class Sulfuras extends StoredItem {
    update(): void {
        if (this.item.quality < 50) {
            this.increaseQuality();
          }
    }
}