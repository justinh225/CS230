import { Component, OnInit } from '@angular/core';
import { CardModel } from '../Card/card/card-model.model';
import { CardService } from '../Card/card/card.service';
import { GameCardModel } from '../GameCard/game-card.model.component';
import { GameCardService } from '../GameCard/game-card.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AddGame implements OnInit {

    constructor(private ps:CardService, private ps2:GameCardService) {}

    ngOnInit(): void {}

    addCategoryCard(card: CardModel) {
      console.log("Adding...");
      this.ps.addCard(card);
    }

    addGameCard(card:GameCardModel) {
      this.ps2.addCard(card);
    }

}
