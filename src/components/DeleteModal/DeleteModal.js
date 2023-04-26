import './DeleteModal.scss';
import closeIcon from '../../assets/Icons/close-24px.svg';

function DeleteModal({ title, message, onConfirm, onCancel }) {
    return (
        <div className="delete-modal" onClick={onCancel}>
            <div className="delete-modal__content">
                <button className="delete-modal__close-button" onClick={onCancel}><img className="delete-modal__close-icon" src={closeIcon} alt="close" /></button>
                <h1 className="delete-modal__title">{title}</h1>
                <p className="delete-modal__message">{message}</p>
                <div className="delete-modal__actions">
                    <button className="delete-modal__button delete-modal__button--secondary" onClick={onCancel}>Cancel</button>
                    <button className="delete-modal__button delete-modal__button--primary" onClick={onConfirm}>Delete</button>
                </div>
            </div>
        </div>
    );
}
export default DeleteModal;