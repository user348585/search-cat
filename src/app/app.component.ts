import {ChangeDetectionStrategy, Component, inject, OnInit} from "@angular/core";
import {Store} from "@ngxs/store";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";

import {AddBreed} from "./store/actions/breed.action";

import {BreedService} from "./services/breed.service";
import {HeaderComponent} from "./header/components/header/header.component";
import {FilterComponent} from "./cat/components/filter/filter.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeaderComponent,
    FilterComponent,
    CommonModule,
    HttpClientModule
  ],
  standalone: true,
  providers: [BreedService]
})

export class AppComponent implements OnInit {
  private readonly breedService: BreedService = inject(BreedService);
  private readonly store: Store = inject(Store);

  ngOnInit(): void {
    this.getAllBreed();
  }

  private  getAllBreed(): void {
    this.breedService.getAllBreed().subscribe((breed) => {
      this.store.dispatch(new AddBreed(breed));
    });
  }
}
