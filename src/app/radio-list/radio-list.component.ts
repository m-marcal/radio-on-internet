import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RadioService } from '../services/radio.service';

@Component({
  selector: 'app-radio-list',
  templateUrl: './radio-list.component.html',
  styleUrls: ['./radio-list.component.css']
})
export class RadioListComponent implements OnInit {

  // Método para emitir o objeto selecionado
  selectRadio(radio: any) {
    window.alert('Radio: ' + radio.name  + 'selecionada.');
  }

  radios: { name: string; streamUrl: string; isPlaying: boolean }[] = [];

  constructor(private radioService: RadioService) {}

  ngOnInit(): void {
    this.radios = this.radioService.radios;
  }

}
