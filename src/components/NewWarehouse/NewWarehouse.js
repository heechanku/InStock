import { useEffect, useRef, useState } from 'react';
import './NewWarehouse.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import backArrow from '../../assets/Icons/arrow_back-24px.svg'

const baseUrl = process.env.REACT_ALL_BASE_URL ?? "http://localhost:5050/api";

export default function NewWarehouse() {

    const navigate = useNavigate();
    const [values, setValues] = useState({
        
        warehouse_name: "",
        address: "",
        city: "",
        country: "",
        contact_name: "",
        position: "",
        contact_phone: "",
        contact_email: ""
    
    })

    const handleSubmit = (e) => {

        e.preventDefault();
        const newWarehouse = {

            warehouse_name: values.warehouse_name.current,
            address: values.address.current,
            city: values.city.current,
            country: values.country.current,
            contact_name: values.contact_name.current,
            contact_phone: values.contact_phone.current,
            contact_email: values.contact_email.current

        }

        axios
            .post(`http://localhost:5050/api/warehouses`, newWarehouse)
            .then(res => {

        })
            .catch(error => {
                console.log(error);
            });
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues(name, value);

    }

    const handleSave = () => {
        axios
            .put(`${baseUrl}/warehouses`, {
                "warehouse_name": values.warehouse_name,
                "address": values.address,
                "city": values.city,
                "country": values.country,
                "contact_name": values.contact_name,
                "position": values.position,
                "contact_phone": values.contact_phone,
                "contact_email": values.contact_email
            })
            .then(response => {
                navigate(`/`);
            })
            .catch(error => {
                alert(error);
                console.error(error);
            });
    }

    const handleCancel = () => {
        navigate(`/`);
    }

    return (
        <form className="edit-warehouse" onSubmit={handleSubmit}>
            <div className="edit-warehouse__details-container">
                <h2 className='edit-warehouse__heading'>Warehouse Details</h2>
                <div className="edit-warehouse__form-group">
                    <div className="edit-warehouse__field-item">
                        <label className="edit-warehouse__label" htmlFor="warehouseName">Warehouse name</label>
                        <input className="edit-warehouse__input" type="text" name="warehouseName" id="warehouseName" placeholder='Warehouse Name' value={values.warehouse_name} onChange={handleChange} />
                    </div>
                    <div className="edit-warehouse__field-item">
                        <label className="edit-warehouse__label" htmlFor="warehouseName">Street Address</label>
                        <input className="edit-warehouse__input" type="text" name="address" id="address" placeholder='Street Address' value={values.address} onChange={handleChange} />
                    </div>
                    <div className="edit-warehouse__field-item">
                        <label className="edit-warehouse__label" htmlFor="warehouseName">City</label>
                        <input className="edit-warehouse__input" type="text" name="city" id="city" placeholder='City' value={values.city} onChange={handleChange} />
                    </div>
                    <div className="edit-warehouse__field-item">
                        <label className="edit-warehouse__label" htmlFor="warehouseName">Country</label>
                        <input className="edit-warehouse__input" type="text" name="country" id="country" placeholder='Country' value={values.country} onChange={handleChange} />
                    </div>
                </div>
            </div>
            <div className="edit-warehouse__contact-container">
                <h2 className='edit-warehouse__heading'>Contact Details</h2>
                <div className="edit-warehouse__form-group">
                    <div className="edit-warehouse__field-item">
                        <label className="edit-warehouse__label" htmlFor="warehouseName">Contact Name</label>
                        <input className="edit-warehouse__input" type="text" name="contactName" id="contactName" placeholder='Contact Name' value={values.contactName} onChange={handleChange}  />
                    </div>
                    <div className="edit-warehouse__field-item">
                        <label className="edit-warehouse__label" htmlFor="warehouseName">Position</label>
                        <input className="edit-warehouse__input" type="text" name="position" id="position" placeholder='Position' value={values.position} onChange={handleChange}  />         
                    </div>
                    <div className="edit-warehouse__field-item">
                        <label className="edit-warehouse__label" htmlFor="warehouseName">Phone Number</label>
                        <input className="edit-warehouse__input" type="text" name="phoneNumber" id="phoneNumber" placeholder='Phone Number' value={values.contactPhone} onChange={handleChange}  />
                    </div>
                    <div className="edit-warehouse__field-item">
                        <label className="edit-warehouse__label" htmlFor="warehouseName">Email</label>
                        <input className="edit-warehouse__input" type="text" name="email" id="email" placeholder='Email' value={values.email} onChange={handleChange}  />
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