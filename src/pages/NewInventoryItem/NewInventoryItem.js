import { useRef, useState, useEffect } from 'react';
import './NewInventoryItem.scss'
import {Link} from "react-router-dom";
import axios from 'axios';
import CategoryDropDown from '../../components/CategoryDropDown/CategoryDropDown'
import WarehouseDropDown from '../../components/WarehouseDropDown/WareHouseDropDown'

const base_url='http://localhost:5050';

export default function NewInventoryItem() {
const itemName = useRef("");
const description = useRef("");

 


const handleSubmit=()=>{
    
        const newItem={
            name:itemName.curent.value,
            descrption: description.curent.value,
            category:'',
            status:"",
            warehouse:"",
        }
    }

    return(
        <main>
            <h1> Add New Inventory Item</h1>
        <form>
        <section>
        <h2>Item Details</h2>
        
        <label><input type="text" ref={itemName}></input></label>
        <label>Descripton<textarea className="" ref={description}></textarea></label>
        <CategoryDropDown />

      

        </section>
        <section>
        <h2>Item Availablity</h2>
        <h4>Status</h4>
        <label>In stock<button type="radio" id="inStock" name="instock"></button></label>
        <label>Out of stock<button type="radio" id="outOfStock" name="outOfStock"></button></label>
        <WarehouseDropDown />

        </section>
        </form>
        <section>
            <Link to ="/">CANCEL</Link>
         <button type="submit" onSubmit={handleSubmit}>Add Item</button>
        </section>



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