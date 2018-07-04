import {units, colors} from './consts';

/**
 * Miscellaneous styles.
 */

// prettier-ignore
export default {
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

    plain: `
      color: inherit;
      text-decoration: none;

      &:hover {
        opacity: 0.75;
      }
    `,

    text: `
      color: inherit;
      text-decoration: none;
      padding-bottom: 1px;

      &:focus,
      &:hover {
        outline: 0;
        border-bottom: 2px solid ${colors.fg.accent};
      }
    `,

    darken: `
      position: relative;
      overflow: hidden;
      display: inline-block;
      color: inherit;
      text-decoration: none;

      &::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: transparent;
      }

      &:hover {
        &::after {
          background: #00000020;
        }
      }
    `,

    cell: `
      position: relative;
      display: block;
      color: inherit;
      text-decoration: none;

      &::before {
        content: "";
        position: absolute;
        top: -1px;
        right: 0;
        bottom: 0;
        left: 0;
        background: transparent;
      }

      &:hover {
        &::before {
          background: #00000008;
        }
      }
    `,
  },
};
