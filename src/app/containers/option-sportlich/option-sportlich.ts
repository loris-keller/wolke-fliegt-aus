import { Component } from '@angular/core';
import { OPTION_SPORTLICH_DATE } from '../../app.constants';
import { Timer } from '../../components/timer/timer';

@Component({
  selector: 'app-option-sportlich',
  imports: [Timer],
  templateUrl: './option-sportlich.html',
  styleUrl: './option-sportlich.scss',
})
export class OptionSportlich {
  protected readonly date = OPTION_SPORTLICH_DATE;
}
