import { Link, useNavigate, useParams } from "react-router-dom";
import "./InventoryDetailsPage.scss";
import backArrow from '../../assets/Icons/arrow_back-24px.svg';
import editIcon from '../../assets/Icons/edit-24px.svg';
import InventoryDetails from "../../components/InventoryDetails/InventoryDetails";
import axios from 'axios';
import { useEffect, useState } from "react";
import EditInventoryItem from "../../components/EditInventoryItem/EditInventoryItem";

const baseUrl = process.env.REACT_APP_BASE_URL ?? "http://localhost:5050/api";

function InventoryDetailsPage({ mode = "view" }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [item, setItem] = useState(null);

  console.log(`${baseUrl}/inventories/${id}`);

  useEffect(() => {
    if (item === null) {
    axios
      .get(`${baseUrl}/inventories/${id}`)
      .then(response => {
        setItem(response.data);
        console.log(response.data);
      }).catch(error => {
        console.error(error);
        alert(error);
      })
    }
  }, [item, id]);


  const inventoryUpdateHandler = () => {
    setItem(null);
  }

  const { item_name, description, category, status, quantity, warehouse_name } = item ?? {};

  return (
    <main className="inventory-details-page">
      <div className="inventory-details-page__header">
        <h1 className="inventory-details-page__title">
          <button className="inventory-details-page__back-button" onClick={()=>navigate(-1)}><img className="inventory-details-page__back-icon" src={backArrow} alt="back" /></button>{item_name}</h1>
        {mode === "view" && <Link to="./edit"><button className="inventory-details-page__edit-button"> <img className="inventory-details-page__edit-icon" src={editIcon} alt="edit" /><span className="inventory-details-page__edit-text">Edit</span></button></Link>}
      </div>
      {mode === "view" &&
        <InventoryDetails description={description} category={category} status={status} quantity={quantity} warehouseName={warehouse_name} />}
      {mode === "edit" && (item!=null ? <EditInventoryItem onInventoryUpdated={inventoryUpdateHandler} item={item}/> : <h2>Loading...</h2>)}
    </main>
  );
}
export default InventoryDetailsPage;
