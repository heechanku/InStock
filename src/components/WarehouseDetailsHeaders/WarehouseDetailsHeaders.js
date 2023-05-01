import sortIcon from "../../assets/Icons/sort-24px.svg";
import "./WarehouseDetailsHeaders.scss";

const WarehouseDetailsHeaders = () => {
  return (
    <div className="inventory-row">
      <div className="inventory-row__container">
        <h4 className="inventory-row__container-headers">inventory item</h4>
        <img src={sortIcon} alt="sort" className="inventory-row__container-sort" />
      </div>
      <div className="inventory-row__container">
        <h4 className="inventory-row__container-headers">category</h4>
        <img src={sortIcon} alt="sort" className="inventory-row__container-sort" />
      </div>
      <div className="inventory-row__container">
        <h4 className="inventory-row__container-headers">status</h4>
        <img src={sortIcon} alt="sort" className="inventory-row__container-sort" />
      </div>
      <div className="inventory-row__container">
        <h4 className="inventory-row__container-headers">quantity</h4>
        <img src={sortIcon} alt="sort" className="inventory-row__container-sort" />
      </div>
      <div className="inventory-row__container">
        <h4 className="inventory-row__container-headers">actions</h4>
      </div>
    </div>
  );
};

export default WarehouseDetailsHeaders;