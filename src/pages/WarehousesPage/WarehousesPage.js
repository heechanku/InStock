import "./WarehousesPage.scss";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import searchIcon from "../../assets/Icons/search-24px.svg";
import { useState } from "react";
import DeleteModal from "../../components/DeleteModal/DeleteModal";


//Test Data
const warehousesData = [
  {
    id: 0,
    warehouse_name: "Manhattan",
    address: "503 Broadway",
    city: "Manhattan",
    country: "USA",
    contact_name: "Parmin Aujla",
    contact_position: "Store Manager",
    contact_email: "paujla@instock.com",
    contact_phone: "+1 (629) 555-0129",
  },
  {
    id: 2,
    warehouse_name: "Washington",
    address: "300 Pearl Street SW",
    city: "Manhattan",
    country: "USA",
    contact_name: "Graema Lyon",
    contact_position: "Warehouse Manager",
    contact_email: "glyon@instock.com",
    contact_phone: "+1 (647) 504-0911",
  },
];

function WarehousesPage() {
  //TEMP
  const warehouses = warehousesData;
  
  const [deletingId, setDeletingId] = useState(null);
  const deletingWarehouse = warehouses.find(warehouse => warehouse.id === deletingId);

  const handleDelete = (id) => {
    setDeletingId(id);
  };
  const handleDeleteConfirmed = (id) => {
    //TODO: Send delete request
    setDeletingId(null);
  };
  const handleDeleteCancelled = () => {
    setDeletingId(null);
  };

  return (
    <main className="warehouses-page">
      <div className="warehouses-page__header">
        <h1 className="warehouses-page__title">Warehouses</h1>
        <input type="search" name="search" className="warehouses-page__search-field" placeholder="Search..." />
        <button className="warehouses-page__add-button">+ Add New Warehouse</button>
      </div>
      <WarehouseList warehouses={warehouses} onDelete={handleDelete} />

      {deletingWarehouse && <DeleteModal
        title={`Delete ${deletingWarehouse.warehouse_name} warehouse?`}
        message={`Please confirm that you'd like to delete ${deletingWarehouse.warehouse_name} from the list of warehouses. You won't be able to undo this action.`}
        onDelete={handleDeleteConfirmed}
        onCancel={handleDeleteCancelled}
      />
      }
    </main>
  );
}
export default WarehousesPage;
