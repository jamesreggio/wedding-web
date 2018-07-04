import css, {neg, pxs, units, nbsp, colors, mediaQuery} from 'wedding/styles';
import {mergeClasses} from 'wedding/utils/containers';

const headerHeight = pxs(90);
const sidebarWidth = units(60);
const contentWidth = units(200);
const treesHeight = pxs(182);

const Names = mergeClasses(() => (
  <h1 className={css('flex.row items.center disp.init-m')}>
    <span className={css('disp.blk text.h1 fg.black')}>
      <span>Cheston</span>
      <span className={css('disp.none disp.init-m')}>{nbsp}Lee</span>
    </span>
    <span className={css('flex.row items.center mx1 mx2-m')}>
      <span className={css('flex.1 bg.accent h2p mr2')} />
      <span
        aria-label="and"
        className={css('text.h1 text.h2-m fg.accent fg.black-m')}
      >
        &amp;
      </span>
      <span className={css('flex.1 bg.accent h2p ml5p')} />
    </span>
    <span className={css('disp.blk text.h1 fg.black')}>
      <span>James</span>
      <span className={css('disp.none disp.init-m')}>{nbsp}Reggio</span>
    </span>
  </h1>
));

const Header = mergeClasses(() => (
  <header>
    <div className={css('flex.col items.center bg.light pt5')}>
      <div>
        <Names />
        <div className={css('disp.none-m fg.accent bt2pcc mt2 mx10')} />
      </div>
    </div>
    <div
      className={css('self.stretch h7', {
        background: `linear-gradient(${colors.bg.light}, ${colors.bg.light}00)`,
      })}
    />
  </header>
));

const Place = mergeClasses(() => (
  <h2 className={css('text.sh1 fg.accent')}>
    <span className={css('disp.blk')}>December 1, 2018</span>
    <span className={css('disp.blk')}>The Hall of Springs</span>
    <span className={css('disp.blk')}>Saratoga Springs, New York</span>
  </h2>
));

const Nav = mergeClasses(() => (
  <nav className={css('text.h2 fg.black')}>
    <ul>
      <li>
        <a href="#couple" className={css('link.plain')}>
          The Couple
        </a>
      </li>
      <li className={css('mt4')}>
        <a href="#ceremony" className={css('link.plain')}>
          The Ceremony
        </a>
      </li>
      <li className={css('mt4')}>
        <a href="#travel" className={css('link.plain')}>
          Travel &amp; Lodging
        </a>
      </li>
      <li className={css('mt4')}>
        <a href="#questions" className={css('link.plain')}>
          Gifts &amp; Questions
        </a>
      </li>
    </ul>
  </nav>
));

const Sidebar = mergeClasses(() => (
  <div className={css('align.center')}>
    <header className={css('flex.col items.center')}>
      <Names />
      <Place className={css('mt15')} />
    </header>
    <Nav className={css('mt15')} />
  </div>
));

const Trees = mergeClasses(() => (
  <div>
    <img
      alt=""
      src={require('wedding/static/images/trees.png')}
      className={css({height: treesHeight})}
    />
    <div
      className={css('pos.abs tn10 b0 l0 r0 zn1', {
        background: `linear-gradient(${colors.bg.light}00, #babbc1d0)`,
      })}
    />
  </div>
));

