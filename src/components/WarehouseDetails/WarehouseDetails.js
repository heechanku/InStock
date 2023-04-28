import "./WarehouseDetails.scss";

const WarehouseDetails = ({address, city, country, contactName, position, contactPhone, contactEmail}) => {
    return (
        <div className="warehouse-details__container-info">
          <div className="warehouse-details__container-address">
            <h4 className="warehouse-details__head">warehouse address:</h4>
            <p className="warehouse-details__text">
              {address}, {city}, {country} 
            </p>
          </div>
          <div className="warehouse-details__container-contact">
            <div className="warehouse-details__container-details warehouse-details__container-details--left">
              <h4 className="warehouse-details__head">contact name:</h4>
              <p className="warehouse-details__text">{contactName}</p>
              <p className="warehouse-details__text">{position}</p>
            </div>
            <div className="warehouse-details__container-details warehouse-details__container-details--right">
              <h4 className="warehouse-details__head">contact information:</h4>
              <p className="warehouse-details__text">{contactPhone}</p>
              <p className="warehouse-details__text">{contactEmail}</p>
            </div>
          </div>
          {/* div for inventory list here */}
        </div> 
    )
}
export default WarehouseDetails