/* eslint-env jasmine */
import assert from '../../dist/assert.js';

describe('The assert module should', () => {
  it('throw when the condition is false', () => {
    expect(() => assert(false)).toThrow();
  });

  it('not throw when the condition is true', () => {
    expect(() => assert(true)).not.toThrow();
  });

  it('throw an error with an appropriate message', () => {
    const message = 'An error occurred';
    expect(() => {
      assert(false, message);
    }).toThrowError(message);
  });

  xit('not throw when the condition is true', () => {
    expect(() => assert.warn(true)).not.toThrow();
  });
  
  assert(false, 'asdfasdf');
});
