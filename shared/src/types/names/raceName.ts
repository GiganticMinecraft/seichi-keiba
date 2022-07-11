import { Nonimal, assertNonBlankString } from '../nonimal';

export type RaceName = Nonimal<string, 'RaceName'>;
function assertRaceName(v: unknown): asserts v is RaceName {
  assertNonBlankString(v);
}
export const asRaceName = (v: unknown): RaceName => {
  assertRaceName(v);

  return v;
};
