import './Modal.css';
import closeButton from '../images/close-circle.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';

function Modal({ item, onClose }) {

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <div className='modal-header'>
                    <h2>{item.title}</h2>
                    <FontAwesomeIcon className='close-button' onClick={onClose} icon={faWindowClose} size="2x" />
                </div>
 
                <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                {/* <img  src={closeButton}/> */}
                {/* <button onClick={onClose} style={{ marginTop: "10px" }}>
                    X
                </button> */}
            </div>
        </div>
    );
}

export default Modal;
