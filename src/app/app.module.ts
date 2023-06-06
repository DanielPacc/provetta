import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavBarComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule], // Aggiungi FormsModule ai moduli importati
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }