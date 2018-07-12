import {css, injectGlobal} from 'emotion';
import {invariant, lookup} from 'wedding/utils/functional';

import {
  neg,
  pxs,
  base,
  units,
  fonts,
  colors as _colors,
  mediaQuery,
} from './consts';

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
    font-family: ${fonts.body};
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
    /**
     * Sizing.
     */

    font-size: ${pxs(17)};
    line-height: 1.4;

    .big {
      font-size: ${pxs(21)};
      line-height: 1.5;
    }

    .small {
      font-size: ${pxs(15)};
    }

    /**
     * Headings.
     */

    h3 {
      ${css(text.text.h2)}
      ${css(colors.fg.black)}
      ${css(colors.bg.light)}

      // Ensure light background goes edge-to-edge on viewport.
      margin-left: ${neg(units(5))};
      padding-left: ${neg(units(5))};
      margin-right: ${neg(units(5))};
      padding-right: ${neg(units(5))};

      // Make sticky (using emperical measurements of Header).
      text-align: center;
      position: sticky;
      padding-top: ${units(3)};
      top: ${units(15)};
      z-index: 1;

      &::after {
        content: "";
        position: absolute;
        top: 100%;
        right: 0;
        left: 0;
        height: ${units(6)};
        background: linear-gradient(${_colors.bg.light}, ${_colors.bg.light}00);
      }

      ${mediaQuery('m')} {
        ${css(text.text.h1)}
        margin-left: 0;
        margin-right: 0;
        padding-left: 0;
        padding-right: 0;
        padding-top: 0;
        text-align: initial;
        position: static;

        &::after {
          display: none;
        }
      }
    }

    h4 {
      ${css(text.text.h3)}
      ${css(colors.fg.black)}
      text-align: center;
    }

    h5 {
      ${css(text.text.sh1)}
      ${css(colors.fg.accent)}
    }

    /**
     * Accents.
     */

    em {
      font-family: ${fonts.headings};
    }

    strong {
      font-weight: 600;
    }

    .box {
      position: relative;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        background: ${_colors.fg.accent}10;
        border-radius: ${units(1)};
        margin: ${neg(units(2))};

        ${mediaQuery('m')} {
          margin: ${neg(pxs(10))};
        }
      }
    }

    /**
     * Links.
     */

    p {
      a {
        ${css(misc.link.plain)}
      }
    }

    h3, h4, h5 {
      a {
        ${css(misc.link.h2)}
      }
    }

    a:focus,
    a:hover {
      img {
        opacity: 0.875;
      }
    }

    /**
     * Images.
     */

    img {
      border-radius: ${units(1)};
    }

    /**
     * Spacing.
     */

    article {
      padding-top: ${units(5)};
      margin-top: ${units(10)};
      min-height: 80vh;

      ${mediaQuery('m')} {
        padding-top: ${units(22.75)};

        &:first-child {
          padding-top: 0;
        }
      }
    }

    h3, h4, h5 {
      margin-top: ${units(10)};

      & + p {
        margin-top: ${units(3)};
      }
    }

    // The h5 style has a lot of space at the bottom already.
    h5 + p {
      margin-top: ${units(1)};
    }

    p {
      margin-top: ${units(5)};
    }
  }
`;
