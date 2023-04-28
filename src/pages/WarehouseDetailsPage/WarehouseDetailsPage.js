import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import edit from "../../assets/Icons/edit-24px.svg";
import "./WarehouseDetailsPage.scss";
import EditWarehouse from "../../components/EditWarehouse/EditWarehouse";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import { Link, useParams } from "react-router-dom";
import CtaButton from "../../components/CtaButton/CtaButton";

const testWarehouse = {
  
    id: '2922c286-16cd-4d43-ab98-c79f698aeab0',
    warehouse_name: 'Manhattan',
    address: "503 Broadway",
    city: "New York",
    country: "USA",
    contact_name: "Parmin Aujla",
    contact_position: "Warehouse Manager",
    contact_email: "paujla@instock.com",
    contact_phone: "+1 (646) 123-1234",
    created_at: null,
    updated_at: "2023-04-27T22:00:12.000Z"
}

function WarehouseDetailsPage({ mode = "view" }) {
  //const [singleWarehouse, setSingleWarehouse] = useState({}); * for later useState *
  const { id } = useParams();

  // TEMP
  const warehouse = testWarehouse;

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
        <h1 className="warehouse-details__title">{warehouse.warehouse_name}</h1>
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
        </Link>
      </div>
      {mode === "view" && <WarehouseDetails 
                              warehouseName={warehouse.warehouse_name}
                              address={warehouse.address} 
                              city={warehouse.city} 
                              country={warehouse.country} 
                              contactName={warehouse.contact_name} 
                              contactPhone={warehouse.contact_phone}
                              contactEmail={warehouse.contact_email}
                              position={warehouse.contact_position} />}
      {mode === "edit" && <EditWarehouse warehouse={warehouse} />}
    </section>

  );
};
export default WarehouseDetailsPage;
