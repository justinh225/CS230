export class GameCardModel {
    mainImg: string;
    title: string;
    tile1: string;
    tile2: string;
    tile3: string;
    tile4: string;
    price: number;

    constructor(mainImg: string, title: string, tile1: string, tile2: string, tile3: string, tile4: string, price: number) {
        this.mainImg = mainImg;
        this.title = title;
        this.tile1 = tile1;
        this.tile2 = tile2;
        this.tile3 = tile3;
        this.tile4 = tile4;
        this.price = price;
    }
}