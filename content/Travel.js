import {mergeClasses} from 'wedding/utils/containers';
import css, {neg, pxs, nbsp, mediaQuery} from 'wedding/styles';

const hotels = [
  {
    name: 'The Embassy Suites',
    img: require('wedding/static/images/embassy-suites.jpg'),
    href:
      'https://embassysuites.hilton.com/en/es/groups/personalized/A/ALBESES-LRW-20181130/index.jhtml?WT.mc_id=POG',
    type: 'Solid',
    description: `
      This Embassy Suites opened in 2015, so the rooms are modern and
      spacious. It's only one block away from Saratoga's main street, so
      it's easy to explore the town on foot and take in the Christmas
      spirit.
    `,
    additional: (
      <>
        <div className="box">
          <p className={css('mt4')}>
            They&apos;ve agreed to a rate of <strong>$149</strong> per night on
            Friday and Saturday, and <strong>$129</strong> on Sunday.
          </p>
          <p className={css('mt2')}>
            To book, visit{' '}
            <a
              href="https://embassysuites.hilton.com/en/es/groups/personalized/A/ALBESES-LRW-20181130/index.jhtml?WT.mc_id=POG"
              rel="noopener noreferrer"
              target="_blank"
            >
              this site
            </a>{' '}
            by <em>October 30</em>, or mention <strong>Group Code: LRW</strong>{' '}
            when calling.
          </p>
        </div>
      </>
    ),
  },
  {
    name: 'The Gideon Putnam',
    img: require('wedding/static/images/gideon-putnam.jpg'),
    href:
      'https://www.tripadvisor.com/Hotel_Review-g48562-d99019-Reviews-The_Gideon_Putnam-Saratoga_Springs_New_York.html',
    type: 'Classic',
    description: `
      The Gideon Putnam is a Saratoga institution, located just steps away from
      the Hall of Springs (our wedding venue) within the beautiful Spa State
      Park. Its historic spa boasts 42 treatment rooms fed by natural springs.
    `,
    additional: (
      <>
        <div className="box">
          <p className={css('mt4')}>
            They&apos;ve agreed to a rate of <strong>$110</strong> per night for
            standard rooms and <strong>$160</strong> per night for suites.
          </p>
          <p className={css('mt2')}>
            To book, visit{' '}
            <a
              href="https://www.gideonputnam.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              this site
            </a>, select <strong>Code Type: Promo</strong> and use{' '}
            <strong>Code: WEDD2018</strong>, or call.
          </p>
        </div>
      </>
    ),
  },
  {
    name: 'The Adelphi',
    img: require('wedding/static/images/adelphi-alt.jpg'),
    href:
      'https://www.tripadvisor.com/Hotel_Review-g48562-d114517-Reviews-The_Adelphi_Hotel-Saratoga_Springs_New_York.html',
    type: 'Chic',
    description: `
      The Adelphi is Saratoga's newest boutique hotel. It's a masterful
      reimagining of a historic building, located right in the middle of
      Broadway in downtown Saratoga.
    `,
  },
  {
    name: 'The Saratoga Arms',
    img: require('wedding/static/images/saratoga-arms.jpg'),
    href:
      'https://www.tripadvisor.com/Hotel_Review-g48562-d80176-Reviews-Saratoga_Arms-Saratoga_Springs_New_York.html',
    type: 'Charming',
    description: `
      The Saratoga Arms is the town's premiere B&B, with thirty-one distinctive
      rooms and a farm-to-table breakfast every morning. Note that children
      under 12 are not permitted.
    `,
  },
];

const Hotel = mergeClasses(
  ({name, img, href, type, description, additional}) => (
    <div className="small">
      <a
        href={href}
        title={`${name} on TripAdvisor`}
        rel="noopener noreferrer"
        target="_blank"
        className={css('disp.blk lh0')}
      >
        <img src={img} alt={`Exterior of ${name}`} className={css('wf')} />
      </a>
      <h5 className={css('mt4')}>
        <a
          href={href}
          title={`${name} on TripAdvisor`}
          rel="noopener noreferrer"
          target="_blank"
        >
          {name}
        </a>
      </h5>
      <p className={css('mt1')}>
        <em className={css('weight.600')}>
          {type}
          <span aria-hidden="true"> &middot; </span>
        </em>
        {description}
      </p>
      {additional}
    </div>
  ),
);

