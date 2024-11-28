import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Color from './Color';
import Colors from './Colors';
import NewColorForm from './NewColorForm';
import './App.css';

function App() {
  const [colors, setColors] = useState([
    { name: "red", value: "#ff0000" },
    { name: "blue", value: "#0000ff" },
    { name: "green", value: "#00ff00" }
  ]);

  const addColor = (newColor) => {
    if (colors.some(color => color.name === newColor.name)) {
      alert("Color already exists!");
      return;
    }
    setColors([newColor, ...colors]);
  }

  return (
    <div className="App">
      <BrowserRouter>
        {/* <Nav colors={colors} /> */}
        <Routes>
          <Route path="/colors" element={<Colors colors={colors} />} />
          <Route path="/colors/:color" element={<Color colors={colors} />} />
          <Route path="/colors/new" element={<NewColorForm addColor={addColor} />} />
          <Route path="*" element={<Navigate to="/colors" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


