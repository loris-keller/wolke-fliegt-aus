import { DatePipe } from '@angular/common';
import {
  Component,
  computed,
  effect,
  inject,
  Signal,
  signal,
} from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';
import { DATE_PAGE_MAP, DatePage } from '../../app.constants';

const timeoutSecond = 1000;
const timeoutMinute = timeoutSecond * 60;
const timeoutInterval = timeoutMinute * 5; // 5 minutes

@Component({
  selector: 'app-navigator',
  imports: [MatListModule, DatePipe],
  templateUrl: './navigator.html',
  styleUrl: './navigator.scss',
})
export class Navigator {
  private readonly now = signal<Date>(new Date());

  private readonly router = inject(Router);
  private readonly bottomSheetRef = inject(MatBottomSheetRef);

  constructor() {
    effect(() => {
      const intervalId = setInterval(() => {
        this.now.set(new Date());
      }, timeoutInterval);

      return () => clearInterval(intervalId);
    });
  }

  protected readonly values: Signal<DatePage[]> = computed(() => {
    const now = this.now();

    return DATE_PAGE_MAP.filter((value: DatePage) => value.date <= now);
  });

  protected navigateTo(value: DatePage): void {
    this.router.navigate([value.path]);
    this.bottomSheetRef.dismiss();
  }
}
