import { Component } from '@angular/core';
import { TIPPS_TRICKS_DATE } from '../../app.constants';
import { Timer } from '../../components/timer/timer';

@Component({
  selector: 'app-tipps-tricks',
  imports: [Timer],
  templateUrl: './tipps-tricks.html',
  styleUrl: './tipps-tricks.scss',
})
export class TippsTricks {
  protected readonly date = TIPPS_TRICKS_DATE;
}
