import { Routes } from '@angular/router';
import { Abfahrt } from './containers/abfahrt/abfahrt';
import { BeatriceThomas } from './containers/beatrice-thomas/beatrice-thomas';
import { Endbahnhof } from './containers/endbahnhof/endbahnhof';
import { Heimweh } from './containers/heimweh/heimweh';
import { Hotel } from './containers/hotel/hotel';
import { Moritz } from './containers/moritz/moritz';
import { NatasciaLoris } from './containers/natascia-loris/natascia-loris';
import { OptionGnuesser } from './containers/option-gnuesser/option-gnuesser';
import { OptionSportlich } from './containers/option-sportlich/option-sportlich';
import { Packliste } from './containers/packliste/packliste';
import { Panik } from './containers/panik/panik';
import { Startpunkt } from './containers/startpunkt/startpunkt';
import { TippsTricks } from './containers/tipps-tricks/tipps-tricks';
import { Umstig } from './containers/umstig/umstig';

export const routes: Routes = [
  { path: 'packliste', component: Packliste },
  { path: 'panik', component: Panik },
  { path: 'startpunkt', component: Startpunkt },
  { path: 'abfahrt', component: Abfahrt },
  { path: 'umstig', component: Umstig },
  { path: 'endbahnhof', component: Endbahnhof },
  { path: 'option-sportlich', component: OptionSportlich },
  { path: 'option-gnuesser', component: OptionGnuesser },
  { path: 'hotel', component: Hotel },
  { path: 'tipps-tricks', component: TippsTricks },
  { path: 'heimweh', component: Heimweh },
  { path: 'moritz', component: Moritz },
  { path: 'natascia-loris', component: NatasciaLoris },
  { path: 'beatrice-thomas', component: BeatriceThomas },
];
