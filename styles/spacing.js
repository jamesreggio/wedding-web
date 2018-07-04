import {pxs, units} from './consts';

/**
 * Spacing (margin and padding) styles.
 *
 * * Names are a predictable shorthand to simplify frequent use.
 * * Sizes are in multiples of `units` and `pxs`.
 *
 * See `spacingKinds`, `spacingSides`, and `spacingSizes` below for
 * abbreviations.
 *
 * Examples:
 *
 *    m1    // => {margin:            units( 1)}
 *    mn2   // => {margin:            units(-2)}
 *    my3   // => {marginVertical:    units( 3)}
 *    px4   // => {paddingHorizontal: units( 4)}
 *    ptn5p // => {paddingTop:          pxs(-5)}
 */

const buildSpacing = (kindName, kind, sideName, sides, sizeName, size) => {
  sides = Array.isArray(sides) ? sides : [sides];

  // kind = 'padding'
  // side = 'Horizontal'
  // size = units(2)
  // => {paddingHorizontal: units(2)}
  const style = {};
  sides.forEach(side => Object.assign(style, {[`${kind}${side}`]: size}));

  // kindName = 'p'
  // sideName = 'h'
  // sizeName = '2'
  // => {ph2: style}
  return {[`${kindName}${sideName}${sizeName}`]: style};
};

// prettier-ignore
const spacingKinds = [
  ['m', 'margin'],
  ['p', 'padding'],
];

// prettier-ignore
const spacingSides = [
  ['', ''],
  ['x', ['Left', 'Right']],
  ['y', ['Top', 'Bottom']],
  ['t', 'Top'],
  ['r', 'Right'],
  ['b', 'Bottom'],
  ['l', 'Left'],
];

// prettier-ignore
const spacingSizes = [
  ['0', 0],
  ['a', 'auto'],
  ['f', '100%'],
];

const maxPixels = 20;
for (let i = 1; i <= maxPixels; ++i) {
  spacingSizes.push([`${i}p`, pxs(i)]);
  spacingSizes.push([`n${i}p`, pxs(-i)]);
}

const maxUnits = 40;
for (let i = 1; i <= maxUnits; ++i) {
  spacingSizes.push([`${i}`, units(i)]);
  spacingSizes.push([`n${i}`, units(-i)]);
}

const spacingStyles = {};
spacingKinds.forEach(kind =>
  spacingSides.forEach(side =>
    spacingSizes.forEach(size =>
      Object.assign(spacingStyles, buildSpacing(...kind, ...side, ...size)),
    ),
  ),
);

export default spacingStyles;
