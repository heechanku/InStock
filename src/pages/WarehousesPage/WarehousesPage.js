import "./WarehousesPage.scss";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import searchIcon from "../../assets/Icons/search-24px.svg";

function WarehousesPage() {
  return (
    <main className="warehouses-page">
      <div className="warehouses-page__header">
        <h1 className="warehouses-page__title">Warehouses</h1>
        <input type="search" name="search" className="warehouses-page__search-field" placeholder="Search..." />
        <button className="warehouses-page__add-button">+ Add New Warehouse</button>
      </div>
      <WarehouseList />
    </main>
  );
}
export default WarehousesPage;
