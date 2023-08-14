import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import {map, Observable} from "rxjs";

import {BASE_URL_BREED} from "../../environments/environments";
import {BreedInterface} from "../types/breed.inteface";
import {CharacteristicInterface} from "../types/characteristic.interface";

@Injectable()
export class BreedService {
  private http: HttpClient = inject(HttpClient)

  public getAllBreed(): Observable<BreedInterface[]> {
    const url = `${BASE_URL_BREED}`
    return this.http.get<BreedInterface[]>(url).pipe(map((breeds) => {
      return breeds.map((breed) => {
        return {...breed, characteristic: this.getCharacter(breed)}
      });
    }));

  }
  private getCharacter(breed: BreedInterface): CharacteristicInterface[] {
    return [
      { name: 'dog-friendly', value: breed.dog_friendly},
      { name: 'experimental', value: breed.experimental},
      { name: 'grooming', value: breed.grooming},
      { name: 'hairless', value: breed.hairless},
      { name: 'hypoallergenic', value: breed.hypoallergenic},
    ]
  }
}
