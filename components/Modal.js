import pt from 'prop-types';
import ReactModal from 'react-modal';
import css, {cx, layout, injectGlobal, mediaQuery} from 'wedding/styles';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  .ReactModal__Body--open {
    overflow: hidden;
  }

  .ReactModal__Overlay {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    background: linear-gradient(#eeeb, #ccce) !important;
    z-index: 1;

    ${mediaQuery('m')} {
      padding-bottom: ${layout.treesHeight};
      justify-content: center;
    }
  }

  .ReactModal__Content {
    outline: 0;
  }
`;

const Modal = ({header, children, className, onRequestClose, ...props}) => (
  <ReactModal
    ariaHideApp={false}
    {...props}
    onRequestClose={onRequestClose}
    className={css('pos.rel bg.light d1 m2 m0-m', {
      maxWidth: layout.modalWidth,
    })}
  >
    <div
      aria-hidden="true"
      className={css('pos.abs t7p l0 r0 flex.row flex.center')}
    >
      <div className={css('flex.row items.center bg.light px2')}>
        {header ?? (
          <>
            <span className={css('text.h2 fg.black')}>C</span>
            <span className={css('text.h4 fg.accent mx1')}>&amp;</span>
            <span className={css('text.h2 fg.black')}>J</span>
          </>
        )}
      </div>
    </div>
    <div className={cx(css('b2pa p4 mx4 my5'), className)}>{children}</div>
  </ReactModal>
);

Modal.propTypes = {
  header: pt.node,
  children: pt.node,

  // Modal
  className: pt.string,
  onRequestClose: pt.func,

  // Rest passed to ReactModal
};

export default Modal;
