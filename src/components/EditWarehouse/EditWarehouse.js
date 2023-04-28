import { useEffect, useState } from 'react';
import './EditWarehouse.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const baseUrl = process.env.REACT_ALL_BASE_URL ?? "http://localhost:5050/api";

function EditWarehouse({ warehouse }) {

    const navigate = useNavigate();
    const [values, setValues] = useState({ 

        warehouseName: warehouse.warehouse_name, 
        address: warehouse.address, 
        city: warehouse.city, 
        country: warehouse.country, 
        contactName: warehouse.contact_name,
        position: warehouse.position,
        contactPhone: warehouse.contact_phone,
        contactEmail: warehouse.contact_email
    });
    const [warehouses, setWarehouses] = useState(null);

    useEffect(() => {
        axios
            .get(`${baseUrl}/warehouses`)
            .then(response => {
                setWarehouses(response.data)
                console.log(response.data)
            })
            .catch(error => {
                console.error(error);
                alert("Error while retrieving warehouses");
            })
    }, [])

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({ ...values, [name]: value });
    };

    const handleSave = () => {
        axios
            .put(`${baseUrl}/warehouses/${warehouse.id}`, {
                "warehouse_name": values.warehouseName,
                "address": values.address,
                "city": values.city,
                "country": values.country,
                "contact_name": values.contactName,
                "position": values.position,
                "contact_phone": values.contactPhone,
                "contact_email": values.contactEmail
            })
            .then(response => {
                navigate(`/${warehouse.id}`);
            })
            .catch(error => {
                alert(error);
                console.error(error);
            });
    }

    const handleCancel = () => {
        navigate(`/${warehouse.id}`);
    }

    return (
        <form className="edit-warehouse">
            <div className="edit-warehouse__details-container">
                <h2 className='edit-warehouse__heading'>Warehouse Details</h2>
                <div className="edit-warehouse__form-group">
                    <div className="edit-warehouse__field-item">
                        <label className="edit-warehouse__label" htmlFor="warehouseName">Warehouse name</label>
                        <input className="edit-warehouse__input" type="text" name="warehouseName" id="warehouseName" placeholder='Warehouse Name' value={warehouse.warehouse_name} onChange={handleChange} />
                    </div>
                    <div className="edit-warehouse__field-item">
                        <label className="edit-warehouse__label" htmlFor="warehouseName">Street Address</label>
                        <input className="edit-warehouse__input" type="text" name="address" id="address" placeholder='Street Address' value={warehouse.address} onChange={handleChange} />
                    </div>
                    <div className="edit-warehouse__field-item">
                        <label className="edit-warehouse__label" htmlFor="warehouseName">City</label>
                        <input className="edit-warehouse__input" type="text" name="city" id="city" placeholder='City' value={warehouse.city} onChange={handleChange} />
                    </div>
                    <div className="edit-warehouse__field-item">
                        <label className="edit-warehouse__label" htmlFor="warehouseName">Country</label>
                        <input className="edit-warehouse__input" type="text" name="country" id="country" placeholder='Country' value={warehouse.country} onChange={handleChange} />
                    </div>
                </div>
            </div>
            <div className="edit-warehouse__contact-container">
                <h2 className='edit-warehouse__heading'>Contact Details</h2>
                <div className="edit-warehouse__form-group">
                    <div className="edit-warehouse__field-item">
                        <label className="edit-warehouse__label" htmlFor="warehouseName">Contact Name</label>
                        <input className="edit-warehouse__input" type="text" name="contactName" id="contactName" placeholder='Contact Name' value={warehouse.contact_name} onChange={handleChange} />
                    </div>
                    <div className="edit-warehouse__field-item">
                        <label className="edit-warehouse__label" htmlFor="warehouseName">Position</label>
                        <input className="edit-warehouse__input" type="text" name="position" id="position" placeholder='Position' value={warehouse.position} onChange={handleChange} />         
                    </div>
                    <div className="edit-warehouse__field-item">
                        <label className="edit-warehouse__label" htmlFor="warehouseName">Phone Number</label>
                        <input className="edit-warehouse__input" type="text" name="phoneNumber" id="phoneNumber" placeholder='Phone Number' value={warehouse.contact_phone} onChange={handleChange} />
                    </div>
                    <div className="edit-warehouse__field-item">
                        <label className="edit-warehouse__label" htmlFor="warehouseName">Email</label>
                        <input className="edit-warehouse__input" type="text" name="email" id="email" placeholder='Email' value={warehouse.contact_email} onChange={handleChange} />
                    </div>
                </div>
            </div>
            <div className="edit-warehouse__actions">
                <button className="edit-warehouse__button edit-warehouse__button--secondary" type="button" onClick={handleCancel}>Cancel</button>
                <button className="edit-warehouse__button edit-warehouse__button--primary" type="button" onClick={handleSave}>Save</button>
            </div>
        </form>
    );
}
export default EditWarehouse