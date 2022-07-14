/**
 * ref. https://speakerdeck.com/okunokentaro/harajukuts2
 */
export type Nominal<T, U extends string> = T & { __brand: U };
