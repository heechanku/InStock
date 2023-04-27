import "./WarehouseList.scss";
import WarehouseRow from "../WarehouseRow/WarehouseRow";
import sortIcon from "../../assets/Icons/sort-24px.svg";


function WarehouseList({warehouses,onDelete}) {

  const handleDelete = (id) => {
    onDelete(id);
  };

  const handleEdit = (id) => {};

  return (
    <div className="warehouse-list">
      <div className="warehouse-list__header-row">
        <div className="warehouse-list__header-item warehouse-list__header-item--name">
          WAREHOUSE <img className="warehouse-list__icon" src={sortIcon} alt="sort" />
        </div>
        <div className="warehouse-list__header-item warehouse-list__header-item--address">
          ADDRESS <img className="warehouse-list__icon" src={sortIcon} alt="sort" />
        </div>
        <div className="warehouse-list__header-item warehouse-list__header-item--contact-name">
          CONTACT NAME <img className="warehouse-list__icon" src={sortIcon} alt="sort" />
        </div>
        <div className="warehouse-list__header-item warehouse-list__header-item--contact-info">
          CONTACT INFORMATION <img className="warehouse-list__icon" src={sortIcon} alt="sort" />
        </div>
        <div className="warehouse-list__header-item">
          ACTIONS
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
              city={warehouse.city}
              country={warehouse.country}
              contactName={warehouse.contact_name}
              contactEmail={warehouse.contact_email}
              contactPhone={warehouse.contact_phone}
              onDelete={() => handleDelete(warehouse.id)}
              onEdit={() => handleEdit(warehouse.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default WarehouseList;
