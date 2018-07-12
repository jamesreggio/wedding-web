import {pxs, units} from './consts';

/**
 * Sizing styles.
 *
 * * Names are a predictable shorthand to simplify frequent use.
 * * Sizes are in multiples of `units` and `pxs`.
 *
 * See `sizingAxes` and `sizingSizes` below for abbreviations.
 *
 * Examples:
 *
 *    w1   // => {width:  units(1)}
 *    h0   // => {height: 0}
 */

const buildSizing = (axisName, axis, sizeName, size) => {
  // axis = 'width'
  // size = units(2)
  // => {width: units(2)}
  const style = {[axis]: size};

  // axisName = 'w'
  // sizeName = '2'
  // => {w2: style}
  return {[`${axisName}${sizeName}`]: style};
};

// prettier-ignore
const sizingAxes = [
  ['w', 'width'],
  ['h', 'height'],
  ['mw', 'minWidth'],
  ['mh', 'minHeight'],
];

// prettier-ignore
const sizingSizes = [
  ['0', 0],
  ['a', 'auto'],
  ['f', '100%'],
  ['h', '50%'],
];

const maxPixels = 20;
for (let i = 1; i <= maxPixels; ++i) {
  sizingSizes.push([`${i}p`, pxs(i)]);
  sizingSizes.push([`n${i}p`, pxs(-i)]);
}

const maxUnits = 20;
for (let i = 1; i <= maxUnits; ++i) {
  sizingSizes.push([`${i}`, units(i)]);
  sizingSizes.push([`n${i}`, units(-i)]);
}

const sizingStyles = {};
sizingAxes.forEach(axis =>
  sizingSizes.forEach(size =>
    Object.assign(sizingStyles, buildSizing(...axis, ...size)),
  ),
);

export default sizingStyles;
