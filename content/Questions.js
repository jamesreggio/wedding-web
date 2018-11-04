import css from 'wedding/styles';

const Questions = () => (
  <>
    <h4>Gift Registries</h4>
    <p>
      We recognize the challenges involved in traveling to Saratoga, and would
      like to emphasize that your presence is the greatest gift you can offer.
    </p>
    <p>
      However, we have established registries at the following online retailers:
    </p>
    <h5 className={css('mt2')}>
      <a
        href="https://www.zola.com/registry/chestonandjames"
        rel="noopener noreferrer"
        target="_blank"
      >
        Zola
      </a>
    </h5>
    <h5 className={css('mt2')}>
      <a
        href="https://www.amazon.com/wedding/share/chestonandjames"
        rel="noopener noreferrer"
        target="_blank"
      >
        Amazon
      </a>
    </h5>
    <h5 className={css('mt2')}>
      <a
        href="https://www.travelersjoy.com/chestonandjames"
        rel="noopener noreferrer"
        target="_blank"
      >
        Traveler&apos;s Joy
      </a>
    </h5>

    <h4>Common Questions</h4>
    <h5>Are children invited?</h5>
    <p>
      Absolutely, we&apos;d welcome your entire family. Please note this when
      you RSVP and we&apos;ll be sure to have appropriate meals for your kids.
    </p>
    <h5>What is the requested attired?</h5>
    <p>Cocktail attire, please.</p>
    <h5>What will the weather be like?</h5>
    <p>
      It&apos;ll be the beginning of winter in Saratoga, so the weather will be
      a toss-up between mid-40s and sunny, and mid-20s and snowy. Best to
      prepare for both (and consider not renting a car if you&apos;re unfamiliar
      with driving in adverse weather).
    </p>
  </>
);

export default Questions;
