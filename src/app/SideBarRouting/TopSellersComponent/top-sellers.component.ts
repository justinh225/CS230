import { Component } from '@angular/core';
import { TopSellersButton } from './TopSellersButtonComponent/top-sellers-button.component';
import { mock_list } from './TopSellersButtonComponent/top_sellers_mock_list';
import { narrow_price_mock_list } from './TopSellersSideButtonComponent/side-button-mock-list';
import { narrow_tag_mock_list } from './TopSellersSideButtonComponent/side-button-mock-list-tag';
import { TopSellersSideButton } from './TopSellersSideButtonComponent/side-button.component';

@Component ({
    selector: 'app-top-sellers',
    templateUrl: 'top-sellers.component.html',
    styleUrls: ['top-sellers.component.css']
})

export class TopSellers {
    buttons: TopSellersButton [] = [];
    price: TopSellersSideButton [] = [];
    tag: TopSellersSideButton [] = [];

    constructor() {
        for(var button of mock_list) {
            console.log(button);
            this.buttons.push(button);
        }
        for(var item of narrow_price_mock_list) {
            console.log(item);
           this.price.push(item);
        }
        for(var item2 of narrow_tag_mock_list) {
            console.log(item2);
           this.price.push(item2);
        }
    }
}