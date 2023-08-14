import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatToolbarModule} from "@angular/material/toolbar";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [ MatToolbarModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {}
