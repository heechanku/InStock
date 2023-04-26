import { useParams } from "react-router-dom";
import "./InventoryDetailsPage.scss";
import backArrow from '../../assets/Icons/arrow_back-24px.svg';
import editIcon from '../../assets/Icons/edit-24px.svg';
import InventoryDetails from "../../components/InventoryDetails/InventoryDetails";
import axios from 'axios';
import { useEffect, useState } from "react";

const baseUrl = process.env.REACT_APP_BASE_URL ?? "http://localhost:5050/api";

function InventoryDetailsPage() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  console.log(`${baseUrl}/inventories/${id}`);

  useEffect(() => {
    axios
      .get(`${baseUrl}/inventories/${id}`)
      .then(response => {
        setItem(response.data);
        console.log(response.data);
      }).catch(error => {
        console.error(error);
        alert(error);
      })
  }, []);

  //TEMP (Awaiting correction to api response)
  const warehouseName = "Manhattan";

  const { item_name, description, category, status, quantity } = item ?? {};

  return (
    <main className="inventory-details-page">
      <div className="inventory-details-page__header">
        <h1 className="inventory-details-page__title">
          <button className="inventory-details-page__back-button"><img className="inventory-details-page__back-icon" src={backArrow} alt="back" /></button>
          {item_name ?? "Loading..."}
        </h1>
        <button className="inventory-details-page__edit-button"><img className="inventory-details-page__edit-icon" src={editIcon} alt="edit" /><span className="inventory-details-page__edit-text">Edit</span></button>
      </div>
      <InventoryDetails description={description} category={category} status={status} quantity={quantity} warehouseName={warehouseName} />
    </main>
  );
}
export default InventoryDetailsPage;
