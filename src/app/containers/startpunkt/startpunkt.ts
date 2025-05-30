import { Component } from '@angular/core';
import { Timer } from '../../components/timer/timer';
import { STARTPUNKT_DATE } from '../../timer.constants';

@Component({
  selector: 'app-startpunkt',
  imports: [Timer],
  templateUrl: './startpunkt.html',
  styleUrl: './startpunkt.scss',
})
export class Startpunkt {
  protected readonly date = STARTPUNKT_DATE;
}
