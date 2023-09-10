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
  radio: Radio = new Radio(null, '', '', '');
  radioId: number | undefined;

  constructor(
    private route: ActivatedRoute, 
    private radioService: RadioService,
    private router: Router) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.radioId = +params['id'];
      if (!isNaN(this.radioId)) {
        // Se o radioId estiver presente, estamos em modo de edição
        this.loadRadioData(this.radioId);
      }
    });
  }

  loadRadioData(id: number) {
    this.radioService.getRadioById(id).subscribe(
      (radio: Radio | null) => {
        if (radio) {
          this.radio = radio;
        }
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }

  onSubmit() {
    if (this.radioId) {
      this.radioService
        .editRadio(this.radio)
        .subscribe(
        (editedRadio: Radio | null) => {
          this.router.navigate(['/radio-list']);
        },
        (error: any) => {
          console.error('Error:', error);
        }
      );
    } else {
      this.radioService.addRadio(this.radio).subscribe(
        (addedRadio: Radio | null) => {
          this.form.reset();
          this.router.navigate(['/radio-list']);
        },
        (error: any) => {
          console.error('Error:', error);
        }
      );
    }
  }
}
