import {colors} from './consts';

/**
 * Color styles.
 *
 * Examples:
 *
 *    fg.light  // => {color:           colors.fg.light}
 *    bg.black  // => {backgroundColor: colors.bg.black}
 */

// prettier-ignore
const colorStyles = {
  fg: {},
  bg: {},
};

Object.entries(colors.fg).forEach(([name, color]) => {
  colorStyles.fg[name] = {color};
});

Object.entries(colors.bg).forEach(([name, backgroundColor]) => {
  colorStyles.bg[name] = {backgroundColor};
});

/**
 * Opacity styles.
 */

// prettier-ignore
const opacityStyles = {
  opacity: {
    null:  {opacity: 0.0},
    light: {opacity: 0.25},
    mid:   {opacity: 0.5},
    dark:  {opacity: 0.75},
  },
};

export default {...colorStyles, ...opacityStyles};
