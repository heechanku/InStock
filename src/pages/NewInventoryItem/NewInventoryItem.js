import { useRef, useState, useEffect } from 'react';
import './NewInventoryItem.scss'
import {Link} from "react-router-dom";
import axios from 'axios';


const base_url='http://localhost:5050';

export default function NewInventoryItem() {

const itemName = useRef("");
const quantity = useRef("");
const description = useRef("");
const[selectedCategory, setSelectedCategory]= useState("");
const[selectedWarehouse, setSelectedWarehouse]= useState("");
const [status, setStatus]=useState("");
const [warehouses, setWarehouses]=useState([]);
const [categories, setCategories]=useState([]);



useEffect(()=>{
    axios.get(`${base_url}/api/warehouses`).then((res) =>{
        setWarehouses(res.data);
        return axios.get(`${base_url}/api/dropdown/inventories/category`);
    })
        .then((res) =>{
            setCategories(res.data);
        });
    }, []);

    const handleWarehouseChange = (e) => {
        const warehouseId = e.target.value;
        const warehouse = warehouses.find((w) => w.id === warehouseId);
        setSelectedWarehouse(warehouse);
      };   

const handleSubmit=(e)=>{

    e.preventDefault();
        const newItem={
            item_name:itemName.current.value,
            descrption: description.current.value,
            category: selectedCategory,
            quantity: quantity.current.value,
            status:status,
            warehouse_id: selectedWarehouse.id,
        }
        
    axios.post(`http://localhost:5050/api/inventories`, newItem).then(res=>{

    })
    .catch(error=>{
        console.log(error);
    });    
    
            console.log("NI", newItem);
    }

    return(
        <main>
            <h1> Add New Inventory Item</h1>
        <form className ="inventory-form" onSubmit={handleSubmit}>
        <section className = "inventory-form__left">
        <h2>Item Details</h2>
        <label>Item Name<input type="text" ref={itemName}></input></label>
        <label>Descripton<textarea ref={description}></textarea></label>
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">-- Select Category--</option>
            {categories.map(category=>[
                <option key={category}>{category}</option>
            ])}
        </select>
        </section>
        <section className='inventory-form__right'>
        <h2>Item Availablity</h2>
        <h4>Status</h4>
        <label>In stock<input type="radio" value="In Stock"  checked={status === 'In Stock'} onChange={(e) => setStatus(e.target.value)}></input></label>
        <label>Out of stock<input type="radio" value="Out of Stock"  checked={status === 'Out of Stock'} onChange={(e) => setStatus(e.target.value)}></input></label>
        <label>Quantity<input type="text" ref={quantity}></input></label>
        <select value={selectedWarehouse?.id} onChange={handleWarehouseChange}>
        <option value="">-- Select Warehouse --</option>
      {warehouses.map((warehouse) => (
        <option key={warehouse.id} value={warehouse.id}>{warehouse.warehouse_name}</option>
      ))}
    </select>
        </section>
       
        <section className='inventory-form__bottom'>
            <Link to ="/">CANCEL</Link>
         <button type="submit" >Add Item</button>
        </section>
        </form>
       
        </main>

        
    )

}

export function getCategories(){
    axios.get(`${base_url}/api/dropdown/inventories/category`)
    .then((res)=>{
        return res.data
    })
    .catch(error => {
        console.log(error);
    });
}  