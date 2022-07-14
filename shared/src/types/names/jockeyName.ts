import { assertFilledString } from "@/types/utils/filledString";
import { Nominal } from "@/types/utils/nominal";

export type JockeyName = Nominal<string, 'JockeyName'>;
function assertJockeyName(v: unknown): asserts v is JockeyName {
  assertFilledString(v);
}
export const asJockeyName = (v: unknown): JockeyName => {
  assertJockeyName(v);

  return v;
};
