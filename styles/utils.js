/**
 * Return styles for a square of given size, with optional border radius.
 */

export const square = (size, radius = 0) => ({
  width: size,
  height: size,
  ...(radius ? {borderRadius: radius} : null),
});

/**
 * Return styles for a circle of given circumference.
 */

export const circle = size => square(size, '50%');
