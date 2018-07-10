import {units, colors} from './consts';

/**
 * Miscellaneous styles.
 */

// prettier-ignore
export default {
  events: {
    none: {pointerEvents: 'none'},
    auto: {pointerEvents: 'auto'},
  },

  list: {
    inline: `
      display: inline;

      & > li {
        display: inline;
      }
    `,

    space: {
      s: `
        display: inline;

        & > li {
          display: inline;
          margin-left: ${units(1)};

          &:first-child {
            margin-left: 0;
          }
        }
      `,

      m: `
        display: inline;

        & > li {
          display: inline;
          margin-left: ${units(3)};

          &:first-child {
            margin-left: 0;
          }
        }
      `,

      l: `
        display: inline;

        & > li {
          display: inline;
          margin-left: ${units(6)};

          &:first-child {
            margin-left: 0;
          }
        }
      `,
    }
  },

  link: {
    none: `
      color: inherit;
      text-decoration: none;
      outline: 0;
    `,

    image: `
      color: inherit;
      text-decoration: none;

      &:focus,
      &:hover {
        opacity: 0.75;
      }
    `,

    plain: `
      color: inherit;
      text-decoration: underline ${colors.fg.accent}80;

      &:focus,
      &:hover {
        color: ${colors.fg.accent};
      }
    `,

    h1: `
      color: inherit;
      text-decoration: none;
      padding-bottom: 1px;

      &:focus,
      &:hover {
        outline: 0;
        border-bottom: 2px solid ${colors.fg.accent};
      }
    `,

    h2: `
      color: inherit;
      text-decoration: none;

      &:focus,
      &:hover {
        outline: 0;
        border-bottom: 1px solid ${colors.fg.accent};
      }
    `,
  },
};
