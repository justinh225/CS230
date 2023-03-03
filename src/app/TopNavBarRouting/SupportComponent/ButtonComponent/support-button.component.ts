import { Component, Input } from '@angular/core';

@Component ({
    selector: 'app-support-button',
    templateUrl: 'support-button.component.html',
    styleUrls: ['support-button.component.css']
})

export class SupportButton {
    @Input() image: string;
    @Input() game: string;

    constructor() {
        this.image = "";
        this.game = "";
    }
}