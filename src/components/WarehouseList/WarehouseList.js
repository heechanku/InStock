import "./WarehouseList.scss";
import WarehouseRow from "../WarehouseRow/WarehouseRow";
import sortIcon from "../../assets/Icons/sort-24px.svg";

//Test Data
const warehousesData = [
  {
    id: 0,
    warehouse_name: "Manhattan",
    address: "503 Broadway, New York, USA",
    city: "Manhattan",
    country: "US",
    contact_name: "Parmin Aujla",
    contact_position: "Store Manager",
    contact_email: "paujla@instock.com",
    contact_phone: "+1 (629) 555-0129",
  },
];

function WarehouseList() {
  const warehouses = warehousesData;

  return (
    <div className="warehouse-list">
      <div className="warehouse-list__header-row">
        <div className="warehouse-list__header-item warehouse-list__header-item--main">
          WAREHOUSE <img className="warehouse-list__icon" src={sortIcon} alt="sort" />
        </div>
        <div className="warehouse-list__header-item warehouse-list__header-item--main">
          ADDRESS <img className="warehouse-list__icon" src={sortIcon} alt="sort" />
        </div>
        <div className="warehouse-list__header-item">
          CONTACT NAME <img className="warehouse-list__icon" src={sortIcon} alt="sort" />
        </div>
        <div className="warehouse-list__header-item">
          CONTACT INFORMATION <img className="warehouse-list__icon" src={sortIcon} alt="sort" />
        </div>
        <div className="warehouse-list__header-item">
          ACTIONS <img className="warehouse-list__icon" src={sortIcon} alt="sort" />
        </div>
      </div>
      <div className="warehouse-list__body">
        <div className="warehouse-list__row">
          {warehouses.map((warehouse) => (
            <WarehouseRow
              key={warehouse.id}
              id={warehouse.id}
              name={warehouse.warehouse_name}
              address={warehouse.address}
              contactName={warehouse.contact_name}
              contactEmail={warehouse.contact_email}
              contactPhone={warehouse.contact_phone}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default WarehouseList;
