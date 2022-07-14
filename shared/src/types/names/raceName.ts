import { assertFilledString } from '@/types/utils/filledString';
import { Nominal } from '@/types/utils/nominal';

export type RaceName = Nominal<string, 'RaceName'>;
function assertRaceName(v: unknown): asserts v is RaceName {
  assertFilledString(v);
}
export const asRaceName = (v: unknown): RaceName => {
  assertRaceName(v);

  return v;
};
