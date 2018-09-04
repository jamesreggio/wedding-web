import firebase from 'firebase/app';
import 'firebase/database';

import {Component} from 'react';
import {findDOMNode} from 'react-dom';
import {mergeClasses} from 'wedding/utils/containers';
import {autobind} from 'wedding/utils/decorators';
import {Modal} from 'wedding/components';
import sheet, {cx, pxs, units, fonts, colors, mediaQuery} from 'wedding/styles';

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

  radio: `
    & > div {
      position: relative;
      width: ${units(6)};
      font-size: ${pxs(22)};
      display: inline-block;
      overflow: hidden;

      & > input {
        margin-left: -100px;

        & + .check {
          border-bottom: 1px solid ${colors.fg.black}40;
          width: 100%;
          height: 100%;

          &::after {
            display: none;
            content: '\u2714';
            text-align: center;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
          }
        }

        &:focus {
          outline: 0;

          & + .check {
            border-bottom-color: ${colors.fg.black};
          }
        }

        &:checked {
          & + .check {
            &::after {
              display: block;
              color: ${colors.fg.accent};
            }
          }
        }
      }
    }

    ${mediaQuery('m')} {
      &:hover {
        .check {
          &::after {
            display: block;
            color: ${colors.fg.accent}20;
          }
        }
      }
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

const localStorageKey = 'attendanceGiven';

class Rsvp extends Component {
  state = {
    open: false,
    done: false,
    attending: null,
  };

  app = null;
  form = null;

  async componentDidMount() {
    //XXX fuck it, don't have time to fight with next/router
    // eslint-disable-next-line no-undef
    window.openRsvp = () => {
      this.setState({open: true});
    };

    let attendanceGiven;
    try {
      attendanceGiven = !!global.localStorage.getItem(localStorageKey);
    } catch (error) {
      attendanceGiven = false;
    }

    if (!attendanceGiven) {
      this.setState({open: true});
    } else {
      this.onClose();
      global.localStorage.setItem(localStorageKey, Date.now());
    }
  }

  render() {
    const {
      setFormRef,
      onClose,
      onImplicitClose,
      onExplicitClose,
      onAttendingChange,
      onSubmit,
      state: {open, done, attending},
    } = this;

    const modalHeader = <span className={css('text.h2 fg.black')}>RSVP</span>;

    return (
      <Modal
        isOpen={open}
        header={modalHeader}
        onRequestClose={onImplicitClose}
      >
        <div className={css('flex.col justify.center')}>
          {!done ? (
            <>
              <h3 className={css('text.b1 fg.black mt2')}>
                Please let us know if you will be attending.
              </h3>
              <p className={css('mt2')}>
                <a
                  href="#0"
                  onClick={onExplicitClose}
                  className={css('text.b2 fg.black opacity.mid link.h2')}
                >
                  <span className={css('disp.none disp.init-m')}>Click</span>{' '}
                  <span className={css('disp.none-m')}>Tap</span> here if
                  you&apos;ve already RSVPed.
                </a>
              </p>
              <p className={css('mt2')}>
                <a
                  href="#0"
                  onClick={onClose}
                  className={css('text.b2 fg.black opacity.mid link.h2')}
                >
                  <span className={css('disp.none disp.init-m')}>Click</span>{' '}
                  <span className={css('disp.none-m')}>Tap</span> here to RSVP
                  later.
                </a>
              </p>
              <form ref={setFormRef} onSubmit={onSubmit}>
                <div className={css('mt6')}>
                  <input
                    type="text"
                    name="name"
                    aria-label="Name"
                    placeholder="Name(s)"
                    autoComplete="name"
                    className={css('input')}
                    required
                  />
                </div>
                <div className={css('mt4')}>
                  {/* eslint-disable-next-line */}
                  <label className={css('radio flex.row items.center')}>
                    <div className={css('mr10p')}>
                      <input
                        type="radio"
                        name="attending"
                        value="true"
                        checked={attending === true}
                        onChange={onAttendingChange}
                        required
                      />
                      <div className="check" />
                    </div>
                    <span className={css('text.b2 fg.black')}>
                      Accepts with pleasure
                    </span>
                  </label>
                  {/* eslint-disable-next-line */}
                  <label className={css('radio flex.row items.center mt3')}>
                    <div className={css('mr10p')}>
                      <input
                        type="radio"
                        name="attending"
                        value="false"
                        checked={attending === false}
                        onChange={onAttendingChange}
                        required
                      />
                      <div className="check" />
                    </div>
                    <span className={css('text.b2 fg.black')}>
                      Regretfully declines
                    </span>
                  </label>
                </div>
                {attending && (
                  <>
                    {/* eslint-disable-next-line */}
                    <label className={css('flex.row items.center mt6')}>
                      <span className={css('text.b2 fg.black', {flex: 4})}>
                        Number of Adults
                      </span>
                      <input
                        type="number"
                        name="adults"
                        min="0"
                        max="9"
                        className={css('input', {flex: 1})}
                        required
                      />
                    </label>
                    {/* eslint-disable-next-line */}
                    <label className={css('flex.row items.center mt1')}>
                      <span className={css('text.b2 fg.black', {flex: 4})}>
                        Number of Children
                      </span>
                      <input
                        type="number"
                        name="children"
                        min="0"
                        max="9"
                        className={css('input', {flex: 1})}
                      />
                    </label>
                    <div className={css('mt6')}>
                      <input
                        type="text"
                        name="notes"
                        aria-label="Notes"
                        placeholder="Any dietary or mobility requests?"
                        className={css('input')}
                      />
                    </div>
                  </>
                )}
                {attending != null && (
                  <div className={css('align.center mt6')}>
                    <button
                      type="submit"
                      className={css('submit text.b1 fg.black link.h2')}
                    >
                      Submit &rarr;
                    </button>
                  </div>
                )}
              </form>
            </>
          ) : (
            <>
              <h3 className={css('text.b1 fg.black')}>
                Thank you for your response.
              </h3>
              <h3 className={css('text.sh3 fg.accent mt3')}>
                {attending ? (
                  <span>We look forward to celebrating with you!</span>
                ) : (
                  <span>
                    We&apos;ll miss you, but we appreciate your love and
                    support.
                  </span>
                )}
              </h3>
              {attending && (
                <div className="main">
                  <p
                    className={cx(
                      'box',
                      css('text.b2 fg.black mxn2 px2 d0 mt6 mb4'),
                    )}
                  >
                    Cheston&apos;s parents will be hosting a casual brunch at
                    their home in Saratoga from <em>10am</em> to <em>2pm</em> on
                    Sunday following the wedding, so please consider joining us
                    when you make your travel plans.
                  </p>
                </div>
              )}
              <p className={css('mt2')}>
                <a
                  href="#"
                  onClick={onImplicitClose}
                  className={css('text.b1 fg.black link.h2')}
                >
                  See the rest of the website &rarr;
                </a>
              </p>
              {attending && (
                <p className={css('mt2')}>
                  <a
                    href="#travel"
                    onClick={onImplicitClose}
                    className={css('text.b1 fg.black link.h2')}
                  >
                    Jump directly to travel information &rarr;
                  </a>
                </p>
              )}
            </>
          )}
        </div>
      </Modal>
    );
  }

  @autobind
  setFormRef(ref) {
    this.form = ref;
  }

  @autobind
  onImplicitClose() {
    const {done} = this.state;

    if (done || Object.keys(this.getFormData()).length <= 1) {
      this.onClose();
    }
  }

  @autobind
  onExplicitClose() {
    this.onClose();
    global.localStorage.setItem(localStorageKey, Date.now());
  }

  @autobind
  onClose() {
    this.setState({
      done: false,
      open: false,
      attending: null,
    });
  }

  @autobind
  onAttendingChange(e) {
    this.setState({
      attending: e.target.value === 'true',
    });
  }

  @autobind
  async onSubmit(e) {
    e.preventDefault();

    try {
      const data = this.getFormData();
      this.disableForm();

      const db = this.getFirebaseApp().database();

      await db
        .ref('rsvps')
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

    // eslint-disable-next-line no-undef
    return Array.from(new FormData(this.form)).reduce(
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

  // eslint-disable-next-line class-methods-use-this
  encodeEmail(email = '') {
    // eslint-disable-next-line no-useless-escape
    return email.replace(/[.#\$\[\]\/]/g, '_');
  }
}

export default mergeClasses(Rsvp);
