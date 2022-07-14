import { Nominal, assertNonBlankString } from '../nominal';

export type JockeyName = Nominal<string, 'JockeyName'>;
function assertJockeyName(v: unknown): asserts v is JockeyName {
  assertNonBlankString(v);
}
export const asJockeyName = (v: unknown): JockeyName => {
  assertJockeyName(v);

  return v;
};
