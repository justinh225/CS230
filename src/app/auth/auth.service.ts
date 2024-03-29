import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { AuthResponse } from "./authResponse";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    baseUrl: string = "https://identitytoolkit.googleapis.com/v1/accounts";
    signupEndpoint: string = "signUp";
    signinEndpoint: string = "signInWithPassword";

    constructor(private http:HttpClient) {}

    public signup(email: string, password: string) {
        const requestBody = {
            "email": email,
            "password": password,
            "returnSecureToken": true
        };

        return this.http.post<AuthResponse>(`${this.baseUrl}:${this.signupEndpoint}?key=${environment.firebase.apiKey}`
            , requestBody);
    }

    public login(email: string, password: string) {
        const requestBody = {
            "email": email,
            "password": password,
            "returnSecureToken": true
        };

        return this.http.post<AuthResponse>(`${this.baseUrl}:${this.signinEndpoint}?key=${environment.firebase.apiKey}`
            , requestBody);
    }
}