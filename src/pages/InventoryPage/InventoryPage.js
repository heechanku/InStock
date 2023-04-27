import "./InventoryPage.scss";
import InventoryList from "../../components/InventoryList/InventoryList";
import { Link, useParams } from "react-router-dom";


function InventoryPage({ mode = "view" }) {
  const { id } = useParams();

  return <main className="inventory-page">
  <div className="inventory-page__header">
        <h1 className="inventory-page__title">InventoryPage</h1>
        <input type="search" name="search" className="inventory-page__search-field" placeholder="Search..." />
        {mode === "view" &&  <Link to="/inventory/new"><button className="inventory-page__add-button">+ Add Inventory</button></Link>}
      </div>

  <InventoryList/>
  </main>;
}
export default InventoryPage;
