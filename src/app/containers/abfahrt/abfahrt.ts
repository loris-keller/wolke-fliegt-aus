import { Component } from '@angular/core';
import { Timer } from '../../components/timer/timer';
import { ABFAHRT_DATE } from '../../timer.constants';

@Component({
  selector: 'app-abfahrt',
  imports: [Timer],
  templateUrl: './abfahrt.html',
  styleUrl: './abfahrt.scss',
})
export class Abfahrt {
  protected readonly date = ABFAHRT_DATE;
}
