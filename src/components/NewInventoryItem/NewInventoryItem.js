import { useRef, useState, useEffect } from 'react';
import './NewInventoryItem.scss'
import { Link,  useNavigate  } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import backArrow from '../../assets/Icons/arrow_back-24px.svg'

<<<<<<< Updated upstream
const base_url = 'http://localhost:5050';

export default function NewInventoryItem() {
    const navigate = useNavigate();
=======

const baseUrl = process.env.REACT_ALL_BASE_URL ?? "http://localhost:5050/api";

export default function NewInventoryItem() {
  
    const baseUrl = process.env.REACT_ALL_BASE_URL ?? "http://localhost:5050/api";
>>>>>>> Stashed changes
    const itemName = useRef("");
    const description = useRef("");
    const quantity = useRef();
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedWarehouse, setSelectedWarehouse] = useState("");
    const [status, setStatus] = useState("");
    const [warehouses, setWarehouses] = useState([]);
    const [categories, setCategories] = useState([]);
    const [itemNameError, setItemNameError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    const [stockStatus, setStockStatus] = useState('In Stock');
    // const [quantity, setQuantity] = useState(0);
  
    const navigate = useNavigate();

    const [shouldRender, setShouldRender] = useState(false);

    function handleClicked() {
      setShouldRender(false);
    }


    //Onload get warehouses and categories
    useEffect(() => {
        axios
            .get(`${baseUrl}/warehouses`)
            .then(response => {
                setWarehouses(response.data);
            })
            .catch(error => {
                console.error(error);
                alert("Error while retrieving warehouses");
            });
        axios
            .get(`${baseUrl}/dropdown/inventories/category`)
            .then(response => {
                setCategories(response.data);
            })
            .catch(error => {
                console.error(error);
                alert("Error while retrieving categories");
            });
        }, [])

    const handleWarehouseChange = (e) => {
        const warehouseId = e.target.value;
        const warehouse = warehouses.find((w) => w.id === warehouseId);
        setSelectedWarehouse(warehouse);
    };

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
        // Reset the quantity field when the status changes to Out of Stock
        if (event.target.value === 'Out of Stock') {
     
          
        }
      };
    
  

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check that all fields are filled out
        if (
            itemName.current.value.trim() === "" ||
            description.current.value.trim() === "" ||
            selectedCategory === "" ||
            status === "" ||
            quantity=== "" || 
            selectedWarehouse === null
        ) {
            alert("Please fill out all fields.");
            return;
        }

        const quantityValue = quantity.current.value;
        if (isNaN(quantityValue) || quantityValue < 0) {
            alert("Quantity must be apositive number..");
            
        }
        const newItem = {
            item_name: itemName.current.value,
            descrption: description.current.value,
            category: selectedCategory,
            quantity: quantity.current.value,
            status: status,
            warehouse_id: selectedWarehouse.id,
        }

        axios.post(`http://localhost:5050/api/inventories`, newItem)
<<<<<<< Updated upstream
            .catch(error => {
                console.log(error);
            });

=======
        .then(res => {
        })
        .catch(error => {
            alert(error);
            console.error(error);
        });
    }

    const handleCancel = () => {
        navigate(`/inventory`);
>>>>>>> Stashed changes
    }


   
    return (
        <main>
            <div className="inventory-item__header">
        <h1 className="inventory-item__title">
          <Link to="/"><button className="inventory-item__back-button"><img className="inventory-item__back-icon" src={backArrow} alt="back" /></button></Link>{"Add New Inventory Item"}</h1>
            </div>
            <form className="inventory-item" onSubmit={handleSubmit}>
                <section className="inventory-item__details-container">
                    <h2 className='inventory-item__heading'>Item Details</h2>
                    <div className="inventory-item__form-group">
                        <div className="inventory-item__field-item">
                            <label className="inventory-item__label" htmlFor="itemName" >Item name</label>
                            <input className="inventory-item__input" ref={itemName} type="text" name="itemName" id="itemName" placeholder='Item Name' />
                        </div>
                        <div className="inventory-item__field-item">
                            <label className="inventory-item__label" htmlFor="description">Description</label>
                            <textarea ref={description} className="inventory-item__input inventory-item__input--textarea" name="description" id="description" placeholder='Enter description...' />
                        </div>
                        <div className="inventory-item__field-item">
                            <label className="inventory-item__label" htmlFor="category">Category</label>
                            <select className="inventory-item__input inventory-item__input--select" name="warehouse" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                                <option value=""> Please Select </option>
                                {categories.map(category => [
                                    <option key={category}>{category}</option>
                                ])}
                            </select>
                        </div>
                    </div>
                </section>
                <section className='inventory-item__availability-container'>
                    <h2 className='inventory-item__heading'>Item Availability</h2>
                    <div className="inventory-item__form-group">
                        <div className="inventory-item__field-item">
                            <p className="inventory-item__label">Status</p>

                            <div className="inventory-item__radio-group">
                                <div className="inventory-item__field-item inventory-item__field-item--radio">
                                    <input className=" inventory-item__field-item--out-of-stock  inventory-item__input inventory-item__input--radio" type="radio" value="In Stock" checked={status === 'In Stock'} onChange={handleStatusChange} />
                                    <label className="inventory-item__radio-label" htmlFor="statusInStock">In Stock</label>
                                </div>
                                <div className=" inventory-item__field-item--out-of-stock inventory-item__field-item inventory-item__field-item--radio">
                                    <input className="inventory-item__input inventory-item__radio-out inventory-item__input--radio" type="radio" value="Out of Stock" checked={status === 'Out of Stock'} onChange={handleStatusChange} />
                                    <label className="inventory-item__radio-label" htmlFor="statusOutOnStock">Out Of Stock</label>
                                </div>
                            </div>



                            <div className=" inventory-item__quantity inventory-item__field-item inventory-item__field-item--radio ">
                                <label className="inventory-item__label">Quantity<input className="inventory-item__input inventory-item__quantity" type="text" ref={quantity}></input></label>
                            </div>
                        </div>
                    </div>

                    <div className="inventory-item__field-item">
                        <label className="inventory-item__label" htmlFor="warehouse">Warehouse</label>
                        <select className="inventory-item__input inventory-item__input--select" name="warehouse" value={selectedWarehouse?.id} onChange={handleWarehouseChange}>
                            <option value="">Please Select</option>
                            {warehouses.map((warehouse) => (
                                <option key={warehouse.id} value={warehouse.id}>{warehouse.warehouse_name}</option>
                            ))}
                        </select>
                    </div>
              
            </section>

            <div className="inventory-item__actions">
                <button className="inventory-item__button inventory-item__button--secondary" type="button">Cancel</button>
                <button className="inventory-item__button inventory-item__button--primary" type="submit">Add Item</button>
            </div>

        
        </form>
       
        </main >

        
    )

}

