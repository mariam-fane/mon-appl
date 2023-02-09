import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
// pour resoudre le probleme de la langue que angular prend en compte on import registerLocaleData et locales fr

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import { AppCompement } from './app.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { ReplaceComma } from './shared/pipes/replace-comma.pipe';

registerLocaleData(localeFr, 'fr');

@NgModule({
  // ici on declare les pages pour que angular reconnaitre 
  declarations: [ AppCompement , HotelListComponent, ReplaceComma],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppCompement]
})
export class AppModule {

}
