import './Modal.css'

function Modal({ item, onClose }) {

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <h2>{item.title}</h2>
                <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
                <button onClick={onClose} style={{ marginTop: "10px" }}>
                    X
                </button>
            </div>
        </div>
    );
}

export default Modal;
