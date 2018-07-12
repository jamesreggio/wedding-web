import {mergeClasses} from 'wedding/utils/containers';
import css, {neg, units, layout, mediaQuery} from 'wedding/styles';
import {Names, Place, Fade, Trees} from 'wedding/components';
import {Nav, Content, Rsvp} from 'wedding/content';

const Header = mergeClasses(() => (
  <header>
    <a href="#" title="Back to navigation" className={css('link.none')}>
      <div className={css('flex.col items.center bg.light pt5')}>
        <div>
          <Names />
          <div className={css('disp.none-m fg.accent bt2pcc mt2 mx10')} />
        </div>
      </div>
    </a>
    <Fade className={css('self.stretch mtn2p h6')} />
  </header>
));

const Sidebar = mergeClasses(() => (
  <div className={css('align.center')}>
    <header className={css('flex.col items.center')}>
      <a href="#" title="Back to top" className={css('link.none')}>
        <Names />
      </a>
      <Place className={css('mt15')} />
    </header>
    <Nav className={css('mt15')} />
  </div>
));

const HomePage = () => (
  <div className={css('pos.full flex.row justify.center')}>
    <div className={css('pos.rel z0')}>
      <Header className={css('pos.fixed disp.none-m t0 l0 r0 z1')} />
      <div
        className={css('pos.rel flex.row-m justify.center z0', {
          marginTop: layout.headerHeight,
          marginBottom: layout.treesHeight,
          [mediaQuery('m')]: {
            marginTop: 0,
          },
        })}
      >
        <div
          className={css('disp.none flex.center-m', {
            flexShrink: 1,
            flexBasis: units(100),
            minWidth: units(74),
          })}
        >
          <Sidebar
            className={css('pos.fixed flex.col justify.center', {
              top: 0,
              bottom: layout.treesHeight,
              width: layout.sidebarWidth,
            })}
          />
        </div>
        <div
          className={css('mx5 mx0-m', {
            flexShrink: 0,
            flexBasis: layout.contentWidth,
          })}
        >
          <div className={css('disp.none-m align.center mb10')}>
            <Place />
            <Nav className={css('mt10')} />
          </div>
          <Content />
        </div>
        <div
          className={css('disp.none disp.blk-m', {
            flexShrink: 2,
            flexBasis: units(40),

            [mediaQuery('l')]: {
              flexShrink: 4,
              flexBasis: units(80),
            },
          })}
        />
      </div>
    </div>
    <Trees
      className={css('pos.fixed l0-m b0-m r0 z1 lh0', {
        left: neg(units(140)),
        bottom: neg(units(8)),
      })}
    />
    <Rsvp />
  </div>
);

export default HomePage;
