import "./WarehouseRow.scss";
import { Link } from "react-router-dom";
import chevronRightIcon from "../../assets/Icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/Icons/delete_outline-24px.svg";
import editIcon from "../../assets/Icons/edit-24px.svg";

function WarehouseRow({ id, name, address, city, country, contactName, contactEmail, contactPhone }) {
  return (
    <div className="warehouse-row">
      <div className="warehouse-row__col warehouse-row__col--main">
        <Link className="warehouse-row__link" to={`/${id}`}>
          {name}
        </Link>
        <img className="warehouse-row__icon" src={chevronRightIcon} alt="open" />
      </div>
      <div className="warehouse-row__col warehouse-row__col--main">
        {address} {city} {country}
      </div>
      <div className="warehouse-row__col">{contactName}</div>
      <div className="warehouse-row__col">
        <div className="warehouse-row__contact-info">
          <a className="warehouse-row__contact-item" href={"phone:" + contactPhone}>
            {contactPhone}
          </a>
          <a className="warehouse-row__contact-item" href={"mailto:" + contactEmail}>
            {contactEmail}
          </a>
        </div>
      </div>
      <div className="warehouse-row__col warehouse-row__col--actions">
        <button className="warehouse-row__icon-button">
          <img className="warehouse-row__icon" src={deleteIcon} alt="delete" />
        </button>
        <button className="warehouse-row__icon-button">
          <img className="warehouse-row__icon" src={editIcon} alt="delete" />
        </button>
      </div>
    </div>
  );
}
export default WarehouseRow;
