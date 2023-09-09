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
  radioId: number | undefined;

  constructor(
    private route: ActivatedRoute, 
    private radioService: RadioService,
    private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.radioId = +params['id'];
      if (isNaN(this.radioId)) {
        this.radio = new Radio(null, '', '', '');
      } else {
        this.radio = new Radio(null, '', '', '');
        //this.loadRadioData(this.radioId);
      }
    });
  }

  loadRadioData(id: number) {
    //to-do
  }

  onSubmit() {
    this.radioService.addRadio(this.radio);
    this.form.reset();
    this.router.navigate(['/radio-list']);
  }
}
