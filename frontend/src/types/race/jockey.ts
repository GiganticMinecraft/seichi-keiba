import { StringValueObject } from '../valueObject';

export class JockeyName extends StringValueObject {
  static of(value: string): JockeyName {
    return new this(value);
  }
}

export type Jockey = {
  name: JockeyName;
};
