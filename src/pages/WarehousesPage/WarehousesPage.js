import "./WarehousesPage.scss";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import searchIcon from "../../assets/Icons/search-24px.svg";
import { useEffect, useState } from "react";
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL ?? "http://localhost:5050/api";

function WarehousesPage() {
  const [warehouses, setWarehouses] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const deletingWarehouse = warehouses?.find(warehouse => warehouse.id === deletingId);


  useEffect(() => {
    if (warehouses === null) {
      axios
        .get(`${baseUrl}/warehouses`)
        .then(response => {
          setWarehouses(response.data);
        })
        .catch(error => {
          alert(error);
          console.error(error);
        });
    }
  }, [warehouses]);

  const handleDelete = (id) => {
    setDeletingId(id);
  };

  const handleDeleteConfirmed = (id) => {
    axios
      .delete(`${baseUrl}/warehouses/${deletingId}`)
      .then(response => {
        setDeletingId(null);
        setWarehouses(null); //Triggers a warehouse list to reload
      })
      .catch(error => {
        alert(error);
        console.error(error);
      });
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

      {warehouses !== null
        ? <WarehouseList warehouses={warehouses} onDelete={handleDelete} />
        : <h2>Loading...</h2>
      }

      {deletingWarehouse && <DeleteModal
        title={`Delete ${deletingWarehouse.warehouse_name} warehouse?`}
        message={`Please confirm that you'd like to delete ${deletingWarehouse.warehouse_name} from the list of warehouses. You won't be able to undo this action.`}
        onConfirm={handleDeleteConfirmed}
        onCancel={handleDeleteCancelled}
      />
      }
    </main>
  );
}
export default WarehousesPage;
