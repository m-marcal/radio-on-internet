import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router'; 
import { RadioService } from '../services/radio.service';
import { Radio } from '../model/radio.model';

@Component({
  selector: 'app-radio-list',
  templateUrl: './radio-list.component.html',
  styleUrls: ['./radio-list.component.css']
})
export class RadioListComponent implements OnInit {

  selectRadio(radio: any) {
    window.alert('Radio: ' + radio.nome  + ' selecionada.');
  }

  radios: Radio[] = [];

  constructor(private radioService: RadioService, private router: Router) {}

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

}
