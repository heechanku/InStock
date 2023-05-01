import './InventoryDetails.scss';

function InventoryDetails({description,category,status,quantity,warehouseName}) {
    return (
        <div className="inventory-details">
            <div className="inventory-details__container">
                <div className="inventory-details__detail-item">
                    <h4 className="inventory-details__detail-label">ITEM DESCRIPTION:</h4>
                    <p>{description}</p>
                </div>
                <div className="inventory-details__detail-item">
                    <h4 className="inventory-details__detail-label">CATEGORY:</h4>
                    <p>{category}</p>
                </div>

            </div>
            <div className="inventory-details__container">
                <div className="inventory-details__detail-item">
                    <h4 className="inventory-details__detail-label">STATUS:</h4>
                    <p><span className={`inventory-details__tag inventory-details__tag--${status === "In Stock" ? "green" : "red"}`}>{status}</span></p>
                </div>
                <div className="inventory-details__detail-item">
                    <h4 className="inventory-details__detail-label">QUANTITY:</h4>
                    <p>{quantity}</p>
                </div>
                <div className="inventory-details__detail-item">
                    <h4 className="inventory-details__detail-label">WAREHOUSE:</h4>
                    <p>{warehouseName}</p>
                </div>
            </div>
        </div>
    );
}
export default InventoryDetails;