import { assertFilledString } from '@/types/utils/filledString';
import { Nominal } from '@/types/utils/nominal';

export type HorseName = Nominal<string, 'HorseName'>;
function assertHorseName(v: unknown): asserts v is HorseName {
  assertFilledString(v);
}
export const asHorseName = (v: unknown): HorseName => {
  assertHorseName(v);

  return v;
};
