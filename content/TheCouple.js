import css from 'wedding/styles';

const TheCouple = () => (
  <>
    <article>
      <h4>This is the Beginning</h4>
      <p>
        Cheston and James were introduced through a mutual friend and met at St
        Vincent wine bar on May 8th of 2013. They hit it off right away --
        drinking and talking until the restaurant closed. Serendipitously
        Cheston received a free pair of tickets to a performance by Christa
        Bell(of Twin Peaks fame) the day afterwards which turned into a sudden
        second date. From there James and Cheston quickly fell in love and grew
        together, travelling to the Santa Cruz mountains, Seattle, Vancouver and
        Hawaii in their first year. After a year together they moved into an
        apartment in San Francisco’s Mission district with the two cats.
      </p>
      <div className={css('flex.col flex.row-m')}>
        <div className={css('flex.col')}>
          <img
            src={require('wedding/static/images/owls.png')}
            alt=""
            className={css('m1')}
          />
          <img
            src={require('wedding/static/images/campaign.png')}
            alt=""
            className={css('m1')}
          />
        </div>
        <div className={css('flex.col')}>
          <img
            src={require('wedding/static/images/vancouver_bridge.png')}
            alt=""
            className={css('m1')}
          />
          <img
            src={require('wedding/static/images/mudboys.png')}
            alt=""
            className={css('m1')}
          />
        </div>
      </div>
      <p>
        There they had some adventures, explored the city, grew their careers
        and friend groups. Falling more in love along the way. Cheston had the
        opportunity to join the Hillary Clinton campaign in mid-2015 which drew
        him to New York. Thankfully, James was game to join him and embark on
        another journey that they could have only imagined. After a long year
        and a half of hard work in New York they took off and travelled across
        Asia. Cat cafes and national protests in Korea, eating everything in
        sight across Japan, a motorcycle tour of Vietnam, relaxing on the beach
        in Thailand and spending a day at Disneyland in Hong Kong to cap it off.
      </p>
      <h4>Of the Rest of Their Lives</h4>
      <p>
        Even before they left for New York, Cheston knew he wanted to propose
        but getting engaged right before spending a year on a presidential
        campaign didn’t seem like the best time to plan a major life event. But
        Cheston was certain where he wanted to propose, Sutro Tower at the top
        of Twin Peaks in San Francisco; the spot where they first declared their
        love for each other and a frequent hiking destination in the city for
        the two.
      </p>
      <div className={css('flex.col flex.row-m')}>
        <div className={css('flex.col')}>
          <img
            src={require('wedding/static/images/huggin.png')}
            alt=""
            className={css('m1')}
          />
          <img
            src={require('wedding/static/images/engagement.png')}
            alt=""
            className={css('m1')}
          />
        </div>
        <div className={css('flex.col')}>
          <img
            src={require('wedding/static/images/mototour.png')}
            alt=""
            className={css('m1')}
          />
          <img
            src={require('wedding/static/images/tux.png')}
            alt=""
            className={css('m1')}
          />
        </div>
      </div>
      <p>
        He had it all planned out, Cheston. Easter Brunch at our favorite tea
        spot, hike up Twin Peaks, propose and head back into town for a surprise
        party with all of our friends. It was brilliant, if they author doesn’t
        say so himself, alas in the years spent in California there was a
        drought but no longer. Day of, it was pouring. So after brunch and a lot
        of goading, that yes in fact we did have to do this right now; the two
        made the hike after the rain had abated. Cheston proposed and he said
        yes(otherwise you’d be reading a very different story right now).
        Promptly atop the mountain it started pouring, they managed to get off
        the mountain and celebrated with friends and family.
      </p>
    </article>
  </>
);

export default TheCouple;
