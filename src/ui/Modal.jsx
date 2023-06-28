import { PropTypes } from "prop-types";

function Modal({ isVisible, hideModal, children }) {
  if (!isVisible) {
    return null;
  }
  return (
    <div
      onClick={hideModal}
      className="fixed inset-0 bg-gray-600 bg-opacity-40 backdrop-blur-md flex justify-items-center items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-gray-500 p-4 text-white max-w-xl w-144 mx-auto flex flex-col"
      >
        <button
          onClick={hideModal}
          className="text-2xl text-black bg-red-500 place-self-end px-2"
        >
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
