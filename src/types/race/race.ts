/* eslint-disable max-classes-per-file */
import { CourseType } from './courseType';
import { RaceHorse } from './horse';

import { NaturalNumberValueObject, StringValueObject } from '../valueObject';

export class RaceNumber extends NaturalNumberValueObject {
  static of = (value: number) => new this(value);

  withSuffix = () => `${super.get()}R`;
}

export class RaceDistance extends NaturalNumberValueObject {
  static of = (value: number) => new this(value);
}

export class RaceName extends StringValueObject {
  static of = (value: string) => new this(value);
}

export type Race = {
  number: RaceNumber;
  name: RaceName;
  startDateTime: Date;
  course: CourseType;
  distance: RaceDistance;
  horses: RaceHorse[];
};
