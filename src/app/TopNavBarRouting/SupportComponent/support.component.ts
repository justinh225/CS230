import { Component } from '@angular/core';
import { mock_list } from './ButtonComponent/mock_list';
import { mock_list_two } from './ButtonTwoComponent/mock_list_two';
import { SupportButton } from './ButtonComponent/support-button.component';
import { SupportButtonTwo } from './ButtonTwoComponent/support-button-two.component';

@Component ({
    selector: 'app-support',
    templateUrl: 'support.component.html',
    styleUrls: ['support.component.css']
})

export class Support {
    buttons: SupportButton [] = [];
    buttonsTwo: SupportButtonTwo [] = [];

    constructor() {
        for(var button of mock_list) {
            console.log(button);
            this.buttons.push(button);
        }
        
        for(var buttonTwo of mock_list_two) {
            console.log(buttonTwo);
            this.buttonsTwo.push(buttonTwo);
        }
    }

}