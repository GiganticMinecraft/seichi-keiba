import { Nonimal, assertNonBlankString } from '../nonimal';

export type NewsTitle = Nonimal<string, 'NewsTitle'>;
function assertNewsTitle(v: unknown): asserts v is NewsTitle {
  assertNonBlankString(v);
}
export const asNewsTitle = (v: unknown): NewsTitle => {
  assertNewsTitle(v);

  return v;
};
