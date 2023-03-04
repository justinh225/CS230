import { Component } from '@angular/core';
import { TagsButton } from './TagsButtonComponent/tags-button.component';
import { tags_mock_list } from './TagsButtonComponent/tags_mock_list';

@Component ({
    selector: 'app-tags',
    templateUrl: 'tags.component.html',
    styleUrls: ['tags.component.css']
})

export class Tags {
    tagButtons: TagsButton [] = [];

    constructor() {
        for(var tagButtons of tags_mock_list) {
            console.log(tagButtons);
            this.tagButtons.push(tagButtons);
        }
    }

}