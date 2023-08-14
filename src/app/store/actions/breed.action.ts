import {BreedInterface} from "../../types/breed.inteface";
import {EActionAddEnum} from "../enums/action-add.enum";

export class AddBreed {
  static readonly type = EActionAddEnum.ADD_NAME;
  constructor(public breed: BreedInterface[]) {}
}
