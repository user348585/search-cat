import {CharacteristicInterface} from "./characteristic.interface";

export interface BreedInterface {
  description?: string;
  name?: string;
  id: string;
  image?: {
    height: number;
    id: string;
    url: string;
    width: number;
  }
  dog_friendly?: number;
  energy_level?: number;
  experimental?: number;
  grooming?: number;
  hairless?: number;
  health_issues?: number;
  hypoallergenic?: number;
  characteristic?: CharacteristicInterface[];
}
