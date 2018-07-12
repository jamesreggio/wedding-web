import firebase from 'firebase/app';
import 'firebase/database';

import {Component} from 'react';
import {findDOMNode} from 'react-dom';
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

    padding: ${pxs(4)} ${pxs(8)};
    padding-left: 0;
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

    &:disabled {
      color: ${colors.fg.black}80;
    }
  `,

  submit: `
    cursor: pointer;
    background: transparent;
    padding: 0;
    border: 0;

    &:disabled {
      &:hover {
        border-bottom-color: transparent;
      }

      color: ${colors.fg.black}80;
    }
  `,
});

const localStorageKey = 'addressGiven';

class Rsvp extends Component {
  state = {
    open: false,
    done: false,
  };

  app = null;
  form = null;

  componentDidMount() {
    let addressGiven;

    try {
      addressGiven = !!global.localStorage.getItem(localStorageKey);
    } catch (error) {
      addressGiven = false;
    }

    this.setState({open: !addressGiven});
  }

  render() {
    const {
      setContentRef,
      setFormRef,
      onImplicitClose,
      onExplicitClose,
      onSubmit,
      state: {open, done},
    } = this;

    return (
      <Modal isOpen={open} onRequestClose={onImplicitClose}>
        <div ref={setContentRef} className={css('flex.col justify.center')}>
          {!done ? (
            <>
              <h3 className={css('text.b1 fg.black')}>
                Please share your address with us so we may send you a formal
                invitation.
              </h3>
              <p className={css('mt4')}>
                <a
                  href="#0"
                  onClick={onExplicitClose}
                  className={css('text.b2 fg.black opacity.mid link.h2')}
                >
                  <span className={css('disp.none disp.init-m')}>Click</span>{' '}
                  <span className={css('disp.none-m')}>Tap</span> here if
                  you&apos;ve alrady shared your address.
                </a>
              </p>
              <form ref={setFormRef} onSubmit={onSubmit}>
                <div className={css('mt4')}>
                  <input
                    type="text"
                    name="name"
                    aria-label="Name"
                    placeholder="Name"
                    autoComplete="name"
                    className={css('input')}
                    required
                  />
                </div>
                <div className={css('mt3')}>
                  <input
                    type="text"
                    name="street"
                    aria-label="Address"
                    placeholder="Address"
                    autoComplete="shipping street-address"
                    className={css('input')}
                    maxLength={100}
                    required
                  />
                </div>
                <div className={css('flex.row mt3')}>
                  <input
                    type="text"
                    name="city"
                    aria-label="City"
                    placeholder="City"
                    autoComplete="shipping address-level2"
                    className={css('input', {flex: 5})}
                    maxLength={40}
                    required
                  />
                  <input
                    type="text"
                    name="state"
                    aria-label="State"
                    placeholder="State"
                    autoComplete="shipping address-level1"
                    className={css('input ml2', {flex: 1.5})}
                    maxLength={2}
                    required
                  />
                  <input
                    type="text"
                    name="zip"
                    aria-label="ZIP"
                    placeholder="ZIP"
                    autoComplete="shipping postal-code"
                    className={css('input ml2', {flex: 2})}
                    maxLength={10}
                    required
                  />
                </div>
                <div className={css('align.center mt6')}>
                  <button
                    type="submit"
                    className={css('submit text.b1 fg.black link.h2')}
                  >
                    Submit &rarr;
                  </button>
                </div>
              </form>
            </>
          ) : (
            <>
              <h3 className={css('text.b1 fg.black')}>
                Thank you for sharing your address. We look forward to having
                you.
              </h3>
              <p className={css('mt8')}>
                <a
                  href="#"
                  onClick={onImplicitClose}
                  className={css('text.b1 fg.black link.h2')}
                >
                  See the rest of the website &rarr;
                </a>
              </p>
              <p className={css('mt2')}>
                <a
                  href="#travel"
                  onClick={onImplicitClose}
                  className={css('text.b1 fg.black link.h2')}
                >
                  Jump directly to travel information &rarr;
                </a>
              </p>
            </>
          )}
        </div>
      </Modal>
    );
  }

  @autobind
  // eslint-disable-next-line class-methods-use-this
  setContentRef(ref) {
    const node = findDOMNode(ref);

    if (!node) {
      return;
    }

    node.style.height = `${node.offsetHeight}px`;
  }

  @autobind
  setFormRef(ref) {
    this.form = ref;
  }

  @autobind
  onImplicitClose() {
    const {done} = this.state;

    if (done || !Object.keys(this.getFormData()).length) {
      this.setState({open: false});
    }
  }

  @autobind
  onExplicitClose() {
    this.setState({open: false});
    global.localStorage.setItem(localStorageKey, Date.now());
  }

  @autobind
  async onSubmit(e) {
    e.preventDefault();

    try {
      const data = this.getFormData();
      this.disableForm();

      await this.getFirebaseApp()
        .database()
        .ref('addresses')
        .push()
        .set(data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error saving to Firebase', error);
    }

    this.setState({done: true});
    global.localStorage.setItem(localStorageKey, Date.now());
  }

  disableForm() {
    if (!this.form) {
      return;
    }

    Array.from(findDOMNode(this.form).elements).forEach(
      element => (element.disabled = true),
    );
  }

  getFormData() {
    if (!this.form) {
      return {};
    }

    return Array.from(findDOMNode(this.form).elements).reduce(
      (data, element) =>
        !element.name || !element.value
          ? data
          : {
              ...data,
              [element.name]: element.value,
            },
      {},
    );
  }

  getFirebaseApp() {
    if (!this.app) {
      this.app = firebase.initializeApp({
        apiKey: 'AIzaSyALb-86ZO7GBG4ZBlT2JDOw73ea-EGPvvc',
        authDomain: 'chestonandjames-wedding.firebaseapp.com',
        databaseURL: 'https://chestonandjames-wedding.firebaseio.com',
        projectId: 'chestonandjames-wedding',
        storageBucket: '',
        messagingSenderId: '647690432735',
      });
    }

    return this.app;
  }
}

export default mergeClasses(Rsvp);
