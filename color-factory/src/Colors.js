import React from "react";
import { Link } from "react-router-dom";
import './Colors.css';

const Colors = ({ colors }) => {
    return (
        <div className="colors-container">
            <header >
                <h1>Welcome to the color factory.</h1>
                <Link to="/colors/new" className="colors-container-link">
                    Add a color
                </Link>
            </header>
            <main>
                <h2>Please Select a Color</h2>
                <div className="color-list">

                    {colors.map(color => (
                        <div key={color.name}>
                            <Link to={`/colors/${color.name}`}>
                                <h2>{color.name}</h2>
                            </Link>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Colors;