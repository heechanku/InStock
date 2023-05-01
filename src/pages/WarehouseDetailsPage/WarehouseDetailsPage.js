import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import edit from "../../assets/Icons/edit-24px.svg";
import "./WarehouseDetailsPage.scss";
import EditWarehouse from "../../components/EditWarehouse/EditWarehouse";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import { Link, useParams } from "react-router-dom";
import CtaButton from "../../components/CtaButton/CtaButton";
import InventoryList from "../../components/InventoryList/InventoryList";
import { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL ?? "http://localhost:5050/api";

function WarehouseDetailsPage({ mode = "view" }) {
  //const [singleWarehouse, setSingleWarehouse] = useState({}); * for later useState *
  const { id } = useParams();

  // TEMP


  const [warehouse, setWarehouse] = useState(null);


  useEffect(() => {
    if (warehouse === null) {
      axios
        .get(`${baseUrl}/warehouses/${id}`)
        .then(response => {
          setWarehouse(response.data);
        })
        .catch(error => {
          alert(error);
          console.error(error);
        });
    }
  }, [id, warehouse]); 

  const warehouseUpdateHandler = () => {
    setWarehouse(null);
  }

  return (

    <section className="warehouse-details">
      <div className="warehouse-details__header">
        <Link to="/" className="warehouse-details__arrow">
          <img
            //onClick={() => navigate(-1)} * for later useNavigate *
            src={backArrow}
            alt="back arrow"
            className="warehouse-details__arrow-image"
          />
        </Link>
        {(mode === "view" && warehouse !== null ) && <h1 className="warehouse-details__title">{warehouse.warehouse_name}</h1>}
        {/* {mode === "edit" && (item!=null ? <EditInventoryItem item={item}/> : <h2>Loading...</h2>)} */}
        {(mode === "edit" && warehouse !== null ) && <h1 className="warehouse-details__title">Edit Warehouse</h1>}


        {mode === "view" &&
          <Link to={`/${id}/edit`} className="warehouse-details__edit">
          <CtaButton>
            <img
              src={edit}
              alt="pencil"
              className="warehouse-details__edit-img"
            />
            <span className="warehouse-details__edit-text">Edit</span>
          </CtaButton>
        </Link>}
      </div>
      
      {(mode === "view" && warehouse !== null ) && <WarehouseDetails 
                              warehouseName={warehouse.warehouse_name}
                              address={warehouse.address} 
                              city={warehouse.city} 
                              country={warehouse.country} 
                              contactName={warehouse.contact_name} 
                              contactPhone={warehouse.contact_phone}
                              contactEmail={warehouse.contact_email}
                              position={warehouse.contact_position} />} 
      {mode === 'view' && <InventoryList warehouseId={id}/>}
      {mode === "edit" && (warehouse !== null ? <EditWarehouse onWarehouseUpdated ={warehouseUpdateHandler} warehouse={warehouse}/> : <h2>Loading...</h2>)}
    </section>

  );
};
export default WarehouseDetailsPage;
