import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import './Color.css';

const Color = ({ colors }) => {
    const { color } = useParams();
    const selectedColor = colors.find((c) => c.name === color);
    if (!selectedColor) return <Navigate to="/colors" />;

    return (
        <div
            className="color-container"
            style={{ backgroundColor: selectedColor.value }}
        >

            <h1>This is {selectedColor.name}</h1>
            <h2>Isn't it beautiful?</h2>
            <Link to="/colors" className="color-container-link">Go Back</Link>
        </div>
    );
};

export default Color;