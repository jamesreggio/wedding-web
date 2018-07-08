import {mergeClasses} from 'wedding/utils/containers';

import Filler from './Filler';
import Travel from './Travel';
import TheCouple from './TheCouple';

const Content = mergeClasses(() => (
  <main>
    <section id="couple">
      <h3>The Couple</h3>
      <TheCouple />
    </section>
    <section id="ceremony">
      <h3>The Ceremony</h3>
      <Filler />
    </section>
    <section id="travel">
      <h3>Travel &amp; Lodging</h3>
      <Travel />
    </section>
    <section id="questions">
      <h3>Gifts &amp; Questions</h3>
      <Filler />
    </section>
  </main>
));

export default Content;
