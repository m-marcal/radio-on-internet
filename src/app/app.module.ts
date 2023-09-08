import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SimpleBannerComponent } from './simple-banner/simple-banner.component';
import { FooterComponent } from './footer/footer.component';
import { RadioListComponent } from './radio-list/radio-list.component';
import { CreateEditRadioFormComponent } from './create-edit-radio-form/create-edit-radio-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SimpleBannerComponent,
    FooterComponent,
    RadioListComponent,
    CreateEditRadioFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
