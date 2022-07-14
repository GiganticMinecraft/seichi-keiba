import { assertFilledString } from '@/types/utils/filledString';
import { Nominal } from '@/types/utils/nominal';

export type NewsTitle = Nominal<string, 'NewsTitle'>;
function assertNewsTitle(v: unknown): asserts v is NewsTitle {
  assertFilledString(v);
}
export const asNewsTitle = (v: unknown): NewsTitle => {
  assertNewsTitle(v);

  return v;
};
