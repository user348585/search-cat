import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {Select} from "@ngxs/store";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatSelectModule} from "@angular/material/select";
import {MatPaginatorModule} from "@angular/material/paginator";
import {CommonModule} from "@angular/common";

import {Observable} from "rxjs";

import {BreedState} from "../../../store/state/breed.state";
import {BreedInterface} from "../../../types/breed.inteface";
import {FilterBreedPipe} from "../../pipe/filter-breed.pipe";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    FilterBreedPipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent {
  @Select(BreedState.breeds) public readonly breed$!: Observable<BreedInterface[]>;
  public readonly breedControl  = new FormControl('')
  public searchValue = signal('');
  public searchLength = signal(10);
  public readonly selectList = signal([10, 15 , 20]);
  public readonly selectLength  = new FormControl(10);

  public onChangeBreed(): void {
    this.searchValue.set(this.breedControl.value ?? '');
  }


  public onChangeLength(): void {
    this.searchLength.set(this.selectLength.value ?? 10)
  }

  public trackBreed(index: number): number {
    return index
  }

}
