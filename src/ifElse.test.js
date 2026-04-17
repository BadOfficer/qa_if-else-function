'use strict';

describe('ifElse', () => {
  const { ifElse } = require('./ifElse');
  let firstCb;
  let secondCb;

  beforeEach(() => {
    firstCb = jest.fn();
    secondCb = jest.fn();
  });

  it('should return undefined', () => {
    const result = ifElse(jest.fn(), jest.fn(), jest.fn());

    expect(result).toBeUndefined();
  });

  it('should run only first callback', () => {
    const condCb = jest.fn().mockReturnValue(true);

    ifElse(condCb, firstCb, secondCb);

    expect(firstCb).toHaveBeenCalledTimes(1);
    expect(secondCb).not.toHaveBeenCalled();
  });

  it('should run second callback', () => {
    const condCb = jest.fn().mockReturnValue(false);

    ifElse(condCb, firstCb, secondCb);

    expect(secondCb).toHaveBeenCalledTimes(1);
    expect(firstCb).not.toHaveBeenCalled();
  });
});
