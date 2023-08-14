import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Injectable} from "@angular/core";

import {AddBreed} from "../actions/breed.action";
import {BreedInterface} from "../../types/breed.inteface";
import {BreedStateModel} from "../types/breed-state.model";
import {EBreedEnum} from "../../enums/breed.enum";

@State<BreedStateModel>({
  name: 'breed',
  defaults: {
    breeds: []
  }
})

@Injectable()
export class BreedState {

  @Selector()
  static breeds(state: BreedStateModel): BreedInterface[] {
    return state.breeds;
  }

  @Action(AddBreed)
  add(ctx: StateContext<BreedStateModel>, action: AddBreed): void {
    const state = ctx.getState();
    action.breed.unshift({name: EBreedEnum.BREED_NAME, id: EBreedEnum.BREED_ID})
    ctx.patchState({
      breeds: [...action.breed, ...state.breeds]
    })
  }
}

