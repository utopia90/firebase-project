import { Injectable } from '@angular/core';


import {Vinyls} from '../models/vinyls.interface';
import {Country} from '../models/country.interface';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class FireStoreService {

  constructor(private fireStore: AngularFirestore) { }

  ObtainAllCountries():Observable<Country[]>{
   return  this.fireStore.collection('country').valueChanges().pipe(
    map(this.treatCountries)
    )
  }
  
  ObtainAllVinyls():Observable<Vinyls[]>{
    return  this.fireStore.collection('vinyls').valueChanges().pipe(
      map(this.treatVinyls)

    )}
  private treatCountries(data:any[]):Country[]{
    return data.map((country: any) => (
      {id: country.id, name: country.name}
    ));
  }

  private treatVinyls(data:any[]):Vinyls[]{
    return data.map((vinyl: any) => (
      {id: vinyl.id,
        name: vinyl.name,
        author: vinyl.author,
        country: vinyl.country,
        year: vinyl.year,
        imagen: vinyl.imagen
      }
    ));
  }
}
