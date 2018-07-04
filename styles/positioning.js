import {pxs, units} from './consts';

/**
 * Basic positioning styles.
 */

// prettier-ignore
const positioningStyles = {
  pos: {
    abs:   {position: 'absolute'},
    rel:   {position: 'relative'},
    fixed: {position: 'fixed'},
    full:  {position: 'absolute', top: 0, right: 0, bottom: 0, left: 0},
  },
};

/**
 * Absolute positioning styles.
 *
 * * Names are a predictable shorthand to simplify frequent use.
 * * Sizes are in multiples of `units` and `pxs`.
 *
 * See `absoluteSides` and `absoluteSizes` below for abbreviations.
 *
 * Examples:
 *
 *    t1   // => {top:    units(1)}
 *    bn2p // => {bottom: pxs(-2)}
 *    r0   // => {right:  0}
 */

const buildAbsolute = (sideName, side, sizeName, size) => {
  // side = 'top'
  // size = units(2)
  // => {top: units(2)}
  const style = {[side]: size};

  // sideName = 't'
  // sizeName = '2'
  // => {t2: style}
  return {[`${sideName}${sizeName}`]: style};
};

// prettier-ignore
const absoluteSides = [
  ['t', 'top'],
  ['r', 'right'],
  ['b', 'bottom'],
  ['l', 'left'],
];

// prettier-ignore
const absoluteSizes = [
  ['0', 0],
  ['f', '100%'],
];

const maxPixels = 20;
for (let i = 1; i <= maxPixels; ++i) {
  absoluteSizes.push([`${i}p`, pxs(i)]);
  absoluteSizes.push([`n${i}p`, pxs(-i)]);
}

const maxUnits = 40;
for (let i = 1; i <= maxUnits; ++i) {
  absoluteSizes.push([`${i}`, units(i)]);
  absoluteSizes.push([`n${i}`, units(-i)]);
}

const absoluteStyles = {};
absoluteSides.forEach(side =>
  absoluteSizes.forEach(size =>
    Object.assign(absoluteStyles, buildAbsolute(...side, ...size)),
  ),
);

export default {...positioningStyles, ...absoluteStyles};
