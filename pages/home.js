import {mergeClasses} from 'wedding/utils/containers';
import css, {neg, units, layout, colors, mediaQuery} from 'wedding/styles';
import {Names, Place, Trees} from 'wedding/components';
import {Nav, Content} from 'wedding/content';

const Header = mergeClasses(() => (
  <header>
    <a href="#" title="Back to navigation" className={css('link.plain')}>
      <div className={css('flex.col items.center bg.light pt5')}>
        <div>
          <Names />
          <div className={css('disp.none-m fg.accent bt2pcc mt2 mx10')} />
        </div>
      </div>
    </a>
    <div
      className={css('self.stretch h7', {
        background: `linear-gradient(${colors.bg.light}, ${colors.bg.light}00)`,
      })}
    />
  </header>
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

const HomePage = () => (
  <div className={css('pos.full flex.row justify.center')}>
    <div className={css('pos.rel')}>
      <Header className={css('pos.fixed disp.none-m t0 l0 r0')} />
      <div
        className={css('flex.row-m justify.center', {
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
  </div>
);

export default HomePage;
