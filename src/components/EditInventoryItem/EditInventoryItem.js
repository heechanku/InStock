import { useEffect, useRef, useState } from 'react';
import './EditInventoryItem.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import CtaButton from '../CtaButton/CtaButton';

const baseUrl = process.env.REACT_ALL_BASE_URL ?? "http://localhost:5050/api";

function EditInventoryItem({ item }) {
    const navigate = useNavigate();
    const [values, setValues] = useState({ itemName: item.item_name, description: item.description, category: item.category, status: item.status, warehouse: item.warehouse_id, quantity: item.quantity });
    const [warehouses, setWarehouses] = useState(null);
    const [categories, setCategories] = useState(null);


    //Onload get warehouses and categories
    useEffect(() => {
        axios
            .get(`${baseUrl}/warehouses`)
            .then(response => {
                setWarehouses(response.data);
                setValues({...values,"warehouse": response.data.find(warehouse => warehouse.warehouse_name===item.warehouse_name).id});
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

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    const handleSave = () => {
        if(!values.itemName || !values.description){
            alert("Missing required fields.");
            return;
        }

        axios
            .put(`${baseUrl}/inventories/${item.id}`, {
                "warehouse_id": values.warehouse,
                "item_name": values.itemName,
                "description": values.description,
                "category": values.category,
                "status": values.status,
                "quantity": values.quantity
            })
            .then(response => {
                navigate(`/inventory/${item.id}`);
            })
            .catch(error => {
                alert(error);
                console.error(error);
            });
    }

    const handleCancel = () => {
        navigate(-1);
    }

    return (
        <form className="edit-inventory-item">
            <div className="edit-inventory-item__details-container">
                <h2 className='edit-inventory-item__heading'>Item Details</h2>
                <div className="edit-inventory-item__form-group">
                    <div className="edit-inventory-item__field-item">
                        <label className="edit-inventory-item__label" htmlFor="itemName">Item name</label>
                        <input className="edit-inventory-item__input" type="text" name="itemName" id="itemName" required={true} placeholder='Item Name'  value={values.itemName} onChange={handleChange} />
                    </div>
                    <div className="edit-inventory-item__field-item">
                        <label className="edit-inventory-item__label" htmlFor="description">Description</label>
                        <textarea className="edit-inventory-item__input edit-inventory-item__input--textarea" name="description" required={true} id="description" placeholder='Enter description...' value={values.description} onChange={handleChange} />
                    </div>
                    <div className="edit-inventory-item__field-item">
                        <label className="edit-inventory-item__label" htmlFor="category">Category</label>
                        <select className="edit-inventory-item__input" name="category" id="category" value={values.category} onChange={handleChange} >
                            {categories && categories.map(category => <option key={category} value={category}>{category}</option>)}
                        </select>
                    </div>
                </div>
            </div>
            <div className="edit-inventory-item__availability-container">
                <h2 className='edit-inventory-item__heading'>Item Availability</h2>
                <div className="edit-inventory-item__form-group">
                    <div className="edit-inventory-item__field-item">
                        <p className="edit-inventory-item__label">Status</p>
                        <div className="edit-inventory-item__radio-group">
                            <div className="edit-inventory-item__field-item edit-inventory-item__field-item--radio">
                                <input className="edit-inventory-item__input edit-inventory-item__input--radio" type="radio" name="status" id="statusInStock" value="In Stock" checked={values.status === 'In Stock'} onChange={handleChange}/>
                                <label className="edit-inventory-item__radio-label" htmlFor="statusInStock">In stock</label>
                            </div>
                            <div className="edit-inventory-item__field-item edit-inventory-item__field-item--radio">
                                <input className="edit-inventory-item__input edit-inventory-item__input--radio" type="radio" name="status" id="statusOutOnStock" value="Out of Stock" checked={values.status === 'Out of Stock'} onChange={handleChange} />
                                <label className="edit-inventory-item__radio-label" htmlFor="statusOutOnStock">Out of stock</label>
                            </div>
                        </div>
                    </div>
                    {values.status === 'In Stock' && <div className="edit-inventory-item__field-item">
                        <label className="edit-inventory-item__label" htmlFor="warehouse">Quantity</label>
                        <input className="edit-inventory-item__input" type="number" name="quantity" id="quantity" placeholder='' min="1" value={values.quantity} onChange={handleChange} />
                    </div>}
                    <div className="edit-inventory-item__field-item">
                        <label className="edit-inventory-item__label" htmlFor="warehouse">Warehouse</label>
                        <select className="edit-inventory-item__input edit-inventory-item__input--select" name="warehouse" value={values.warehouse} onChange={handleChange} >
                            {warehouses && warehouses.map(warehouse => <option key={warehouse.id} value={warehouse.id}>{warehouse.warehouse_name}</option>)}
                        </select>
                    </div>


                </div>

            </div>
            <div className="edit-inventory-item__actions">
                <CtaButton type="secondary" onClick={handleCancel}>Cancel</CtaButton>
                <CtaButton onClick={handleSave}>Save</CtaButton>
            </div>
        </form>
    );
}
export default EditInventoryItem;