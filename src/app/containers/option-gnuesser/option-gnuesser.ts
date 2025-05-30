import { Component } from '@angular/core';
import { OPTION_GNUESSER_DATE } from '../../app.constants';
import { Timer } from '../../components/timer/timer';

@Component({
  selector: 'app-option-gnuesser',
  imports: [Timer],
  templateUrl: './option-gnuesser.html',
  styleUrl: './option-gnuesser.scss',
})
export class OptionGnuesser {
  protected readonly date = OPTION_GNUESSER_DATE;
}
