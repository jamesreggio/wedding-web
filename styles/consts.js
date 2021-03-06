import {invariant} from 'wedding/utils/functional';

/**
 * Increments for spacing and positioning.
 */

const toFixed = value => {
  value = Number(value);
  // eslint-disable-next-line no-restricted-globals
  invariant(!isNaN(value), `Expected numeric value: ${value}`);
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

export const breakpoints = {
  s: 520,
  m: 880,
  l: 1040,
  xl: 1140,
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
  treesHeight:  pxs(182),
  headerHeight: pxs(90),
  sidebarWidth: units(60),
  contentWidth: units(160),
  modalWidth: units(110),
};

/**
 * Color constants.
 */

// prettier-ignore
const sharedColors = {
  null:     'transparent',
  white:    '#ffffff',
  accent:   '#5e0817',
  black:    '#1e2e3d',
};

// prettier-ignore
export const colors = {
  fg: {
    ...sharedColors,
  },

  bg: {
    ...sharedColors,
    light:   '#fbfbfb',
  },
};

/**
 * Font constants.
 */

// prettier-ignore
export const fonts = {
  body: 'Brandon Text, -apple-system, BlinkMacSystemFont, Helvetica, sans-serif',
  headings: 'Concourse C3, -apple-system, BlinkMacSystemFont, Helvetica, sans-serif',
  accent: 'Plantin Std, -apple-system, BlinkMacSystemFont, Helvetica, sans-serif',
};

/**
 * Text constants.
 */

export const nbsp = '\u00a0';
