import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FirstcomComponent } from './firstcom/firstcom.component';
import {SecondComponent} from './second/second.component';
import { ThirdComponent } from './third/third.component';

import {HttpClientModule} from '@angular/common/http';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule } from "@angular/material/icon";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';




@NgModule ({
  declarations: [
    AppComponent,
    FirstcomComponent,
    SecondComponent,
    ThirdComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatRadioModule,
    HttpClientModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule, 
    ReactiveFormsModule,
    MatInputModule

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
