import './Modal.css';
import closeButton from '../images/close-circle.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

function Modal({ item, onClose }) {

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <h2>{item.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                <FontAwesomeIcon className='close-button' onClick={onClose} icon={faWindowClose} size="2x" color="red" />
                {/* <img  src={closeButton}/> */}
                {/* <button onClick={onClose} style={{ marginTop: "10px" }}>
                    X
                </button> */}
            </div>
        </div>
    );
}

export default Modal;
