import {units, colors} from './consts';

/**
 * Border radius styles.
 *
 * * Names are a predictable shorthand to simplify frequent use.
 * * Sizes are in multiples of `units`.
 *
 * See `radiusSides` and `radiusSizes` below for abbreviations.
 *
 * Examples:
 *
 *    d1  // => {borderRadius:        units(1)}
 *    dt2 // => {borderTopLeftRadius: units(2), borderTopRightRadius: units(2)}
 */

const buildRadius = (sideName, sides, sizeName, size) => {
  sides = Array.isArray(sides) ? sides : [sides];

  // side = 'Top'
  // size = units(3)
  // => {
  //   borderTopLeftRadius:  units(3),
  //   borderTopRightRadius: units(3),
  // }
  const style = {};
  sides.forEach(side => Object.assign(style, {[`border${side}Radius`]: size}));

  // sideName = 't'
  // sizeName = '3'
  // => {dt3: style}
  return {[`d${sideName}${sizeName}`]: style};
};

// prettier-ignore
const radiusSides = [
  ['', ''],
  ['t', ['TopLeft', 'TopRight']],
  ['b', ['BottomLeft', 'BottomRight']],
];

// prettier-ignore
const radiusSizes = [
  ['r', '50%'],
  ['1', units(1)],
  ['2', units(2)],
  ['3', units(3)],
  ['4', units(4)],
];

const radiusStyles = {};
radiusSides.forEach(side =>
  radiusSizes.forEach(size =>
    Object.assign(radiusStyles, buildRadius(...side, ...size)),
  ),
);

/**
 * Border styles.
 *
 * * Names are a predictable shorthand to simplify frequent use.
 * * Sizes are in multiples of actual pixels.
 *
 * See `borderSides`, `borderSizes`, and `borderColors` below for abbreviations.
 *
 * Examples:
 *
 *    b1pl   // => {borderWidth:    1, borderColor:    colors.border.light}
 *    bt1pd  // => {borderTopWidth: 1, borderTopColor: colors.border.dark}
 */

const buildBorder = (sideName, sides, sizeName, size, colorName, color) => {
  sides = Array.isArray(sides) ? sides : [sides];

  // side = 'Left'
  // size = 1
  // color = '#00000018'
  // => {
  //   borderLeftWidth: 1,
  //   borderLeftColor: '#00000018',
  //   borderLeftStyle: 'solid',
  // }
  const style = {};
  sides.forEach(side =>
    Object.assign(style, {
      [`border${side}Width`]: size,
      [`border${side}Color`]: color,
      [`border${side}Style`]: 'solid',
    }),
  );

  // sideName = 'l'
  // sizeName = '1p'
  // colorName = 'l'
  // => {bl1pl: style}
  return {[`b${sideName}${sizeName}${colorName}`]: style};
};

// prettier-ignore
const borderSides = [
  ['', ''],
  ['t', 'Top'],
  ['r', 'Right'],
  ['b', 'Bottom'],
  ['l', 'Left'],
  ['x', ['Top', 'Bottom']],
  ['y', ['Left', 'Right']],
];

// prettier-ignore
const borderSizes = [
  ['1p', 1],
  ['2p', 2],
  ['3p', 3],
  ['4p', 4],
];

// prettier-ignore
const borderColors = [
  ['a',  colors.fg.accent],
  ['cc', 'currentColor'],
];

const borderStyles = {};
borderSides.forEach(side =>
  borderSizes.forEach(size =>
    borderColors.forEach(color =>
      Object.assign(borderStyles, buildBorder(...side, ...size, ...color)),
    ),
  ),
);

export default {...radiusStyles, ...borderStyles};
