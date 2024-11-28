import React from "react";
import { useParams, Navigate } from "react-router-dom";
import './DogDetails.css';

const DogDetails = ({ dogs }) => {
    const { name } = useParams();
    const dog = dogs.find(d => d.name.toLowerCase() === name.toLowerCase());

    if (!dog) return <Navigate to="/dogs" />;

    return (
        <div className="dog-details">
            <h1>{dog.name}</h1>
            <img src={dog.src} alt={dog.name} className="dog-image" />
            <h2>Age: {dog.age}</h2>
            <ul>
                {dog.facts.map((fact, i) => (
                    <li key={i}>{fact}</li>
                ))}
            </ul>
        </div>
    );
};

export default DogDetails;