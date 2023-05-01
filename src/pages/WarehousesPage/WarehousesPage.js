import "./WarehousesPage.scss";
import WarehouseList from "../../components/WarehouseList/WarehouseList";
import NewWarehouse from "../../components/NewWarehouse/NewWarehouse";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import backArrow from '../../assets/Icons/arrow_back-24px.svg'
import DeleteModal from "../../components/DeleteModal/DeleteModal";
import CtaButton from "../../components/CtaButton/CtaButton";
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL ?? "http://localhost:5050/api";


function WarehousesPage({mode = "view"}) {
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
        {mode === "add" && 
        <> 
        <Link to="/">
          <button className="warehouses-page__back-button">
            <img className="warehouses-page__arrow" src={backArrow} alt="back" />
          </button>
        </Link>
        <h1 className="warehouses-page__title">Add New Warehouse</h1>
        </>
        }
        
        {mode === "view" &&
        <>
         <h1 className="warehouses-page__title">Warehouses</h1>
        <input type="search" name="search" className="warehouses-page__search-field" placeholder="Search..." />
        <Link to="/add"><CtaButton>+ Add New Warehouse</CtaButton></Link>
        </>
        }
      </div>

      {mode === "view" && (warehouses !== null
        
          ? <WarehouseList warehouses={warehouses} onDelete={handleDelete} />
          : <h2>Loading...</h2>)
        }

        {deletingWarehouse && <DeleteModal
          title={`Delete ${deletingWarehouse.warehouse_name} warehouse?`}
          message={`Please confirm that you'd like to delete ${deletingWarehouse.warehouse_name} from the list of warehouses. You won't be able to undo this action.`}
          onConfirm={handleDeleteConfirmed}
          onCancel={handleDeleteCancelled}
        />
        } 
      {mode === "add" && <NewWarehouse />}      
    </main>        
  );
}
export default WarehousesPage;