const Hotels = mergeClasses(() => (
  <div className={css('flex.row flex.wrap mrn5-s mrn7-m')}>
    {hotels.map(hotel => (
      <Hotel
        {...hotel}
        key={hotel.name}
        className={css('mt10 wf pr5-s pr7-m', {
          [mediaQuery('s')]: {
            maxWidth: '50%',
          },
        })}
      />
    ))}
  </div>
));

const Travel = () => (
  <>
    <p className="big">
      We&apos;re celebrating our wedding in Cheston&apos;s hometown of{' '}
      <a
        title="More about Saratoga Springs"
        href="https://www.saratoga.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        Saratoga{nbsp}Springs
      </a>, three hours north of New York City.
    </p>
    <div className={css('clear.both')}>
      <img
        alt="Downtown Saratoga Springs at night"
        src={require('wedding/static/images/downtown-saratoga.jpg')}
        className={css('mt5 mbn1 wf float.right-s m0-s mt1-s ml5-s ml7-m', {
          [mediaQuery('s')]: {
            width: pxs(285),
            height: pxs(180),
          },

          [mediaQuery('m')]: {
            marginRight: neg(pxs(40)),
          },

          [mediaQuery('xl')]: {
            width: pxs(317),
            height: pxs(200),
            marginRight: neg(pxs(120)),
          },
        })}
      />
      <p>
        Saratoga gets its name from the{' '}
        <a
          title="More about Saratoga's mineral springs"
          href="https://www.saratoga.com/things-to-do/parks-landmarks-nature/mineral-springs/"
          rel="noopener noreferrer"
          target="_blank"
        >
          twenty-one mineral springs
        </a>{' '}
        throughout town, but it&apos;s best known for its{' '}
        <a
          title="More about Saratoga's flat-track horse racing"
          href="https://www.nyra.com/saratoga/about/history-of-saratoga"
          rel="noopener noreferrer"
          target="_blank"
        >
          Thoroughbred racetrack
        </a>, which still draws in over 20,000 spectators each day during the
        summer months.
      </p>
      <p>
        In its off-season, Saratoga is a quintessential Upstate town. It has a
        walkable main street with dozens of shops and restaurants, and beautiful
        light displays in the lead-up to Christmas.
      </p>
      <p>
        We think you&apos;ll enjoy your visit, and we&apos;re looking forward to
        welcoming you to Upstate New York.
      </p>
    </div>
    <h4>
      Getting to Saratoga<span className={css('disp.none disp.init-s')}>
        {' '}
        Springs
      </span>
    </h4>
    <p>
      Saratoga is{' '}
      <a
        title="Saratoga Springs on Google Maps"
        href="https://goo.gl/maps/coQyo56weNT2"
        rel="noopener noreferrer"
        target="_blank"
      >
        located 35 miles north
      </a>{' '}
      of Albany, the capital of New York, making it easily accessible by plane
      and train.
    </p>
    <p className="box">
      Cheston&apos;s parents will be hosting a casual brunch at their home in
      Saratoga from <em>10am</em> to <em>2pm</em> on Sunday following the
      wedding, so please consider joining us when you make your travel plans.
    </p>
    <h5>By plane</h5>
    <p>
      Albany International Airport (<strong>ALB</strong>) is the nearest
      full-service airport,{' '}
      <a
        title="Albany International Airport on Google Maps"
        href="https://goo.gl/maps/tkzCkRaUqqo"
        rel="noopener noreferrer"
        target="_blank"
      >
        located about 45 minutes south
      </a>{' '}
      of Saratoga Springs. It&apos;s a small, easy to navigate airport with
      typical amenities, including onsite car rentals, TSA Pre-check, and Uber
      and Lyft service.
    </p>
    <p>
      For guests traveling <strong>from Michigan</strong>, Delta operates{' '}
      <a
        title="Flights from Detroit on Google Flights"
        href="https://www.google.com/flights#flt=DTW.ALB.2018-11-30*ALB.DTW.2018-12-02;c:USD;e:1;sd:1;t:f"
        target="eblank"
      >
        four daily non-stop flights
      </a>{' '}
      between DTW and ALB. These two-hour flights are on smaller regional jets,
      which means that they have a tendency to fill up quickly. Consider booking
      your travel soon.
    </p>
    <p>
      For guests traveling <strong>from Texas or the West Coast</strong>, there
      are no direct flights to Albany. Delta, United, American, JetBlue and
      Southwest all offer flights with connections.
    </p>
    <p>
      As an alternative to Albany, you can fly to a New York City airport and
      take Amtrak to Albany or Saratoga. Read on for more details.
    </p>
    <h5>By train</h5>
    <p>
      Amtrak operates frequent train service throughout the Northeast to both
      Albany and Saratoga Springs. Amtrak trains are clean and spacious, and
      almost always on-time &mdash; plus there&apos;s no traffic or security to
      deal with. It&apos;s our preferred way to get to Saratoga.
    </p>
    <p>
      For guests traveling <strong>from New York City</strong>, search{' '}
      <a
        title="Search Amtrak tickets"
        href="https://www.amtrak.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        Amtrak&apos;s website
      </a>{' '}
      for trains departing Penn Station (<strong>NYP</strong>) to either
      Saratoga Springs (<strong>SAR</strong>) or Albany-Rensselaer (<strong>
        ALB
      </strong>).
    </p>
    <p>
      The Saratoga station is{' '}
      <a
        title="Saratoga's Amtrak Station on Google Maps"
        href="https://goo.gl/maps/RyszciEVhzw"
        rel="noopener noreferrer"
        target="_blank"
      >
        just minutes away
      </a>{' '}
      from downtown Saratoga, but only has two trains daily &mdash; one in the
      morning and evening. Albany, on the other hand, is{' '}
      <a
        title="Albany's Amtrak Station on Google Maps"
        href="https://goo.gl/maps/JjJadFeqk4C2"
        rel="noopener noreferrer"
        target="_blank"
      >
        located 45 minutes south
      </a>{' '}
      of Saratoga, but has eight trains per day.
    </p>
    <p>
      We recommend searching for trains to Saratoga first, and if you need
      greater flexibility, search for Albany instead. Travel to both cities
      takes approximately three hours and costs between $45 and $80 each way.{' '}
      <a
        title="Enterprise Rent-a-car at Albany's Amtrak Station"
        href="https://www.enterprise.com/en/car-rental/locations/us/ny/albany-rensselaer-train-station-242h.html"
        rel="noopener noreferrer"
        target="_blank"
      >
        Enterprise Rent-a-car
      </a>{' '}
      is available onsite at Albany-Rensselaer Station, or you can take Uber or
      Lyft from either station.
    </p>
    <p>
      For guests traveling <strong>from points south of New York City</strong>,
      search from your point of origin to either Saratoga Springs (SAR) or
      Albany-Rensselaer (ALB). You will see options to connect in Penn Station,
      and your fare will be lower than two separate tickets.
    </p>
    <p>
      For guests traveling <strong>from Massachusetts</strong>, there is one
      train daily to Albany-Rensselaer (ALB) between Boston&apos;s South Station
      (BOS) and Back Bay Station (BBY). It&apos;s approximately five hours of
      travel and costs between $25 and $80 each way.
    </p>
    <p>
      If you decide to fly to New York City and take the train north, consider
      flying into Newark (EWR) or Kennedy (JFK). Both of these airports have
      speedy public transit options that can get you directly to Penn Station.
    </p>
    <h4>
      Getting around Saratoga<span className={css('disp.none disp.init-s')}>
        {' '}
        Springs
      </span>
    </h4>
    <p>
      <strong>Uber</strong> and <strong>Lyft</strong> are available in Saratoga
      and the surrounding region. You can reliably request a car in under five
      minutes from most places in Saratoga and Albany.
    </p>
    <p>
      With the exception of the Gideon Putnam Hotel (which is adjacent to the
      wedding venue and located within a park), all of our preferred hotels are
      in downtown Saratoga, which is easy to explore on foot. We will attempt to
      arrange shuttles between these hotels and the wedding venue closer to the
      date.
    </p>
    <p>
      If you&apos;re arriving by plane, Albany International Airport has a
      number of rental car providers onsite. Parking is free at all of our
      preferred hotels. and generally easy to find throughout downtown Saratoga.
      It&apos;s also free and plentiful at our wedding venue, though we&apos;d
      prefer you shuttle or use a ride-sharing app.
    </p>
    <h4>
      Places to stay in Saratoga<span className={css('disp.none disp.init-s')}>
        {' '}
        Springs
      </span>
    </h4>
    <p>
      Saratoga has a wide range of accomodation options, but these are our
      favorites. We&apos;ve arranged for special rates at the{' '}
      <strong>Embassy Suites</strong> and <strong>Gideon Putnam</strong>, which
      you&apos;ll find below.
    </p>
    <p className="box">
      If you have any trouble booking using our room rates, please get in touch
      with us via email at{' '}
      <a href="mailto:james.reggio@gmail.com">james.reggio@gmail.com</a> or{' '}
      <a href="mailto:chestonlloyd@gmail.com">chestonlloyd@gmail.com</a>.
    </p>
    <Hotels />
  </>
);

export default Travel;
