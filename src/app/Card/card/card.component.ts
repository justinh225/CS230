import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() image: string;
  @Input() type: string;
  @Input() color: string;
  
  constructor() {
    this.image = "";
    this.type = "null";
    this.color = ""
  }

}


