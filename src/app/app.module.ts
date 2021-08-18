import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListOfMachinesComponent } from './list-of-machines/list-of-machines.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from './material-module.module'
import { RouterModule } from '@angular/router';
import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common'; 
import {HttpClientModule} from '@angular/common/http';
import {MatNativeDateModule} from '@angular/material/core';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { DetailComponent } from './detail/detail.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    ListOfMachinesComponent,
    DetailComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,   
    RouterModule,    
    FormsModule,
    ReactiveFormsModule,    
    ObserversModule,
    DemoMaterialModule,
    CommonModule,
    MatNativeDateModule,    
    HttpClientModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
