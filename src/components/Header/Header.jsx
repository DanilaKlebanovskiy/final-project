import React, { useState } from "react";
import logoPic from "../../image/logo.png";
import Menu from "./Menu/Menu";
import burgerIcon from "../../image/icon.png";
import "./Header.css";


const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <>
      <img className="header_image" src={logoPic} alt="Pokemon Logo" />
      <div className="menu_container">
        <div
          className="burger_btn"
          onClick={() => setMenuActive(!menuActive)}
          onKeyDown={() => setMenuActive(!menuActive)}
          role="button"
          tabIndex={0}
        >
          <img src={burgerIcon} className="icon_image" alt="Icon Burger" />
        </div>
        <Menu active={menuActive} setActive={setMenuActive} test={false}/>
      </div>
    </>
  );
};

export default Header;
