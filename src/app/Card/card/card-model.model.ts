export class CardModel {
    image: string;
    type: string;
    color: string;

    constructor(image: string, type: string, color: string) {
        this.image = image;
        this.type = type;
        this.color = color;
    }
}