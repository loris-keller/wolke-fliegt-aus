import { Component } from '@angular/core';
import { NATASCIA_LORIS_DATE } from '../../app.constants';
import { Timer } from '../../components/timer/timer';

@Component({
  selector: 'app-natascia-loris',
  imports: [Timer],
  templateUrl: './natascia-loris.html',
  styleUrl: './natascia-loris.scss',
})
export class NatasciaLoris {
  protected readonly date = NATASCIA_LORIS_DATE;
}
