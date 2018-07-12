import {mergeClasses} from 'wedding/utils/containers';

import Couple from './Couple';
import Travel from './Travel';
import Questions from './Questions';

const Content = mergeClasses(() => (
  <main>
    <article id="couple">
      <Couple />
    </article>
    <article id="travel">
      <h3>Travel &amp; Lodging</h3>
      <Travel />
    </article>
    <article id="questions">
      <h3>Gifts &amp; Questions</h3>
      <Questions />
    </article>
  </main>
));

export default Content;
