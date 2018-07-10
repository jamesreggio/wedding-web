import {mergeClasses} from 'wedding/utils/containers';
import css, {layout, colors} from 'wedding/styles';

const Trees = mergeClasses(() => (
  <div className={css('events.none')}>
    <img
      alt=""
      src={require('wedding/static/images/trees.png')}
      className={css({height: layout.treesHeight})}
    />
    <div
      className={css('pos.abs tn10 b0 l0 r0 zn1', {
        background: `linear-gradient(${colors.bg.light}00, #babbc1d0)`,
      })}
    />
  </div>
));

export default Trees;
