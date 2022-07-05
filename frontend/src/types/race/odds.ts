import { AbstractValueObject } from '../valueObject';

export default class Odds extends AbstractValueObject<number> {
  constructor(val: number) {
    if (val < 1.0) throw new Error('The value must be more than 1.0.');
    super(val);
  }

  static of(value: number): Odds {
    return new this(value);
  }
}
