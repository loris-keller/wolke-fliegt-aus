import { Component } from '@angular/core';
import { BEATRICE_THOMAS_DATE } from '../../app.constants';
import { Timer } from '../../components/timer/timer';

@Component({
  selector: 'app-beatrice-thomas',
  imports: [Timer],
  templateUrl: './beatrice-thomas.html',
  styleUrl: './beatrice-thomas.scss',
})
export class BeatriceThomas {
  protected readonly date = BEATRICE_THOMAS_DATE;
}
