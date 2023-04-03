import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { CardModel } from 'src/app/Card/card/card-model.model';
import { ProfileData } from 'src/app/TopNavigation/profile-bar/profile-data.component';

@Component({
  selector: 'app-carouselone',
  templateUrl: './carouselone.component.html',
  styleUrls: ['./carouselone.component.css']
})
export class CarouseloneComponent implements OnInit {
  cards: CardModel [] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log("Sending get request...");
    this.getProfileData();
    console.log("Registering ProfileData as subscriber");
    this.showProfileData();
  }

  getProfileData() {
    return this.http.get<CardModel[]>('https://cs230-f05ab-default-rtdb.firebaseio.com/home-screen-cards.json');
  }

  showProfileData() {
    this.getProfileData().subscribe((data: CardModel[]) => {
      for (var card of data) {
        console.log(card);
        this.cards.push(card);
      }
    })
  }
}
