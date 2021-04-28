import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';
import { ACTION_CAMBIO_MENSAJE} from 'src/app/store/actions/actions.types';
import MessageState from 'src/app/store/config/messageState.interface';

@Component({
  selector: 'app-change-message',
  templateUrl: './change-message.component.html',
  styleUrls: ['./change-message.component.scss']
})
export class ChangeMessageComponent implements OnInit {
  nuevoMensaje = '';


  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
    this.storeService.getState('messageState').subscribe((state: MessageState) => {
      this.nuevoMensaje = state.mensaje;
    });
  }

  cambiarMensaje() {
    console.log('Vamos a cambiar el mensaje en el MessageState');
    this.storeService.updateState({
      type: ACTION_CAMBIO_MENSAJE,
      payload: this.nuevoMensaje
    })
  }


}
