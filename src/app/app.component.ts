import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { RadioService } from './services/radio.service';
import { RadioPlayerService } from './services/radio-player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  @ViewChild('audioPlayer') audioPlayer!: ElementRef;
  constructor(private router: Router, private radioService: RadioService, private radioPlayerService: RadioPlayerService) {}

  ngAfterViewInit(): void {
    const audioPlayer = this.audioPlayer.nativeElement as HTMLAudioElement;
    this.radioPlayerService.initialize(audioPlayer);
  }

  navigateToForm() {
    this.router.navigate(['/form']);
  }
}
