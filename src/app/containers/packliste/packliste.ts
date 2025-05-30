import { Component } from '@angular/core';
import { PACKLISTE_DATE } from '../../app.constants';
import { Timer } from '../../components/timer/timer';

@Component({
  selector: 'app-packliste',
  imports: [Timer],
  templateUrl: './packliste.html',
  styleUrl: './packliste.scss',
})
export class Packliste {
  protected readonly date = PACKLISTE_DATE;
}
