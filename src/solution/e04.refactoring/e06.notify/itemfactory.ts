import { AgedBrie } from "./agedbrie";
import { Backstage } from "./backstage";
import { Conjured } from "./conjured";
import { ElixirOrVest } from "./elixirorvest";
import { Item } from "./item";
import { StoredItem } from "./storeditem";
import { Sulfuras } from "./sulfuras";

export class ItemFactory {
    static getItemByName(item : Item) : StoredItem | null {
        if (item.name.includes("Conjured"))
            return new Conjured(item);

        switch (item.name) {
            case "Aged Brie":
                return new AgedBrie(item);
            case "Backstage passes to a TAFKAL80ETC concert":
                return new Backstage(item);
            case "+5 Dexterity Vest":
            case "Elixir of the Mongoose":
                return new ElixirOrVest(item);
            case "Sulfuras, Hand of Ragnaros":
                return new Sulfuras(item);
            default:
                return null;
        }
    }
}