import { Component } from '@angular/core';
import { HOTEL_DATE } from '../../app.constants';
import { Timer } from '../../components/timer/timer';

@Component({
  selector: 'app-hotel',
  imports: [Timer],
  templateUrl: './hotel.html',
  styleUrl: './hotel.scss',
})
export class Hotel {
  protected readonly date = HOTEL_DATE;
}
