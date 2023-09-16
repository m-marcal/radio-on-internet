import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router'; 
import { RadioService } from '../services/radio.service';
import { Radio } from '../model/radio.model';
import { RadioPlayerService } from '../services/radio-player.service';


@Component({
  selector: 'app-radio-list',
  templateUrl: './radio-list.component.html',
  styleUrls: ['./radio-list.component.css']
})
export class RadioListComponent implements OnInit {
  
  radios: Radio[] = [];

  constructor(
    private radioService: RadioService, 
    private router: Router, 
    private radioPlayerService: RadioPlayerService
  ) {}

  ngOnInit(): void {
    this.radioService.getAllRadios().subscribe(
      (radios: Radio[]) => {
        this.radios = radios;
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }

  editRadio(radio: any) {
    this.router.navigate(['/form', radio.id])
  }

  deleteRadio(radio: any) {
    this.radioService.deleteRadio(radio.id)
    .subscribe(() => {
      location.reload();
    });
  }

  toggleRadio(radio: Radio) {
    this.radioPlayerService.toggleRadio(radio);
  }

  isPlaying(radio: Radio) {
    return this.radioPlayerService.isRadioPlaying(radio);
  }

}
