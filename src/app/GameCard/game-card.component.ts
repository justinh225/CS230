import { Component, Input } from "@angular/core";

@Component ({
    selector: 'app-game-card',
    templateUrl: 'game-card.component.html',
    styleUrls: ['game-card.component.css']
})

export class GameCard {
    @Input() mainImg: string;
    @Input() title: string;
    @Input() tile1: string;
    @Input() tile2: string;
    @Input() tile3: string;
    @Input() tile4: string;
    @Input() price: number;

    constructor() {
        this.mainImg = "";
        this.title = "null";
        this.tile1 = "";
        this.tile2 = ""; 
        this.tile3 = "";
        this.tile4 = "";
        this.price = -1;
    }
}