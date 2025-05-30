import { Component } from '@angular/core';
import { PANIK_DATE } from '../../app.constants';
import { Timer } from '../../components/timer/timer';

@Component({
  selector: 'app-panik',
  imports: [Timer],
  templateUrl: './panik.html',
  styleUrl: './panik.scss',
})
export class Panik {
  protected readonly date = PANIK_DATE;
}
