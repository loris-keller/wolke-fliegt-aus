import { Component } from '@angular/core';
import { HEIMWEH_DATE } from '../../app.constants';
import { Timer } from '../../components/timer/timer';

@Component({
  selector: 'app-heimweh',
  imports: [Timer],
  templateUrl: './heimweh.html',
  styleUrl: './heimweh.scss',
})
export class Heimweh {
  protected readonly date = HEIMWEH_DATE;
}
