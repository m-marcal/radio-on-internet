import { Injectable } from '@angular/core';
import { Radio } from '../model/radio.model';

@Injectable({
  providedIn: 'root'
})
export class RadioService {
  radios: Radio[] = [];

  constructor() {
    for(let i = 0; i < 3; i++) {
        this.radios.push(
            { id: i, nome: 'Rádio Universitária XYZ - ' + i, descricao: 'http://radio' + i + '.com/stream.mp3', url: '' },
        )
    }
  }
}
