import { filterFalsy, filterNull, filterNaN, filterTruthy, filterUndefined } from './index'

const testArray = [true, false, 1, 0, -1, null, undefined, NaN];

describe('filterFalsy', () => {
  it('should filter falsy values out of an array', () => {
    const filteredArray = testArray.filter(filterFalsy);
    expect(filteredArray).toEqual([true, 1, -1]);
  });
});

describe('filterNull', () => {
  it('should filter null values out of an array', () => {
    const filteredArray = testArray.filter(filterNull);
    expect(filteredArray).toEqual([true, false, 1, 0, -1, undefined, NaN]);
  });
});

describe('filterNaN', () => {
  it('should filter NaN values out of an array', () => {
    const filteredArray = testArray.filter(filterNaN);
    expect(filteredArray).toEqual([true, false, 1, 0, -1, null, undefined]);
  });
});

describe('filterTruthy', () => {
  it('should filter truthy values out of an array', () => {
    const filteredArray = testArray.filter(filterTruthy);
    expect(filteredArray).toEqual([false, 0, null, undefined, NaN]);
  });
});

describe('filterUndefined', () => {
  it('should filter undefined values out of an array', () => {
    const filteredArray = testArray.filter(filterUndefined);
    expect(filteredArray).toEqual([true, false, 1, 0, -1, null, NaN]);
  });
});
