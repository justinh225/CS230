import { HttpClient } from "@angular/common/http";
import { Component, Injectable, OnInit } from '@angular/core'
import { ProfileDataModel } from "./profile-data.model";

@Injectable()
@Component({
    selector: 'profile-data',
    templateUrl: 'profile-data.component.html'
})

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
        return this.http.get<ProfileDataModel>('https://cs230-f05ab-default-rtdb.firebaseio.com/profile.json');
    }
    showProfileData() {
        this.getProfileData().subscribe((data: ProfileDataModel) => {
            console.log(data);
            this.profileData = data;
        })
    }
}
