import { Component } from '@angular/core';
import { ENDBAHNHOF_DATE } from '../../app.constants';
import { Timer } from '../../components/timer/timer';

@Component({
  selector: 'app-endbahnhof',
  imports: [Timer],
  templateUrl: './endbahnhof.html',
  styleUrl: './endbahnhof.scss',
})
export class Endbahnhof {
  protected readonly date = ENDBAHNHOF_DATE;
}
