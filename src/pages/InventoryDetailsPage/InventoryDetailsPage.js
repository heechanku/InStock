import { useParams } from "react-router-dom";
import "./InventoryDetailsPage.scss";
import backArrow from '../../assets/Icons/arrow_back-24px.svg';
import editIcon from '../../assets/Icons/edit-24px.svg';
import InventoryDetails from "../../components/InventoryDetails/InventoryDetails";


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
        <h1 className="inventory-details-page__title"><button className="inventory-details-page__back-button"><img className="inventory-details-page__back-icon" src={backArrow} alt="back" /></button>{item.item_name}</h1>
        <button className="inventory-details-page__edit-button"><img className="inventory-details-page__edit-icon" src={editIcon} alt="edit" /><span className="inventory-details-page__edit-text">Edit</span></button>
      </div>
      <InventoryDetails description={item.description} category={item.category} status={item.status} quantity={item.quantity} warehouseName={warehouseName} />
    </main>
  );
}
export default InventoryDetailsPage;
