import { useParams } from "react-router-dom";
import "./InventoryDetailsPage.scss";
import backArrow from '../../assets/Icons/arrow_back-24px.svg';
import editIcon from '../../assets/Icons/edit-24px.svg';


const testItem = {
  id: '9b4f79ea-0e6c-4e59-8e05-afd933d0b3d3',
  warehouse_id: '2922c286-16cd-4d43-ab98-c79f698aeab0',
  item_name: 'Television',
  description:
    'This 50", 4K LED TV provides a crystal-clear picture and vivid colors.',
  category: 'Electronics',
  status: 'In Stock',
  quantity: 500,
};

function InventoryDetailsPage() {
  const { id } = useParams();

  //TEMP
  const item = testItem;
  //TEMP
  const warehouseName = "Manhattan";

  return (
    <main className="inventory-details-page">
      <div className="inventory-details-page__header">
        <h1 className="inventory-details-page__title"><button className="inventory-details-page__back-button"><img src={backArrow} alt="back" /></button>{item.item_name}</h1>
        <button className="inventory-details-page__edit-button"><img className="inventory-details-page__edit-icon" src={editIcon} alt="edit" /><span className="inventory-details-page__edit-text">Edit</span></button>
      </div>
      <div className="inventory-details-page__body">
        <div className="inventory-details-page__container">
          <div className="inventory-details-page__detail-item">
            <h4 className="inventory-details-page__detail-label">ITEM DESCRIPTION:</h4>
            <p>{item.description}</p>
          </div>
          <div className="inventory-details-page__detail-item">
            <h4 className="inventory-details-page__detail-label">CATEGORY:</h4>
            <p>{item.category}</p>
          </div>

        </div>
        <div className="inventory-details-page__container">
          <div className="inventory-details-page__detail-item">
            <h4 className="inventory-details-page__detail-label">STATUS:</h4>
            <p><span className={`inventory-details-page__tag inventory-details-page__tag--${item.status==="In Stock" ? "green" : "red"}`}>{item.status}</span></p>
          </div>
          <div className="inventory-details-page__detail-item">
            <h4 className="inventory-details-page__detail-label">QUANTITY:</h4>
            <p>{item.quantity}</p>
          </div>
          <div className="inventory-details-page__detail-item">
            <h4 className="inventory-details-page__detail-label">WAREHOUSE:</h4>
            <p>{warehouseName}</p>
          </div>
          
        </div>
      </div>
    </main>
  );
}
export default InventoryDetailsPage;
