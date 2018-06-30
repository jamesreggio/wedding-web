/**
 * Return a transformed object without mutating the given inputs.
 */

export update from 'immutability-helper';

/**
 * Throw or halt debugger if the given test is falsey.
 */

export const invariant = (test, message) => {
  if (!test) {
    throw Error(message);
  }
};

invariant.debugger = test => {
  if (!test) {
    // eslint-disable-next-line no-debugger
    debugger;
  }
};

/**
 * Invoke the given value, if a function. Otherwise, return it.
 *
 * Examples:
 *
 *    call(42)              // => 42
 *    call(() => 42)        // => 42
 *    call(() => () => 42)  // => () => 42
 *    call(val => val, 42)  // => 42
 *    call(null)            // => null
 */

export const call = (value, ...args) =>
  typeof value === 'function' ? value(...args) : value;

/**
 * Recursively invoke the given value, if a function.
 * Ultimately return the non-function value.
 *
 * Examples:
 *
 *    calln(42)             // => 42
 *    calln(() => 42)       // => 42
 *    calln(() => () => 42) // => 42
 *    calln(
 *      val => val,
 *      () => 42,
 *    )                     // => 42
 *    calln(null)           // => null
 */

export const calln = (value, ...args) =>
  typeof value === 'function' ? calln(value(...args), ...args) : value;

/**
 * Look up the given key in the values provided. Invoke the value with `call`.
 * Fall back to 'default', 'Default', or 'DEFAULT' keys, if provided.
 * Throw if neither key nor default is found.
 *
 * Examples:
 *
 *    select('User', {
 *      User: () => 'foo',
 *      Show: () => 'bar',
 *    }); // => 'foo'
 *
 *    select('Alien', {
 *      User: () => 'foo',
 *      Show: () => 'bar',
 *      Default: () => 'unknown',
 *    }); // => 'unknown'
 *
 *    select('Alien', {
 *      User: () => 'foo',
 *      Show: () => 'bar',
 *    }); // => Error
 */

export const select = (key, values, ...args) => {
  const keys = [key, 'default', 'Default', 'DEFAULT'];
  const index = keys.findIndex(key => key in values);

  if (index === -1) {
    throw Error(`Unknown key: ${key}`);
  }

  return call(values[keys[index]], ...args);
};

/**
 * Lookup the given path in the object provided.
 * If path resolves to a nullish value, return the nullish value. Never throw.
 *
 * Examples:
 *
 *    path({foo: {bar: 42}}, 'foo')                 // => {bar: 42}
 *    path({foo: {bar: 42}}, 'foo', 'bar')          // => 42
 *    path({foo: {bar: 42}}, 'nope', 'foo', 'bar')  // => undefined
 */

export const lookup = (object, ...path) =>
  path.reduce(
    (object, part) => (object == null ? object : object[part]),
    object,
  );
