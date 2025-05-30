import { Component, inject } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { Navigator } from './components/navigator/navigator';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, MatIconModule, MatBottomSheetModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly bottomSheet = inject(MatBottomSheet);

  protected title = 'wolke-fliegt-aus';

  protected openNavigator(): void {
    this.bottomSheet.open(Navigator, { maxHeight: 400 });
  }
}
