import backArrow from "../../assets/Icons/arrow_back-24px.svg";
import edit from "../../assets/Icons/edit-24px.svg";
import "./WarehouseDetailsPage.scss";
import WarehouseDetails from "../../components/WarehouseDetails/WarehouseDetails";
import { Link, useParams } from "react-router-dom";

function WarehouseDetailsPage({ mode = "view" }) {
  //const [singleWarehouse, setSingleWarehouse] = useState({}); * for later useState *
  const { id } = useParams();

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
        <h1 className="warehouse-details__title">Washington</h1>
        {mode === "view" &&
          <Link to={`/${id}/edit`} className="warehouse-details__edit">
            <img
              src={edit}
              alt="pencil"
              className="warehouse-details__edit-img"
            />
            <p className="warehouse-details__edit-text">Edit</p>
          </Link>
        }
      </div>
      {mode === "view" && <WarehouseDetails />}
    </section>

  );
};
export default WarehouseDetailsPage;
