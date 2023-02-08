import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppCompement } from './app.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';

@NgModule({
  declarations: [ AppCompement , HotelListComponent],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppCompement]
})
export class AppModule {

}
