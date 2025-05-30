import { Component } from '@angular/core';
import { STARTPUNKT_DATE } from '../../app.constants';
import { Timer } from '../../components/timer/timer';

@Component({
  selector: 'app-startpunkt',
  imports: [Timer],
  templateUrl: './startpunkt.html',
  styleUrl: './startpunkt.scss',
})
export class Startpunkt {
  protected readonly date = STARTPUNKT_DATE;
}
