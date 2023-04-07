import { HttpClient } from "@angular/common/http";
import { Component, Injectable, OnInit } from '@angular/core'
import { ProfileDataModel } from "./profile-data.model";

@Injectable()
@Component({
    selector: 'profile-data',
    templateUrl: 'profile-data.component.html'
})

/**
 * Includes Class Notes for implementing with an array
 */
export class ProfileData implements OnInit {
    profileData: ProfileDataModel | undefined;

    constructor(private http: HttpClient) {
    }

    ngOnInit(): void {
        console.log("Sending get request...");
        this.getProfileData();
        console.log("Registering ProfileData as subscriber");
        this.showProfileData();
    }

    getProfileData() {
        //to get an array, we can specify an array of ProfileDataModels
        //return this.http.get<ProfileDataModel []>('https://cs230-f05ab-default-rtdb.firebaseio.com/profile.json');
        return this.http.get<ProfileDataModel>('https://cs230-f05ab-default-rtdb.firebaseio.com/profile.json');
    }
    showProfileData() {
        //subscript to an array instead of ProfileDataModel
        this.getProfileData().subscribe((data: ProfileDataModel) => {
            console.log(data);
            //dont set profile data equal to the profile data, push the data to the array
            this.profileData = data;
        })
    }
}
