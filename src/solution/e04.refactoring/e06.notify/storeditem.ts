import { Item } from "./item";

export class StoredItem {
    protected item : Item
    message = ""

    constructor(item : Item) {
        this.item = item
    }

    update() {}

    protected updateMessage()
    {
        this.message = `${this.item.name} Updated - Quality: ${this.item.quality}, SellIn: ${this.item.sellIn}`
    }
    
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