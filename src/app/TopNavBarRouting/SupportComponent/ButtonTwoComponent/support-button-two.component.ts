import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-support-button-two',
    templateUrl: './support-button-two.component.html',
    styleUrls: ['./support-button-two.component.css'],
})

export class SupportButtonTwo {
    @Input() text: string;

    constructor() {
        this.text = "";
    }
}