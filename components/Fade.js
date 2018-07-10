import {mergeClasses} from 'wedding/utils/containers';
import css, {colors} from 'wedding/styles';

const Fade = mergeClasses(() => (
  <div
    className={css('h7', {
      background: `linear-gradient(${colors.bg.light}, ${colors.bg.light}00)`,
    })}
  />
));

export default Fade;
