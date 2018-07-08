import {css, injectGlobal} from 'emotion';
import {invariant, lookup} from 'wedding/utils/functional';
import {base, units, pxs, fonts, colors as _colors, mediaQuery} from './consts';

/**
 * Global styles.
 */

import 'normalize.css';
import 'reset.css';
import './fonts';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: ${base - 2}px;
    font-family: ${fonts.normal};
    -webkit-font-smoothing: antialiased;
    background-color: ${_colors.bg.light};

    ${mediaQuery('l')} {
      font-size: ${base}px;
    }
  }
`;

/**
 * Export constants and utilities.
 */

export {cx, keyframes, injectGlobal} from 'emotion';
export * from './consts';
export * from './utils';

/**
 * Export classes.
 */

import borders from './borders';
import colors from './colors';
import layout from './layout';
import misc from './misc';
import positioning from './positioning';
import sizing from './sizing';
import spacing from './spacing';
import text from './text';

const sheet = {
  ...borders,
  ...colors,
  ...layout,
  ...misc,
  ...positioning,
  ...sizing,
  ...spacing,
  ...text,
};

const isStyleString = style => !!style.match(/[:{}]/);

const isStyleObject = style =>
  Object.values(style).every(value => typeof value !== 'object') ||
  Object.keys(style).some(key => key.match(/\W/));

const getStyleForClass = (sheet, _class) => {
  const [name, breakpoint] = _class.split('-');
  const style = lookup(sheet, ...name.split('.'));

  return !style || !isStyleObject(style)
    ? null
    : breakpoint
      ? {[mediaQuery(breakpoint)]: style}
      : style;
};

const getStylesForClass = (sheets, _class) => {
  const styles = sheets
    .map(sheet => getStyleForClass(sheet, _class))
    .filter(Boolean);

  invariant(styles.length, `Unknown class: ${_class}`);
  return styles;
};

const getStylesForClasses = (sheets, classes) =>
  classes
    .split(' ')
    .filter(Boolean)
    .reduce(
      (styles, _class) => styles.concat(getStylesForClass(sheets, _class)),
      [],
    );

const getStylesForArg = (sheets, arg) =>
  typeof arg === 'string' && !isStyleString(arg)
    ? getStylesForClasses(sheets, arg)
    : arg;

const getStyles = (...sheets) => {
  const fn = (...args) =>
    css(
      args
        .filter(Boolean)
        .reduce(
          (styles, arg) => styles.concat(getStylesForArg(sheets, arg)),
          [],
        ),
    );

  fn.extend = (...moreSheets) => getStyles(...sheets.concat(moreSheets));

  return fn;
};

export default getStyles(sheet);

/**
 * Main styles.
 */

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  main {
    font-size: ${pxs(18)};
    line-height: 1.4;

    .big {
      font-size: ${pxs(20)};
    }

    section {
      margin-top: ${units(15)}
    }

    h3, p {
      margin-top: ${units(5)}
    }

    h3 {
      ${css(text.text.h2)}
      ${css(colors.fg.black)}
      text-align: center;

      ${mediaQuery('m')} {
        text-align: initial;
      }
    }
  }
`;
