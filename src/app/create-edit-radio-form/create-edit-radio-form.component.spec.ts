import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditRadioFormComponent } from './create-edit-radio-form.component';

describe('CreateEditRadioFormComponent', () => {
  let component: CreateEditRadioFormComponent;
  let fixture: ComponentFixture<CreateEditRadioFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEditRadioFormComponent]
    });
    fixture = TestBed.createComponent(CreateEditRadioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
