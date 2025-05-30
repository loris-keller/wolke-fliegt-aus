import {
  Component,
  computed,
  effect,
  input,
  InputSignal,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-timer',
  imports: [],
  templateUrl: './timer.html',
  styleUrl: './timer.scss',
})
export class Timer {
  private readonly now = signal<Date>(new Date());

  readonly date: InputSignal<Date> = input.required<Date>();

  readonly isDone = computed(() => {
    return this.now() <= this.date();
  });

  constructor() {
    effect(() => {
      const intervalId = setInterval(() => {
        this.now.set(new Date());
      }, 1000);

      return () => clearInterval(intervalId);
    });
  }

  private readonly totalSeconds = computed(() => {
    const target = this.date();
    const current = this.now();

    const ms = Math.max(target.getTime() - current.getTime(), 0);
    return Math.floor(ms / 1000);
  });

  protected readonly days = computed(() => {
    const totalSeconds = this.totalSeconds();

    return Math.floor(totalSeconds / (3600 * 24));
  });

  protected readonly hours = computed(() => {
    const totalSeconds = this.totalSeconds();
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);

    return hours;
  });

  protected readonly minutes = computed(() => {
    const totalSeconds = this.totalSeconds();
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    return minutes;
  });

  protected readonly seconds = computed(() => {
    const totalSeconds = this.totalSeconds();
    const seconds = totalSeconds % 60;

    return seconds;
  });
}
