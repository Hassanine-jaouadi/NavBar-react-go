import React from "react";

import "./App.css";
import NavBar from "./Components/NavBar";

let Items = [
  {
    id: "firts-item",
    to: "#",
    text: "Home"
  },

  {
    id: "second-item",
    to: "#",
    text: "Services",
    dropDownMenu: [
      {
        to: "#",
        text: "For entrepreneurs",
        id: "first-sub-item"
      },
      { to: "#", text: "For students", id: "second-sub-item" },
      { to: "#", text: "For hobbyists" }
    ]
  },
  { to: "#", text: "Contact", id: "third-item" }
];

function App() {
  return (
    <div className="App">
      <NavBar Items={Items} />
    </div>
  );
}

export default App;
