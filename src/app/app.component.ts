import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './auth/auth.service';
import { openDB } from 'idb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'recetteApp';

  constructor(private authService: AuthService){}
  ngOnInit(){
    const storeName= 'firebaseLocalStorage';
    firebase.initializeApp({
      apiKey: "AIzaSyAu99Zc0_W_6iyXOmfsFFQIZB9RKi8IDXk",
      authDomain: "angular-recipe-51318.firebaseapp.com"
    });
    
    openDB('firebaseLocalStorageDb', 1)
    .then(db=>{
      console.log(db);
      db.transaction(storeName).objectStore(storeName).getAll()
        .then(valuesStored=>{
          console.log(valuesStored);
          if (valuesStored.length > 1){
            const token = valuesStored[1]['value']['stsTokenManager']['accessToken'];
            this.authService.setToken(token);
          }
          })
    
    });
  }
  
}
