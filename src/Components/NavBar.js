import React from "react";

const NavBar = props => {
  return (
    <ul className="flex-container ">
      <div className="flex-container  ">
        {props.Items.map(el => (
          <li className="visible" key={el.id}>
            {console.log("dropDownMenu", el.dropDownMenu)}
            <a href={el.to}> {el.text} </a>
            {el.dropDownMenu ? (
              <ul className="hidden">
                {el.dropDownMenu.map((el, key) => (
                  <li key={key}>
                    {" "}
                    <a href={el.to}> {el.text} </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </div>
    </ul>
  );
};

export default NavBar;
