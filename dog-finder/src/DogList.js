import React from "react";
import { Link } from "react-router-dom";
import './DogList.css';

const DogList = ({ dogs }) => {
    return (
        <div>
            <h1>Meet Our Dogs</h1>
            <div className="dog-list">

                {dogs.map(dog => (
                    <div className="dog-item" key={dog.name}>
                        <Link to={`/dogs/${dog.name.toLowerCase()}`}>
                            <img src={dog.src} alt={dog.name} className="dog-image" />
                            <h2>{dog.name}</h2>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DogList;