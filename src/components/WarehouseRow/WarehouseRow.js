import "./WarehouseRow.scss";
import { Link, useNavigate } from "react-router-dom";
import chevronRightIcon from "../../assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";

function WarehouseRow({
  id,
  name,
  address,
  city,
  country,
  contactName,
  contactEmail,
  contactPhone,
  onDelete,
  onEdit,
}) {
  return (
    <div className="warehouse-row">
      <div className="warehouse-row__col warehouse-row__col--name">
        <h4 className="warehouse-row__cell-header">WAREHOUSE</h4>
        <Link className="warehouse-row__link" to={`/${id}`}>
          {name}
          <img
            className="warehouse-row__icon"
            src={chevronRightIcon}
            alt="open"
          />
        </Link>
      </div>
      <div className="warehouse-row__col warehouse-row__col--contact-name">
        <h4 className="warehouse-row__cell-header">CONTACT NAME</h4>
        {contactName}
      </div>
      <div className="warehouse-row__col warehouse-row__col--address">
        <h4 className="warehouse-row__cell-header">ADDRESS</h4>
        {address}, {city}, {country}
      </div>

      <div className="warehouse-row__col warehouse-row__col--contact-info">
        <h4 className="warehouse-row__cell-header">CONTACT INFORMATION</h4>
        <div className="warehouse-row__contact-info">
          <a
            className="warehouse-row__contact-item"
            href={"phone:" + contactPhone}
          >
            {contactPhone}
          </a>
          <a
            className="warehouse-row__contact-item"
            href={"mailto:" + contactEmail}
          >
            {contactEmail}
          </a>
        </div>
      </div>
      <div className="warehouse-row__col warehouse-row__col--actions">
        <button className="warehouse-row__icon-button" onClick={onDelete}>
          <img className="warehouse-row__icon" src={deleteIcon} alt="delete" />
        </button>
        <Link className="warehouse-row__link" to={`/${id}/edit`}>
          <img className="warehouse-row__icon" src={editIcon} alt="edit" />
        </Link>
      </div>
    </div>
  );
}
export default WarehouseRow;
