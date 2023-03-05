import { Component } from '@angular/core';
import { TopSellersButton } from './TopSellersButtonComponent/top-sellers-button.component';
import { mock_list } from './TopSellersButtonComponent/top_sellers_mock_list';

@Component ({
    selector: 'app-top-sellers',
    templateUrl: 'top-sellers.component.html',
    styleUrls: ['top-sellers.component.css']
})

export class TopSellers {
    buttons: TopSellersButton [] = [];

    constructor() {
        for(var button of mock_list) {
            console.log(button);
            this.buttons.push(button);
        }
    }
}