const Content = mergeClasses(() => (
  <main>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
      tincidunt nisi. Praesent elementum gravida egestas. Curabitur vitae mattis
      diam. Praesent et augue et nisl sagittis maximus quis sit amet orci. Donec
      maximus urna risus, non posuere felis lobortis at. Nulla non hendrerit
      quam, eu molestie magna. Vivamus eu metus tortor. Praesent sit amet tempor
      diam. Praesent commodo urna at eros faucibus porttitor. Nullam placerat
      felis eu nisi pharetra scelerisque varius et risus. Etiam pulvinar risus
      mi, ut vehicula lacus porttitor a.
    </p>
    <p>
      Sed ut condimentum lorem. Proin imperdiet lectus ut nisl pellentesque
      ullamcorper. In hac habitasse platea dictumst. Cras id nibh ultricies,
      vestibulum lorem a, pulvinar metus. Nulla facilisi. Praesent facilisis
      magna a venenatis aliquam. Mauris fermentum elit sem, placerat semper
      sapien feugiat sit amet. Vivamus vehicula, ex eu tristique blandit, mi
      lectus viverra dui, vitae efficitur lorem orci eget purus. Quisque quis
      magna finibus, cursus risus at, blandit erat.
    </p>
    <p>
      Vivamus in enim non tellus malesuada vulputate. Sed gravida condimentum
      pretium. Pellentesque fringilla faucibus ex ut commodo. Phasellus eu nibh
      pharetra, viverra ante sed, ullamcorper nulla. Cras sit amet lorem sed
      diam vulputate ultricies. Nulla vulputate aliquam dolor pulvinar finibus.
      Sed vel vestibulum nulla, vel bibendum ante. Sed cursus ipsum ac varius
      ultrices. Nulla sit amet velit sit amet urna placerat ornare vitae vel
      dui. Suspendisse lobortis egestas eros, et tincidunt metus convallis non.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
      tincidunt nisi. Praesent elementum gravida egestas. Curabitur vitae mattis
      diam. Praesent et augue et nisl sagittis maximus quis sit amet orci. Donec
      maximus urna risus, non posuere felis lobortis at. Nulla non hendrerit
      quam, eu molestie magna. Vivamus eu metus tortor. Praesent sit amet tempor
      diam. Praesent commodo urna at eros faucibus porttitor. Nullam placerat
      felis eu nisi pharetra scelerisque varius et risus. Etiam pulvinar risus
      mi, ut vehicula lacus porttitor a.
    </p>
    <p>
      Sed ut condimentum lorem. Proin imperdiet lectus ut nisl pellentesque
      ullamcorper. In hac habitasse platea dictumst. Cras id nibh ultricies,
      vestibulum lorem a, pulvinar metus. Nulla facilisi. Praesent facilisis
      magna a venenatis aliquam. Mauris fermentum elit sem, placerat semper
      sapien feugiat sit amet. Vivamus vehicula, ex eu tristique blandit, mi
      lectus viverra dui, vitae efficitur lorem orci eget purus. Quisque quis
      magna finibus, cursus risus at, blandit erat.
    </p>
    <p>
      Vivamus in enim non tellus malesuada vulputate. Sed gravida condimentum
      pretium. Pellentesque fringilla faucibus ex ut commodo. Phasellus eu nibh
      pharetra, viverra ante sed, ullamcorper nulla. Cras sit amet lorem sed
      diam vulputate ultricies. Nulla vulputate aliquam dolor pulvinar finibus.
      Sed vel vestibulum nulla, vel bibendum ante. Sed cursus ipsum ac varius
      ultrices. Nulla sit amet velit sit amet urna placerat ornare vitae vel
      dui. Suspendisse lobortis egestas eros, et tincidunt metus convallis non.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
      tincidunt nisi. Praesent elementum gravida egestas. Curabitur vitae mattis
      diam. Praesent et augue et nisl sagittis maximus quis sit amet orci. Donec
      maximus urna risus, non posuere felis lobortis at. Nulla non hendrerit
      quam, eu molestie magna. Vivamus eu metus tortor. Praesent sit amet tempor
      diam. Praesent commodo urna at eros faucibus porttitor. Nullam placerat
      felis eu nisi pharetra scelerisque varius et risus. Etiam pulvinar risus
      mi, ut vehicula lacus porttitor a.
    </p>
    <p>
      Sed ut condimentum lorem. Proin imperdiet lectus ut nisl pellentesque
      ullamcorper. In hac habitasse platea dictumst. Cras id nibh ultricies,
      vestibulum lorem a, pulvinar metus. Nulla facilisi. Praesent facilisis
      magna a venenatis aliquam. Mauris fermentum elit sem, placerat semper
      sapien feugiat sit amet. Vivamus vehicula, ex eu tristique blandit, mi
      lectus viverra dui, vitae efficitur lorem orci eget purus. Quisque quis
      magna finibus, cursus risus at, blandit erat.
    </p>
    <p>
      Vivamus in enim non tellus malesuada vulputate. Sed gravida condimentum
      pretium. Pellentesque fringilla faucibus ex ut commodo. Phasellus eu nibh
      pharetra, viverra ante sed, ullamcorper nulla. Cras sit amet lorem sed
      diam vulputate ultricies. Nulla vulputate aliquam dolor pulvinar finibus.
      Sed vel vestibulum nulla, vel bibendum ante. Sed cursus ipsum ac varius
      ultrices. Nulla sit amet velit sit amet urna placerat ornare vitae vel
      dui. Suspendisse lobortis egestas eros, et tincidunt metus convallis non.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget
      tincidunt nisi. Praesent elementum gravida egestas. Curabitur vitae mattis
      diam. Praesent et augue et nisl sagittis maximus quis sit amet orci. Donec
      maximus urna risus, non posuere felis lobortis at. Nulla non hendrerit
      quam, eu molestie magna. Vivamus eu metus tortor. Praesent sit amet tempor
      diam. Praesent commodo urna at eros faucibus porttitor. Nullam placerat
      felis eu nisi pharetra scelerisque varius et risus. Etiam pulvinar risus
      mi, ut vehicula lacus porttitor a.
    </p>
    <p>
      Sed ut condimentum lorem. Proin imperdiet lectus ut nisl pellentesque
      ullamcorper. In hac habitasse platea dictumst. Cras id nibh ultricies,
      vestibulum lorem a, pulvinar metus. Nulla facilisi. Praesent facilisis
      magna a venenatis aliquam. Mauris fermentum elit sem, placerat semper
      sapien feugiat sit amet. Vivamus vehicula, ex eu tristique blandit, mi
      lectus viverra dui, vitae efficitur lorem orci eget purus. Quisque quis
      magna finibus, cursus risus at, blandit erat.
    </p>
    <p>
      Vivamus in enim non tellus malesuada vulputate. Sed gravida condimentum
      pretium. Pellentesque fringilla faucibus ex ut commodo. Phasellus eu nibh
      pharetra, viverra ante sed, ullamcorper nulla. Cras sit amet lorem sed
      diam vulputate ultricies. Nulla vulputate aliquam dolor pulvinar finibus.
      Sed vel vestibulum nulla, vel bibendum ante. Sed cursus ipsum ac varius
      ultrices. Nulla sit amet velit sit amet urna placerat ornare vitae vel
      dui. Suspendisse lobortis egestas eros, et tincidunt metus convallis non.
    </p>
  </main>
));

const HomePage = () => (
  <div className={css('pos.full flex.row justify.center')}>
    <div className={css('pos.rel')}>
      <Header className={css('pos.fixed disp.none-m t0 l0 r0')} />
      <Sidebar
        className={css(
          'pos.fixed disp.none flex.col-m justify.center mx10 mx20-xl',
          {
            top: 0,
            bottom: treesHeight,
            width: sidebarWidth,
          },
        )}
      />
      <div
        className={css('mx5 ml20-m ml40-xl mr15-m mr20-xl', {
          marginTop: headerHeight,
          marginBottom: treesHeight,
          [mediaQuery('m')]: {
            marginTop: 0,
            paddingLeft: sidebarWidth,
          },
        })}
      >
        <div className={css('disp.none-m align.center mb10')}>
          <Place />
          <Nav className={css('mt10')} />
        </div>
        <Content className={css({maxWidth: contentWidth})} />
      </div>
    </div>
    <Trees
      className={css('pos.fixed b0-m l0-m r0 z1 lh0', {
        left: neg(units(140)),
        bottom: neg(units(8)),
      })}
    />
  </div>
);

export default HomePage;
