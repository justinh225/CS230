import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-tags-button',
    templateUrl: 'tags-button.component.html',
    styleUrls: ['tags-button.component.css']
})

export class TagsButton {
    @Input() tag: string;

    constructor() {
        this.tag = "";
    }
}