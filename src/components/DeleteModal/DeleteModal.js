import './DeleteModal.scss';

function DeleteModal({ title, content, onConfirm, onCancel }) {
    return (
        <div className="delete-modal">
            <div className="delete-modal__content">
                <h1 className="delete-modal__title">{title}</h1>
                <p className="delete-modal__content">{content}</p>
                <div className="delete-model__actions">
                    <button className="delete-model__button delete-model__button--cancel">Cancel</button>
                    <button className="delete-model__button delete-model__button--confirm">Delete</button>
                </div>
            </div>
        </div>
    );
}
export default DeleteModal;