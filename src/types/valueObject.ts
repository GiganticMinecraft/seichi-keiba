import isNaturalNumber from 'is-natural-number';

export abstract class AbstractValueObject<T> {
  protected constructor(protected readonly value: T) {}

  get(): T {
    return this.value;
  }

  eq(vo: ValueObject<T>): boolean {
    if (this.constructor.name !== vo.constructor.name) return false;

    return this.get() === vo.get();
  }
}

interface ValueObjectProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [index: string]: any;
}

abstract class ValueObject<
  T extends ValueObjectProps,
> extends AbstractValueObject<T> {}

export abstract class NumberValueObject extends AbstractValueObject<number> {
  constructor(val: number) {
    if (val < 0) throw new Error('The value must be more than 0.');
    super(val);
  }
}

export abstract class NaturalNumberValueObject extends AbstractValueObject<number> {
  constructor(val: number, includeZero = false) {
    if (!isNaturalNumber(val, { includeZero }))
      throw new Error('The value must be Natural Number.');
    super(val);
  }
}

export abstract class StringValueObject extends AbstractValueObject<string> {
  constructor(val: string) {
    if (val === '') throw new Error('The value must contains any chars.');
    super(val);
  }
}

export default ValueObject;
