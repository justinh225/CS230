import { Component, OnInit } from '@angular/core';
import { CardModel } from '../Card/card/card-model.model';
import { CardService } from '../Card/card/card.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGame implements OnInit {

    constructor(private ps:CardService) {}

    ngOnInit(): void {

    }

    addGame(card: CardModel) {
      console.log("Adding...");
      this.ps.addCard(card);
    }

}
