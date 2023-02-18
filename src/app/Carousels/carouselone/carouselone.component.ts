import { Component } from '@angular/core';
import { CardModel } from 'src/app/Card/card/card-model.model';
import { mock_list } from 'src/app/Card/card/mock_list';

@Component({
  selector: 'app-carouselone',
  templateUrl: './carouselone.component.html',
  styleUrls: ['./carouselone.component.css']
})
export class CarouseloneComponent {
  cards: CardModel [] = [];

  constructor() {
    for(var card of mock_list) {
      console.log(card);
      this.cards.push(card);
    }
  }
}
