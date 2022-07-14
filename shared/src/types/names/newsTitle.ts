import { Nominal, assertNonBlankString } from '../nominal';

export type NewsTitle = Nominal<string, 'NewsTitle'>;
function assertNewsTitle(v: unknown): asserts v is NewsTitle {
  assertNonBlankString(v);
}
export const asNewsTitle = (v: unknown): NewsTitle => {
  assertNewsTitle(v);

  return v;
};
