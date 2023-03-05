import {Component, Input} from '@angular/core';

@Component ({
    selector: 'app-top-seller-button',
    templateUrl: 'top-sellers-button.component.html',
    styleUrls: ['top-sellers-button.component.css']
})

export class TopSellersButton {
    @Input() image: string;
    @Input() title: string;
    @Input() date: string;
    @Input() price: string;

    constructor() {
        this.image = "";
        this.title = "";
        this.date = "";
        this.price = "";
    }
}