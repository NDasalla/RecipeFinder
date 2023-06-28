import { PropTypes } from "prop-types";

function Modal({ isVisible, hideModal, children }) {
  if (!isVisible) {
    return null;
  }
  return (
    <div
      onClick={hideModal}
      className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-md flex justify-items-center items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="text-white max-w-xl w-144 mx-auto flex flex-col"
      >
        <button onClick={hideModal} className="text-xl place-self-end">
          X
        </button>
        <div className="text-white bg-green p-8">{children}</div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  isVisible: PropTypes.bool,
  hideModal: PropTypes.func,
  children: PropTypes.any,
};

export default Modal;
