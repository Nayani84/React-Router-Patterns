import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './NewColorForm.css';

function NewColorForm({ addColor }) {
    const INITIAL_STATE = {
        name: '',
        color: '#000000'
    }

    const navigate = useNavigate();

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addColor({ name: formData.name, value: formData.color });
        setFormData(INITIAL_STATE);
        navigate("/colors");
    };

    return (
        <form onSubmit={handleSubmit} className="new-color-form">
            <h2>Add Color</h2>
            <div>
                <label htmlFor="name">Color Name :</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Color Name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="color">Color Value :</label>
                <input
                    id="color"
                    name="color"
                    type="color"
                    value={formData.color}
                    onChange={handleChange}
                />
            </div>

            <button type="submit">Add Color</button>
        </form>
    );
}

export default NewColorForm;