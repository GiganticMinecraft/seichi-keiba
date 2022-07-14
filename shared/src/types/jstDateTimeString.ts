import { formatUtcToJstString, isValidDateTime } from '@/dateTimeUtils';
import { assertFilledString } from '@/types/utils/filledString';
import { Nominal } from '@/types/utils/nominal';

export type JstDateTimeString = Nominal<string, 'JstDateTimeString'>;

const jstDateTimeFormatter = "yyyy-MM-dd'T'HH:mm:ss.sssxxxx";

function assertJstDateTimeString(v: unknown): asserts v is JstDateTimeString {
  assertFilledString(v);

  if (!isValidDateTime(v, jstDateTimeFormatter))
    throw new Error('The date is invalid or unformatted');
}

export const fromString = (v: unknown): JstDateTimeString => {
  assertJstDateTimeString(v);

  return v;
};

export const fromDate = (value: Date) =>
  fromString(formatUtcToJstString(value, jstDateTimeFormatter));
