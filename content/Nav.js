import {mergeClasses} from 'wedding/utils/containers';
import css from 'wedding/styles';

const Nav = mergeClasses(() => (
  <nav className={css('text.h3 fg.black')}>
    <ul>
      <li>
        <a href="#travel" className={css('link.h1')}>
          Travel &amp; Lodging
        </a>
      </li>
      <li className={css('mt4')}>
        <a href="#questions" className={css('link.h1')}>
          Gifts &amp; Questions
        </a>
      </li>
    </ul>
  </nav>
));

export default Nav;
