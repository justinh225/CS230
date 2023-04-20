import { Component, Injectable, OnInit } from '@angular/core';
import { CardModel } from 'src/app/Card/card/card-model.model';
import { GameCardService } from 'src/app/GameCard/game-card.service';
import { GameCardModel } from 'src/app/GameCard/game-card.model.component';

@Component({
  selector: 'app-carouseltwo',
  templateUrl: './carouseltwo.component.html',
  styleUrls: ['./carouseltwo.component.css']
})
export class CarouselTwo implements OnInit {
  gameCards: GameCardModel [] = [];

  constructor(private cardService:GameCardService) {}

  ngOnInit(): void {
    this.cardService.getCardList().subscribe((data: GameCardModel[]) => {
      for(var card of data) {
        this.gameCards.push(card);
        console.log(card);
      }
    })
  }
}
