import './WareHouseDropDown.scss'
import {useState, useEffect} from 'react';
import axios from 'axios';

export default function WarehouseDropDown(){
    const base_url='http://localhost:5050';
    const [warehouses, setWarehouses]=useState([]);
    const[selectedWarehouse, setSelectedWarehouse]= useState("");

    useEffect(()=>{
        axios.get(`${base_url}/api/warehouses`).then((res) =>{
            setWarehouses(res.data);
        });
    }, []);
 

    return(
        <select value={selectedWarehouse} onChange={(e) => setSelectedWarehouse(e.target.value)}>
            {warehouses.map(warehouse=>[
                <option key={warehouse.id} value={warehouse.id}>{warehouse.warehouse_name}</option>
              
            ])}
        </select>

    );
}