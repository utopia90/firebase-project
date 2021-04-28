import { Component, OnInit } from '@angular/core';
import {Vinyls} from 'src/app/models/vinyls.interface';
import { Country } from 'src/app/models/country.interface';
import { FireStoreService } from 'src/app/services/fire-store.service';
import { StoreService } from 'src/app/services/store.service';
import MessageState from 'src/app/store/config/messageState.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  countriesList: Country[] = [];
  vinylsList: Vinyls[] = [];
  mensaje: string = '';


  constructor(private firestoreService: FireStoreService, private storeService: StoreService) { }

  ngOnInit(): void {

    this.storeService.getState('messageState').subscribe((state: MessageState) => {
      this.mensaje = state.mensaje;
    });

    this.firestoreService.ObtainAllCountries()
      .subscribe((countries: Country[]) => {
        this.countriesList = countries;
        console.table(this.countriesList); // comprobamos que nos han venido bien
      });

      this.firestoreService.ObtainAllVinyls()
      .subscribe((vinyls: Vinyls[]) => {
        this.vinylsList = vinyls;
        console.table(this.vinylsList); // comprobamos que nos han venido bien
      });

  }

}
