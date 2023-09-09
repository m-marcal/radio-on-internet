import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Radio } from '../model/radio.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RadioService } from '../services/radio.service';

@Component({
  selector: 'app-create-edit-radio-form',
  templateUrl: './create-edit-radio-form.component.html',
  styleUrls: ['./create-edit-radio-form.component.css']
})
export class CreateEditRadioFormComponent implements OnInit {
  @ViewChild('form') form!: NgForm;
  radio!: Radio;

  constructor(
    private route: ActivatedRoute, 
    private radioService: RadioService,
    private router: Router) {}

  ngOnInit(): void {
    this.radio = new Radio(-1, '', '', '');
  }

  loadRadioData(id: number) {
    //to-do
  }

  onSubmit() {

    window.alert('Rádio cadastrada com sucesso' + '\n' + this.radio.nome + '\n' + this.radio.descricao + '\n' + this.radio.url);
    this.radioService.addRadio(this.radio);
    this.form.reset();
    this.router.navigate(['/radio-list']);
  }
}
