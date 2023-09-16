import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { RadioService } from '../services/radio.service';
import { RadioPlayerService } from '../services/radio-player.service';
import { Radio } from '../model/radio.model';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  selectedRadio: Radio | null = null;
  isPlaying = false;

  constructor(private radioPlayerService: RadioPlayerService, private notificationService: NotificationService) {}

  ngOnInit(): void {
    // Força a atualização inicial do footer
    this.selectedRadio = this.radioPlayerService.getSelectedRadio();
    this.isPlaying = this.radioPlayerService.isRadioPlaying(this.selectedRadio);

    this.notificationService.radioUpdated$.subscribe(() => {
      this.selectedRadio = this.radioPlayerService.getSelectedRadio();
      this.isPlaying = this.radioPlayerService.isRadioPlaying(this.selectedRadio);
    });
  }

  toggleRadio() {
    if (this.selectedRadio) {
      this.radioPlayerService.toggleRadio(this.selectedRadio);
      this.isPlaying = this.radioPlayerService.isRadioPlaying(this.selectedRadio);
    }
  }
}