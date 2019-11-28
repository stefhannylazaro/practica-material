import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ListCustomComponent } from './components/list-custom/list-custom.component';
import { FormCustomComponent } from './components/form-custom/form-custom.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCustomComponent,
    FormCustomComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
