import { Injectable, NgZone } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  isLoggedIn = false;

  constructor( private router:Router,public afs: AngularFirestore,
    public afAuth: AngularFireAuth,      public ngZone: NgZone
    ) { }

  /**
   * Login for our Contact App
   * @param user User that's login in
   * @return Observable<boolean>
   */

  /**
   * Login with real HTTP Request
   * @return Observable<any>
   */
   login(email, password) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        this.ngZone.run(() => {
          this.router.navigate(['home']);
          this.setLoggedIn(true);

        });
      }).catch((error) => {
        window.alert(error.message)
      })
  }
    
  register(email, password) {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        window.alert("registro realizado con éxito")
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  getloggedIn() {
    return this.isLoggedIn;
  }

  setLoggedIn(value: boolean) {
    this.isLoggedIn = value;
  }
}
