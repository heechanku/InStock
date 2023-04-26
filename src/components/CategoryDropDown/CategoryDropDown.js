import './CategoryDropDown.scss'
import {useState, useEffect} from 'react';
import axios from 'axios';

export default function CategoryDropDown(){
    const base_url='http://localhost:5050';
    const [categories, setCategories]=useState([]);

    useEffect(()=>{
        axios.get(`${base_url}/api/dropdown/inventories/category`).then((res) =>{
            setCategories(res.data);
        });
    }, []);

    return(
        <select>
            {categories.map(category=>[
                <option key={category}>{category}</option>
            ])}
        </select>

    );
}