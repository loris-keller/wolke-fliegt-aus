import { Component } from '@angular/core';
import { UMSTIEG_DATE } from '../../app.constants';
import { Timer } from '../../components/timer/timer';

@Component({
  selector: 'app-umstig',
  imports: [Timer],
  templateUrl: './umstig.html',
  styleUrl: './umstig.scss',
})
export class Umstig {
  protected readonly date = UMSTIEG_DATE;
}
