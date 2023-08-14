import { Pipe, PipeTransform } from '@angular/core';

import {BreedInterface} from "../../types/breed.inteface";
import {EBreedEnum} from "../../enums/breed.enum";


@Pipe({
  name: "filterBreed",
  standalone: true
})
export class FilterBreedPipe implements PipeTransform {
  transform(breds: BreedInterface[] | null, saerchStrings: string | null): BreedInterface[] | null {
    if(breds && saerchStrings && saerchStrings !== EBreedEnum.BREED_ID){
      return breds?.filter((bred) => bred.id === saerchStrings)
    }
    else { return breds }
  };

}
