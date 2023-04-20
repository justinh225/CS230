import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { GameCardModel } from "./game-card.model.component";

@Injectable(
    { providedIn: 'root' }
)

export class GameCardService {
    
    constructor(private db:AngularFireDatabase) {}

    getCardList() {
        return this.db.list<GameCardModel>("game-cards").valueChanges();
    }

    addCard(card:GameCardModel) {
        this.db.list<GameCardModel>("game-cards").push(card);
    }
}