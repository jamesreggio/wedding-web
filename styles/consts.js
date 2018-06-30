import {invariant} from 'wedding/utils/functional';

/**
 * Increments for spacing and positioning.
 */

const toFixed = value => {
  value = Number(value);
  invariant(!Number.isNaN(value), `Expected numeric value: ${value}`);
  return value.toFixed(4);
};

export const unit = 4; // px
export const base = 16; // px

export const units = units => `${toFixed(units * (unit / base))}rem`;
export const pxs = pxs => `${toFixed(pxs / base)}rem`;
export const neg = rems => `-${rems}`;

/**
 * Breakpoints.
 */

//XXX
export const breakpoints = {
  m: 576,
  l: 928,
  xl: 1252,
}; // px

export const mediaQuery = breakpoint => {
  invariant(breakpoint in breakpoints, `Unknown breakpoint: ${breakpoint}`);
  return `@media (min-width: ${breakpoints[breakpoint]}px)`;
};

/**
 * Layout constants.
 */

// prettier-ignore
export const layout = {
  //XXX
};

/**
 * Color constants.
 */

// prettier-ignore
const sharedColors = {
  accent:    '#1f90c5', //XXX
};

// prettier-ignore
export const colors = {
  fg: {
    ...sharedColors,
    null:     'transparent',
    white:    '#ffffff',
    dark:     '#787878',
    black:    '#373c3f',
  },

  bg: {
    ...sharedColors,
    null:    'transparent',
    white:   '#ffffff',
    light:   '#fafafa',
  },
};

/**
 * Font constants.
 */

//XXX
// prettier-ignore
export const fonts = {
  normal: '-apple-system, BlinkMacSystemFont, Helvetica, sans-serif',
  accent: '-apple-system, BlinkMacSystemFont, Helvetica, sans-serif',
};
