import { Nonimal, assertNonBlankString } from '../nonimal';

export type JockeyName = Nonimal<string, 'JockeyName'>;
function assertJockeyName(v: unknown): asserts v is JockeyName {
  assertNonBlankString(v);
}
export const asJockeyName = (v: unknown): JockeyName => {
  assertJockeyName(v);

  return v;
};
