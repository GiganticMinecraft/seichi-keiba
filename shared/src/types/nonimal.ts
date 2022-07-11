/**
 * assertionをアロー関数で書くと、`Assertions require every name in the call target to be declared with an explicit type annotation.`というエラーが発生する
 * ref. https://qiita.com/suin/items/e226c42a19e1ddd39d05
 */
export type Nonimal<T, U extends string> = T & { __brand: U };

const isString = (v: unknown): v is string => typeof v === 'string';
function assertString(v: unknown, target = ''): asserts v is string {
  if (!isString(v)) throw new Error(`${target} must be string`.trim());
}

export type NonBlankString = Nonimal<string, 'NonBlankString'>;
const isNonBlankString = (v: unknown): v is string => isString(v) && v !== '';
export function assertNonBlankString(
  v: unknown,
  target = '',
): asserts v is NonBlankString {
  assertString(v);

  if (!isNonBlankString(v))
    throw new Error(`${target} must be not empty string`.trim());
}

export const isNumber = (v: unknown): v is number => typeof v === 'number';
export function assertNumber(v: unknown): asserts v is number {
  if (!isNumber(v)) throw new Error('The value must be number'.trim());
}
