import {mergeClasses} from 'wedding/utils/containers';
import css, {nbsp} from 'wedding/styles';

const Names = mergeClasses(() => (
  <h1 className={css('flex.row items.center disp.init-m')}>
    <span aria-label="The wedding of" />
    <span aria-label="Cheston Lee" className={css('disp.blk text.h1 fg.black')}>
      <span>Cheston</span>
      <span className={css('disp.none disp.init-m')}>{nbsp}Lee</span>
    </span>
    <span aria-label="and" className={css('flex.row items.center mx1 mx2-m')}>
      <span className={css('flex.1 bg.accent h2p mr2')} />
      <span className={css('text.h1 text.h3-m fg.accent fg.black-m')}>
        &amp;
      </span>
      <span className={css('flex.1 bg.accent h2p ml5p')} />
    </span>
    <span
      aria-label="James Reggio"
      className={css('disp.blk text.h1 fg.black')}
    >
      <span>James</span>
      <span className={css('disp.none disp.init-m')}>{nbsp}Reggio</span>
    </span>
  </h1>
));

export default Names;
