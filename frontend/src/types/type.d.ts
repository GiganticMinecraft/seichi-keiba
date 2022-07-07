import * as React from 'react';

declare module 'react' {
  // ref. https://qiita.com/Takepepe/items/f66c7e2e1d22b431f148
  type FCX<P = {}> = FunctionComponent<P & { className?: string }>;
}
