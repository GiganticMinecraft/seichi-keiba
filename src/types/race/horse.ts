import { Jockey } from './jockey';

import { StringValueObject } from '../valueObject';

export class HorseName extends StringValueObject {
  static of(value: string): HorseName {
    return new this(value);
  }
}

export type Horse = {
  name: HorseName;
};

export type RaceHorse = Horse & {
  frame: number;
  number: number;
  jockey: Jockey;
};
