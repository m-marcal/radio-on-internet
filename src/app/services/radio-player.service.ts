import { Injectable } from '@angular/core';
import { Radio } from '../model/radio.model';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class RadioPlayerService {
  private audioPlayer: HTMLAudioElement | null = null;
  private selectedRadio: Radio | null = null;
  private isPlaying = false;

  constructor(private notificationService: NotificationService) {}

  initialize(audioPlayer: HTMLAudioElement) {
    this.audioPlayer = audioPlayer;
  }

  toggleRadio(radio: Radio) {
    if (this.selectedRadio === radio && this.isPlaying) {
      this.pauseRadio();
    } else {
      this.playRadio(radio);
    }

    // Send out notification for subscribed
    //  components.
    this.notificationService.notifyRadioUpdated();
  }

  private playRadio(radio: Radio) {
    if (this.audioPlayer) {
      if (this.selectedRadio) {
        this.audioPlayer.pause();
      }
      this.selectedRadio = radio;
      this.audioPlayer.src = radio.url;
      this.audioPlayer.play();
      this.isPlaying = true;
    }
  }

  pauseRadio() {
    if (this.audioPlayer) {
      this.audioPlayer.pause();
      this.isPlaying = false;
    }
  }

  isRadioPlaying(radio: Radio | null) {
    return this.selectedRadio == radio && this.isPlaying;
  }

  setSelectedRadio(radio: Radio | null) {
    this.selectedRadio = radio;
  }

  getSelectedRadio(): Radio | null {
    return this.selectedRadio;
  }
}
