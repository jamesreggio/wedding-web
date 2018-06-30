/**
 * Layout styles.
 */

// prettier-ignore
export default {
  zn1:        {zIndex: -1},
  z0:         {zIndex: 0},
  z1:         {zIndex: 1},

  on1:        {order: -1},
  o0:         {order: 0},
  o1:         {order: 1},

  disp: {
    none:     {display: 'none'},
    init:     {display: 'initial'},
    in:       {display: 'inline'},
    blk:      {display: 'block'},
    inblk:    {display: 'inline-block'},
  },

  flex: {
    // Parent
    row:      {display: 'flex', flexDirection: 'row'},
    rowRev:   {display: 'flex', flexDirection: 'row-reverse'},
    col:      {display: 'flex', flexDirection: 'column'},
    colRev:   {display: 'flex', flexDirection: 'column-reverse'},
    center:   {display: 'flex', justifyContent: 'center', alignItems: 'center'},

    // Child
    1:        {flex: 1},
    auto:     {flexGrow: 1, flexShrink: 1, flexBasis: 'auto'},
    full:     {flex: 1, alignSelf: 'stretch'},
    wrap:     {flexWrap: 'wrap'},
    shrink:   {flexShrink: 1},
  },

  justify: {
    start:    {justifyContent: 'flex-start'},
    end:      {justifyContent: 'flex-end'},
    center:   {justifyContent: 'center'},
    around:   {justifyContent: 'space-around'},
    between:  {justifyContent: 'space-between'},
    evenly:   {justifyContent: 'space-evenly'},
  },

  items: {
    start:    {alignItems: 'flex-start'},
    end:      {alignItems: 'flex-end'},
    center:   {alignItems: 'center'},
    stretch:  {alignItems: 'stretch'},
  },

  self: {
    start:    {alignSelf: 'flex-start'},
    end:      {alignSelf: 'flex-end'},
    center:   {alignSelf: 'center'},
    stretch:  {alignSelf: 'stretch'},
  },

  overflow: {
    hidden:   {overflow: 'hidden'},
    visible:  {overflow: 'visible'},
  },

  visibility: {
    hidden:   {visibility: 'hidden'},
    visible:  {visibility: 'visible'},
  },
};
