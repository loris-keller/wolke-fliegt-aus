import { Component } from '@angular/core';
import { MORITZ_DATE } from '../../app.constants';
import { Timer } from '../../components/timer/timer';

@Component({
  selector: 'app-moritz',
  imports: [Timer],
  templateUrl: './moritz.html',
  styleUrl: './moritz.scss',
})
export class Moritz {
  protected readonly date = MORITZ_DATE;
}
