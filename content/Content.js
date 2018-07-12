import {mergeClasses} from 'wedding/utils/containers';

import Filler from './Filler';
import Couple from './Couple';
import Travel from './Travel';

const Content = mergeClasses(() => (
  <main>
    <article id="couple">
      <Couple />
    </article>
    <article id="ceremony">
      <h3>The Ceremony</h3>
      <Filler />
    </article>
    <article id="travel">
      <h3>Travel &amp; Lodging</h3>
      <Travel />
    </article>
    <article id="questions">
      <h3>Gifts &amp; Questions</h3>
      <Filler />
    </article>
  </main>
));

export default Content;
