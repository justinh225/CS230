import { Injectable } from "@angular/core";
import { CardModel } from "./card-model.model";
import { AngularFireDatabase } from '@angular/fire/compat/database'

@Injectable(
    {providedIn: 'root'}
)

export class CardService {
    constructor(private db:AngularFireDatabase) {}


    getCardList() {
        return this.db.list<CardModel>("home-screen-cards").valueChanges();
    }

    addCard(card:CardModel) {
        this.db.list<CardModel>("home-screen-cards").push(card);
    }
}