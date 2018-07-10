import css from 'wedding/styles';
import {mergeClasses} from 'wedding/utils/containers';

const Place = mergeClasses(() => (
  <h2 className={css('text.sh2 fg.accent')}>
    <span className={css('disp.blk')}>December 1, 2018</span>
    <span className={css('disp.blk')}>The Hall of Springs</span>
    <span className={css('disp.blk')}>Saratoga Springs, New York</span>
  </h2>
));

export default Place;
