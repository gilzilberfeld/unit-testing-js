import { Item } from "./item";

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
    if (isElixirOrVest(item)) {
      if (item.quality > 0) {
        this.decreaseQuality(item);
      }
      this.decreaseSellIn(item);
      if (item.quality > 0 && item.sellIn < 0) {
        this.decreaseQuality(item);
      }
    }
    if (isAgedBrie(item)) {
      if (item.quality < 50) {
        this.increaseQuality(item);
      }
      this.decreaseSellIn(item);
      if (item.sellIn < 0 && item.quality < 50) {
        this.increaseQuality(item);
      }
    }
    if (isBackstage(item)) {
      if (item.quality < 50) {
        this.increaseQuality(item);
        if (item.quality < 50) {
          if (item.sellIn < 11) {
            this.increaseQuality(item);
          }
          if (item.sellIn < 6) {
            this.increaseQuality(item);
          }
        }
      }
      this.decreaseSellIn(item);
      if (item.sellIn < 0) {
        item.quality = 0;
      } 
    }
    if (isSulfuras(item)) {
      if (item.quality < 50) {
        this.increaseQuality(item);
      }
    }
  }


  private decreaseSellIn(item: Item) {
    item.sellIn = item.sellIn - 1;
  }

  private increaseQuality(item: Item) {
    item.quality = item.quality + 1;
  }

  private decreaseQuality(item: Item) {
    item.quality = item.quality - 1;
  }
}
function isElixirOrVest(item: Item) {
  return !isAgedBrie(item) && !isBackstage(item) && !isSulfuras(item);
}

function isSulfuras(item: Item) {
  return item.name === "Sulfuras, Hand of Ragnaros";
}

function isBackstage(item: Item) {
  return item.name === "Backstage passes to a TAFKAL80ETC concert";
}

function isAgedBrie(item: Item) {
  return item.name === "Aged Brie";
}
