import { Nonimal, isNumber, assertNumber } from './nonimal';

export type NaturalNumber = Nonimal<number, 'NaturalNumber'>;
const isNaturalNumber = (v: unknown): v is number => isNumber(v) && v > 0;
function assertNaturalNumber(v: unknown): asserts v is NaturalNumber {
  assertNumber(v);

  if (!isNaturalNumber(v)) throw new Error('The value must be natural number');
}
export const asNaturalNumber = (v: unknown): NaturalNumber => {
  assertNaturalNumber(v);

  return v;
};
