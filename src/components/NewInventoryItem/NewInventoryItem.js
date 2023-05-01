import { useRef, useState, useEffect } from 'react';
import './NewInventoryItem.scss'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import backArrow from '../../assets/Icons/arrow_back-24px.svg'
import errorIcon from '../../assets/Icons/error-24px.svg';


export default function NewInventoryItem() {

    const baseUrl = process.env.REACT_ALL_BASE_URL ?? "http://localhost:5050/api";
    const itemName = useRef(null);
    const description = useRef(null);
    const quantity = useRef(null);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedWarehouse, setSelectedWarehouse] = useState(null);
    const [status, setStatus] = useState("");
    const [warehouses, setWarehouses] = useState([]);
    const [categories, setCategories] = useState([]);
    const [errors, setErrors] = useState({ itemName: false, description: false, quantity: false, category: false, warehouse: false, status: false });
    const navigate = useNavigate();


    const handleCancel = () => {
        navigate(`/inventory`);

    }

    function handleStatusChange(event) {
        setStatus(event.target.value);
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


    const handleSubmit = (e) => {
        e.preventDefault();


        let newErrors = { ...errors };

        newErrors.itemName = itemName.current.value.trim() === "";
        newErrors.description = description.current.value.trim() === "";
        newErrors.category = selectedCategory === "";
        newErrors.status = status === "";
        newErrors.warehouse = !selectedWarehouse;

        setErrors(newErrors);

        console.log(newErrors);

        if (newErrors.itemName || newErrors.description || newErrors.category || newErrors.status || newErrors.quantity || newErrors.warehouse) {
            alert("Please fill out all fields.");
            return;
        }

        // check that quantity input is a postive number
        const quantityValue = quantity.current?.value ?? 0;
        
        if (isNaN(quantityValue) || quantityValue < 0) {
            alert("Quantity must be a positive number..");
        }
        //create new item
        const newItem = {
            item_name: itemName.current.value,
            description: description.current.value,
            category: selectedCategory,
            quantity: quantityValue,
            status: status,
            warehouse_id: selectedWarehouse.id,
        }

        //send new item to server
        axios.post(`http://localhost:5050/api/inventories`, newItem)
            .then(response => navigate(`/inventory/${response.data.id}`))
            .catch(error => {
                alert(error);
                console.error(error);
            });
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
                            <input className={`inventory-item__input ${errors.itemName ? "inventory-item__input--error" : ""}`} ref={itemName} type="text" name="itemName" id="itemName" placeholder='Item Name' />
                            {errors.itemName && <div className='inventory-item__error-label'><img className='inventory-item__error-icon' src={errorIcon} alt="error" />This field is required</div>}
                        </div>
                        <div className="inventory-item__field-item">
                            <label className="inventory-item__label" htmlFor="description">Description</label>
                            <textarea ref={description} className={`inventory-item__input ${errors.description ? "inventory-item__input--error" : ""} inventory-item__input--textarea`} name="description" id="description" placeholder='Enter description...' />
                            {errors.description && <div className='inventory-item__error-label'><img className='inventory-item__error-icon' src={errorIcon} alt="error" />This field is required</div>}
                        </div>
                        <div className="inventory-item__field-item">
                            <label className="inventory-item__label" htmlFor="category">Category</label>
                            <select className={`inventory-item__input ${errors.category ? "inventory-item__input--error" : ""} inventory-item__input--select`} name="warehouse" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                                <option value=""> Please Select </option>
                                {categories.map(category => [
                                    <option key={category}>{category}</option>
                                ])}
                            </select>
                            {errors.category && <div className='inventory-item__error-label'><img className='inventory-item__error-icon' src={errorIcon} alt="error" />This field is required</div>}
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
                                    <input className="inventory-item__input inventory-item__input--radio" type="radio" value="In Stock" checked={status === 'In Stock'} onChange={handleStatusChange} />
                                    <label className="inventory-item__radio-label" htmlFor="statusInStock">In Stock</label>
                                </div>
                                <div className=" inventory-item__field-item inventory-item__field-item--radio">
                                    <input className="inventory-item__input inventory-item__input--radio" type="radio" value="Out of Stock" checked={status === 'Out of Stock'} onChange={handleStatusChange} />
                                    <label className="inventory-item__radio-label" htmlFor="statusOutOnStock">Out Of Stock</label>
                                </div>

                            </div>
                            {errors.status && <div className='inventory-item__error-label'><img className='inventory-item__error-icon' src={errorIcon} alt="error" />This field is required</div>}


                        </div>
                        {status === 'In Stock' && (
                            <div className=" inventory-item__quantity inventory-item__field-item inventory-item__field-item--radio ">
                                <label className="inventory-item__label">Quantity<input className="inventory-item__input inventory-item__quantity" type="number" ref={quantity} defaultValue={0}></input></label>
                            </div>

                        )}

                        <div className="inventory-item__field-item">
                            <label className="inventory-item__label" htmlFor="warehouse">Warehouse</label>
                            <select className={`inventory-item__input ${errors.warehouse ? "inventory-item__input--error" : ""} inventory-item__input--select`} name="warehouse" value={selectedWarehouse?.id} onChange={handleWarehouseChange}>
                                <option value="">Please Select</option>
                                {warehouses.map((warehouse) => (
                                    <option key={warehouse.id} value={warehouse.id}>{warehouse.warehouse_name}</option>
                                ))}
                            </select>
                            {errors.warehouse && <div className='inventory-item__error-label'><img className='inventory-item__error-icon' src={errorIcon} alt="error" />This field is required</div>}
                        </div>
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

