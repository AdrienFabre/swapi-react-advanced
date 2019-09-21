import React, { useState } from "react";
import ItemsList from "./Components/ItemsList";
import logo from "./images/logo.png";
import "./App.css";

const App = props => {
  const resourceTypes = [
    "Planets",
    "Starships",
    "Vehicles",
    "People",
    "Films",
    "Species"
  ];

  const [seletedType, setSelectedType] = useState("planets");

  const onTypeSelect = e => {
    let newTypeSelected = e.target.value.toLowerCase();
    setSelectedType(newTypeSelected);
  };

  let content = (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p> Explore the Universe </p>
      <select onChange={onTypeSelect} className="Selector">
        {resourceTypes.map(resourceType => {
          return (
            <option
              value={resourceType}
              key={resourceTypes.indexOf(resourceType)}
            >
              {resourceType}
            </option>
          );
        })}
      </select>
      <ItemsList type={seletedType} onTypeSelect={onTypeSelect} />
    </div>
  );
  return content;
};

export default App;
