import { Component, OnInit } from '@angular/core';
import { Radio } from '../model/radio.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-edit-radio-form',
  templateUrl: './create-edit-radio-form.component.html',
  styleUrls: ['./create-edit-radio-form.component.css']
})
export class CreateEditRadioFormComponent implements OnInit {
  radioId: number | undefined;
  radio: Radio | undefined;
  nome: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.radioId = +params['id'];
      
      //to-do
      if(isNaN(this.radioId)) {
        this.nome = '';
      } else {
        this.nome = 'asdf';
      }

      this.loadRadioData(this.radioId);
    });
  }

  loadRadioData(id: number) {
    //to-do
  }

  submitForm() {
    //to-do
    window.alert('Form enviado')
  }
}
