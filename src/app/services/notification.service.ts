import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  /*
    This service is a "bridge" that connects my
    radio-list and footer component for changes emited
    by radio-player service. 

    It's very simple. It's only responsability is to 
    provide an Obersevable so that any other component
    can subscribe and adapt itself based on changes. 

    Here, I'm using it just to notify when someone
    clicks on "toggleRadio" from radio-player service.
  */

  private radioUpdatedSource = new Subject<void>();

  radioUpdated$ = this.radioUpdatedSource.asObservable();

  notifyRadioUpdated() {
    this.radioUpdatedSource.next();
  }
}
