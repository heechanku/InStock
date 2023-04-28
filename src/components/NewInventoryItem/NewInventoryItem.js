import { useRef, useState, useEffect } from 'react';
import './NewInventoryItem.scss'
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import backArrow from '../../assets/Icons/arrow_back-24px.svg'

const base_url = 'http://localhost:5050';

export default function NewInventoryItem() {
    const navigate = useNavigate();
    const itemName = useRef("");
    const quantity = useRef("");
    const description = useRef("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedWarehouse, setSelectedWarehouse] = useState("");
    const [status, setStatus] = useState("");
    const [warehouses, setWarehouses] = useState([]);
    const [categories, setCategories] = useState([]);



    useEffect(() => {
        axios.get(`${base_url}/api/warehouses`).then((res) => {
            setWarehouses(res.data);
            return axios.get(`${base_url}/api/dropdown/inventories/category`);
        })
            .then((res) => {
                setCategories(res.data);
            });
    }, []);

    const handleWarehouseChange = (e) => {
        const warehouseId = e.target.value;
        const warehouse = warehouses.find((w) => w.id === warehouseId);
        setSelectedWarehouse(warehouse);
    };

    const handleSubmit = (e) => {

        e.preventDefault();
        const newItem = {
            item_name: itemName.current.value,
            descrption: description.current.value,
            category: selectedCategory,
            quantity: quantity.current.value,
            status: status,
            warehouse_id: selectedWarehouse.id,
        }

        axios.post(`http://localhost:5050/api/inventories`, newItem)
            .catch(error => {
                console.log(error);
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
                                    <input className="inventory-item__input inventory-item__input--radio" type="radio" value="In Stock" checked={status === 'In Stock'} onChange={(e) => setStatus(e.target.value)} />
                                    <label className="inventory-item__radio-label" htmlFor="statusInStock">In Stock</label>
                                </div>
                                <div className="inventory-item__field-item inventory-item__field-item--radio">
                                    <input className="inventory-item__input inventory-item__input--radio" type="radio" value="Out of Stock" checked={status === 'Out of Stock'} onChange={(e) => setStatus(e.target.value)} />
                                    <label className="inventory-item__radio-label" htmlFor="statusOutOnStock">Out Of Stock</label>
                                </div>
                            </div>



                            <div className="inventory-item__field-item inventory-item__field-item--radio">
                                <label className="inventory-item__label">Quantity<input className="inventory-item__input" type="text" ref={quantity}></input></label>
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

export function getCategories() {
    axios.get(`${base_url}/api/dropdown/inventories/category`)
        .then((res) => {
            return res.data
        })
        .catch(error => {
            console.log(error);
        });
}  