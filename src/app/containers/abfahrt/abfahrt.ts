import { Component } from '@angular/core';
import { ABFAHRT_DATE } from '../../app.constants';
import { Timer } from '../../components/timer/timer';

@Component({
  selector: 'app-abfahrt',
  imports: [Timer],
  templateUrl: './abfahrt.html',
  styleUrl: './abfahrt.scss',
})
export class Abfahrt {
  protected readonly date = ABFAHRT_DATE;
}
