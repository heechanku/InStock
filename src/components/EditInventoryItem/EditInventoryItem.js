import './EditInventoryItem.scss';

function EditInventoryItem({ }) {


    return (
        <form className="edit-inventory-item">
            <div className="edit-inventory-item__details-container">
                <h2 className='edit-inventory-item__heading'>Item Details</h2>
                <div className="edit-inventory-item__form-group">
                    <div className="edit-inventory-item__field-item">
<<<<<<< Updated upstream
                        <label className="edit-inventory-item__label" htmlFor="itemName" >Item name</label>
=======
                        <label className="edit-inventory-item__label" htmlFor="itemName">Item name</label>
>>>>>>> Stashed changes
                        <input className="edit-inventory-item__input" type="text" name="itemName" id="itemName" placeholder='Item Name' />
                    </div>
                    <div className="edit-inventory-item__field-item">
                        <label className="edit-inventory-item__label" htmlFor="description">Description</label>
                        <textarea className="edit-inventory-item__input edit-inventory-item__input--textarea" name="description" id="description" placeholder='Enter description...' />
                    </div>
                    <div className="edit-inventory-item__field-item">
                        <label className="edit-inventory-item__label" htmlFor="category">Category</label>
                        <select className="edit-inventory-item__input" name="category" id="category">
                            <option>Electronics</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="edit-inventory-item__availability-container">
                <h2 className='edit-inventory-item__heading'>Item Availability</h2>
                <div className="edit-inventory-item__form-group">
                    <div className="edit-inventory-item__field-item">
                        <p className="edit-inventory-item__label">Status</p>
                        <div className="edit-inventory-item__radio-group">
                            <div className="edit-inventory-item__field-item edit-inventory-item__field-item--radio">
                                <input className="edit-inventory-item__input edit-inventory-item__input--radio" type="radio" name="status" id="statusInStock" value="In Stock" />
                                <label className="edit-inventory-item__radio-label" htmlFor="statusInStock">In Stock</label>
                            </div>
                            <div className="edit-inventory-item__field-item edit-inventory-item__field-item--radio">
                                <input className="edit-inventory-item__input edit-inventory-item__input--radio" type="radio" name="status" id="statusOutOnStock" value="Out Of Stock" />
                                <label className="edit-inventory-item__radio-label" htmlFor="statusOutOnStock">Out Of Stock</label>
                            </div>
                        </div>
                    </div>
                    <div className="edit-inventory-item__field-item">
                        <label className="edit-inventory-item__label" htmlFor="warehouse">Warehouse</label>
                        <select className="edit-inventory-item__input edit-inventory-item__input--select" name="warehouse">
                            <option>Electronics</option>
                        </select>
                    </div>

                </div>

            </div>
            <div className="edit-inventory-item__actions">
                <button className="edit-inventory-item__button edit-inventory-item__button--secondary" type="button">Cancel</button>
                <button className="edit-inventory-item__button edit-inventory-item__button--primary" type="button">Save</button>
            </div>
        </form>
    );
}
export default EditInventoryItem;