import { Component } from "@angular/core";

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html'
})

export class HotelListComponent{
    public title = 'Liste hotels';
    /*les directives angular ngIf et && permt d'ajoute les attributs qu'on a cree soit meme ou par angular*/
    public hotels:any[] = [
      {
      hotelId: 1,
      HotelName: 'Buea sweet life',
      description: 'Belle vue au bord de la mer',
      price: 230.5,
      imageUrl: 'assets/img/hotel-room.jpg'
    }, {
      hotelId: 2,
      HotelName: 'Marakech',
      description: 'Profitez de la vue sur les montagnes',
      price: 145.5,
      imageUrl: 'assets/img/the-interior.jpg'
    },{
      hotelId: 3,
      HotelName: 'Buea sweet life',
      description: 'Belle vue au bord de la mer',
      price: 120.51,
      imageUrl: 'assets/img/indoors.jpg'
    },{
      hotelId: 4,
      HotelName: 'Cape town city',
      description: 'Magnifique cadre pour votre sejour',
      price: 135.12,
      imageUrl: 'assets/img/window.jpg'
    }
  ];

  public showBadge: boolean = false;

  public hotelFilter = 'mot';

  public toggleIsNewBadge(): void{
      this.showBadge = !this.showBadge;
    }

}
