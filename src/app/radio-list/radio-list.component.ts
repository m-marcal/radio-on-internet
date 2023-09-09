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
    this.radios = this.radioService.getAllRadios();
  }

  editRadio(radio: any) {
    this.router.navigate(['/form', radio.id])
  }

  deleteRadio(radio: any) {
    window.alert('Excluir Radio: ' + radio.nome);
  }

}
