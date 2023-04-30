import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";
import { AuthResponse } from "./authResponse";
import { Observable } from "rxjs";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-auth",
    templateUrl: "auth.component.html"
})
export class AuthComponent {
    public buttonClicked!: string;
    private authObservable!: Observable<AuthResponse>;
    error: boolean = false;

    constructor(private authService: AuthService) {}

    public onSubmit(data: NgForm) {
        if(this.buttonClicked === "Login") {
            this.authObservable = this.authService.login(data.value.email, data.value.password);
        } else {
            this.authObservable = this.authService.signup(data.value.email, data.value.password);
        }
        this.authObservable.subscribe(
            (data:AuthResponse) => {
                console.log(data);
            }, 
            error => console.log(error)
        );
    }
}