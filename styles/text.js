/**
 * Typographical styles.
 */

const text = {
  //XXX
};

// Nest the above styles under `text`.
const textStyles = {text};

/**
 * Typographical utilities.
 */

// prettier-ignore
const utilStyles = {
  lh0:       {lineHeight: 0},

  weight: {
    200:     {fontWeight: '200'},
    300:     {fontWeight: '300'},
    400:     {fontWeight: '400'},
    500:     {fontWeight: '500'},
    600:     {fontWeight: '600'},
    700:     {fontWeight: '700'},
    800:     {fontWeight: '800'},
  },

  style: {
    italic:  {fontStyle:   'italic'},
    tabular: {fontVariant: 'tabular-nums'},
  },

  align: {
    left:    {textAlign: 'left'},
    center:  {textAlign: 'center'},
    right:   {textAlign: 'right'},
  },

  tfm: {
    upper:   {textTransform: 'uppercase'},

    trunc: {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
    },
  },
};

export default {...textStyles, ...utilStyles};
