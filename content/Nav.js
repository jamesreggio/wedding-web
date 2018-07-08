import {mergeClasses} from 'wedding/utils/containers';
import css from 'wedding/styles';

const Nav = mergeClasses(() => (
  <nav className={css('text.h2 fg.black')}>
    <ul>
      <li>
        <a href="#couple" className={css('link.text')}>
          The Couple
        </a>
      </li>
      <li className={css('mt4')}>
        <a href="#ceremony" className={css('link.text')}>
          The Ceremony
        </a>
      </li>
      <li className={css('mt4')}>
        <a href="#travel" className={css('link.text')}>
          Travel &amp; Lodging
        </a>
      </li>
      <li className={css('mt4')}>
        <a href="#questions" className={css('link.text')}>
          Gifts &amp; Questions
        </a>
      </li>
    </ul>
  </nav>
));

export default Nav;
