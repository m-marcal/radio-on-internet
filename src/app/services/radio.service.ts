import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RadioService {
  radios: { name: string; streamUrl: string; isPlaying: boolean }[] = [];

  constructor() {
    for(let i = 0; i < 100; i++) {
        this.radios.push(
            { name: 'Rádio ' + i, streamUrl: 'http://radio' + i + '.com/stream.mp3', isPlaying: false },
        )
    }
  }
}
