import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RadioListComponent } from './radio-list/radio-list.component';
import { CreateEditRadioFormComponent } from './create-edit-radio-form/create-edit-radio-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/radio-list', pathMatch: 'full' },
  { path: 'radio-list', component: RadioListComponent },
  { path: 'form', component: CreateEditRadioFormComponent },
  { path: 'form/:id', component: CreateEditRadioFormComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
