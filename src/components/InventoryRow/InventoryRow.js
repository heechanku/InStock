import "./InventoryRow.scss";
import { Link } from "react-router-dom";
import chevronRightIcon from "../../assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";

function InventoryRow({
  id,
  name,
  category,
  status,
  quantity,
  onDelete,
  onEdit,
}) {
  if (status === "In Stock") {
    status = "IN STOCK";
  } else {
    status = "OUT OF STOCK";
  }
  return (
    <div className="inventory-row">
      <div className="inventory-row__col inventory-row__col--name">
        <h4 className="inventory-row__cell-header">INVENTORY ITEM</h4>
        <Link className="inventory-row__link" to={`/inventory/${id}`}>
          {name}
        </Link>
        <img
          className="inventory-row__icon"
          src={chevronRightIcon}
          alt="open"
        />
      </div>
      <div className="inventory-row__col inventory-row__col--category">
        <h4 className="inventory-row__cell-header">CATEGORY</h4>
        {category}
      </div>
      <div className="inventory-row__col inventory-row__col--status">
        <h4 className="inventory-row__cell-header">STATUS</h4>

        <div
          className={`inventory-row__col--status--${status === "IN STOCK" ? "green" : "red"
            }`}
        >
          {status}
        </div>
      </div>

      <div className="inventory-row__col inventory-row__col--quantity">
        <h4 className="inventory-row__cell-header">QUANTITY</h4>
        <div className="inventory-row__contact-info">
          <p className="inventory-row__quantity">{quantity}</p>
        </div>
      </div>
      <div className=" inventory-row__col--actions">
        <button className="inventory-row__icon-button" onClick={onDelete}>
          <img className="inventory-row__icon" src={deleteIcon} alt="delete" />
        </button>
        <button
          className="inventory-row__icon-button inventory-row__icon-button--edit"
          onClick={onEdit}
        >
          <img className="inventory-row__icon" src={editIcon} alt="edit" />
        </button>
      </div>
    </div>
  );
}
export default InventoryRow;
