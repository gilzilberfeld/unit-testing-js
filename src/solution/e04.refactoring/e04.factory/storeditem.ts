import { Item } from "./item";

export class StoredItem {
    protected item : Item

    constructor(item : Item) {
        this.item = item
    }

    update() {}

    protected decreaseSellIn() {
        this.item.sellIn -=  1
    }

    protected increaseQuality() {
        this.item.quality += 1
    }

    protected decreaseQuality(){
        this.item.quality -= 1
    }
}