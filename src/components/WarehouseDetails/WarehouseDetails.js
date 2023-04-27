import "./WarehouseDetails.scss";

const WarehouseDetails = ({address, city, country, contactName, position, phone, email}) => {
    return (
        <div className="warehouse-details__container-info">
          <div className="warehouse-details__container-address">
            <h4 className="warehouse-details__head">warehouse address:</h4>
            <p className="warehouse-details__text">
              300 Pearl St. SW, Washington, USA 
            </p>
          </div>
          <div className="warehouse-details__container-contact">
            <div className="warehouse-details__container-details warehouse-details__container-details--left">
              <h4 className="warehouse-details__head">contact name:</h4>
              <p className="warehouse-details__text">Graeme Lyon</p>
              <p className="warehouse-details__text">Warehouse Manager</p>
            </div>
            <div className="warehouse-details__container-details warehouse-details__container-details--right">
              <h4 className="warehouse-details__head">contact information:</h4>
              <p className="warehouse-details__text">+1 (647) 504-0911</p>
              <p className="warehouse-details__text">glyon@instock.com</p>
            </div>
          </div>
          {/* div for inventory list here */}
        </div> 
    )
}
export default WarehouseDetails