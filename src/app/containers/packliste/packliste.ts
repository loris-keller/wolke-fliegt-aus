import { Component } from '@angular/core';
import { Timer } from '../../components/timer/timer';
import { PACKLISTE_DATE } from '../../timer.constants';

@Component({
  selector: 'app-packliste',
  imports: [Timer],
  templateUrl: './packliste.html',
  styleUrl: './packliste.scss',
})
export class Packliste {
  protected readonly date = PACKLISTE_DATE;
}
