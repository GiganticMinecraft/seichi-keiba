import { format, parseISO } from 'date-fns';
import { utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';

// TODO: テスト

/**
 * タイムゾーン指定子を持ったISO 8601形式の日時文字列を、UTCのDateにパースする
 * タイムゾーン指定子を持っていない場合は、タイムゾーンをUTCとしてパースする
 * @param value 日時文字列
 * @returns UTCのDate
 */
export const parseToUtc = (value: string) => parseISO(value);

/**
 * タイムゾーン指定子を持っていないISO 8601形式の日時文字列をUTCのDateにパースする
 * @param value 日時文字列
 * @param timeZone タイムゾーン
 * @returns UTCのDate
 */
export const parseToUtcWithTimeZone = (value: string, timeZone: string) =>
  zonedTimeToUtc(value, timeZone);

export const JST_TZ = 'Asia/Tokyo';

/**
 * DateをJSTタイムゾーンとして、UTCのDateにパースする
 * @param value 日時文字列
 * @returns Date
 */
export const parseJstToUtc = (value: string) =>
  parseToUtcWithTimeZone(value, JST_TZ);

/**
 * DateをJST日時文字列に指定した書式でフォーマットする
 * @param value Date
 * @param formatter フォーマット書式
 * @returns JSTの日時文字列
 */
export const formatUtcToJstString = (value: Date, formatter: string) =>
  format(utcToZonedTime(value, JST_TZ), formatter);

/**
 * 与えられた文字列が日時として有効なものかどうかを確認する
 * @param value 日時文字列
 * @param formatter フォーマット書式
 * @returns 日時が有効かどうか
 */
export const isValidDateTime = (value: string, formatter: string): boolean => {
  const d = new Date(value);

  try {
    const formatDate = format(d, formatter);

    return value === formatDate;
  } catch (_) {
    return false;
  }
};
