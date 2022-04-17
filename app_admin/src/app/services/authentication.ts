import { Inject, Injectable } from '@angular/core';
import { BROWSER_STORAGE } from '../storage';
import { User } from '../models/user';
import { AuthResponse } from '../models/authresponse';
import { TripDataService } from './trip-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    @Inject(BROWSER_STORAGE) private storage: Storage,
    private tripDataService: TripDataService
  ) { }

  public getToken(): string {
    console.log("Inside AuthenticationService#getToken")
    return this.storage.getItem('travlr-token');
  }

  public saveToken(token: string): void {
    console.log("Inside AuthenticationService#saveToken")
    console.log("writing travlr-token: " + token )
    this.storage.setItem('travlr-token', token);
  }

  public login(user: User): Promise<any> {
    console.log("Inside AuthenticationService#login")
    return this.tripDataService.login(user)
      /* .then((authResp: AuthResponse) => this.saveToken(authResp.token)); */
      .then((authResp: AuthResponse) =>  { 
        console.log("Response AuthenticationService#login:\n" + authResp.token);
        //console.log("Response AuthenticationService#login:\n" + authResp);
        /* this.saveToken(authResp.token); }); */
        this.saveToken(authResp.token); });
  }

  public register(user: User): Promise<any> {
    console.log("Inside AuthenticationService#register")
    return this.tripDataService.register(user)
      .then((authResp: AuthResponse) => this.saveToken(authResp.token));
  }

  public logout(): void {
    console.log("Inside AuthenticationService#logout")
    this.storage.removeItem('travlr-token');
  }

  public isLoggedIn(): boolean {
    console.log("Inside AuthenticationService#isLoggedIn")
    const token: string = this.getToken();
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp > (Date.now() / 1000);
    } else {
      return false;
    }
  }
  
  public getCurrentUser(): User {
    console.log("Inside AuthenticationService#getCurrentUser")
    if (this.isLoggedIn()) {
      const token: string = this.getToken();
      const { email, name } =
      JSON.parse(atob(token.split('.')[1]));
      return { email, name } as User;
    }
  }
}