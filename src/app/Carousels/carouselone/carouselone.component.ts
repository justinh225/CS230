import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { CardModel } from 'src/app/Card/card/card-model.model';
import { CardService } from 'src/app/Card/card/card.service';
import { ProfileData } from 'src/app/TopNavigation/profile-bar/profile-data.component';

@Component({
  selector: 'app-carouselone',
  templateUrl: './carouselone.component.html',
  styleUrls: ['./carouselone.component.css']
})
export class CarouseloneComponent implements OnInit {
  cards: CardModel [] = [];

  constructor(private cardService:CardService) {}

  ngOnInit(): void {
    this.cardService.getCardList().subscribe((data: CardModel[]) => {
      for(var card of data) {
        this.cards.push(card);
      }
    })
  }
}
