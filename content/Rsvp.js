import {Component} from 'react';
import {mergeClasses} from 'wedding/utils/containers';
import {autobind} from 'wedding/utils/decorators';
import {Modal} from 'wedding/components';
import sheet, {pxs, fonts, colors} from 'wedding/styles';

const css = sheet.extend({
  input: `
    width: 100%;
    display: block;
    background: transparent;
    padding: 0;
    border: 0;

    font-size: ${pxs(19)};

    padding: ${pxs(4)} 0;
    border-bottom: 1px solid ${colors.fg.black}40;

    &::placeholder {
      font-size: ${pxs(15)};
      font-family: ${fonts.accent};
      font-style: italic;
    }

    &:focus {
      outline: 0;
      border-bottom-color: ${colors.fg.black};
    }
  `,

  submit: `
    cursor: pointer;
    background: transparent;
    padding: 0;
    border: 0;
  `,
});

class Rsvp extends Component {
  render() {
    const {onSubmit} = this;

    return (
      <Modal isOpen>
        <h3 className={css('text.b1 fg.black')}>
          Please share your address with us so we may send you a formal
          invitation.
        </h3>
        <p className={css('mt4')}>
          <a href="#0" className={css('text.b3 fg.black opacity.mid link.h2')}>
            <span className={css('disp.none disp.init-m')}>Click</span>{' '}
            <span className={css('disp.none-m')}>Tap</span> here if you&apos;ve
            alrady shared your address.
          </a>
        </p>
        <form onSubmit={onSubmit}>
          <div className={css('mt4')}>
            <input
              type="text"
              name="name"
              aria-label="Name"
              placeholder="Name"
              autoComplete="name"
              className={css('input')}
            />
          </div>
          <div className={css('mt3')}>
            <input
              type="text"
              name="address-street"
              aria-label="Address"
              placeholder="Address"
              autoComplete="shipping street-address"
              className={css('input')}
            />
          </div>
          <div className={css('flex.row mt3')}>
            <input
              type="text"
              name="address-city"
              aria-label="City"
              placeholder="City"
              autoComplete="shipping address-level2"
              className={css('input', {flex: 5})}
            />
            <input
              type="text"
              name="address-state"
              aria-label="State"
              placeholder="State"
              autoComplete="shipping address-level1"
              className={css('input', {flex: 1.5})}
            />
            <input
              type="text"
              name="address-zip"
              aria-label="ZIP"
              placeholder="ZIP"
              autoComplete="shipping postal-code"
              className={css('input', {flex: 2})}
            />
          </div>
        </form>
        <div className={css('align.center mt6')}>
          <button
            type="submit"
            className={css('submit text.b1 fg.black link.h2')}
          >
            Submit &rarr;
          </button>
        </div>
      </Modal>
    );
  }

  @autobind
  onSubmit() {
    // TODO
    this.todo();
  }
}

export default mergeClasses(Rsvp);
