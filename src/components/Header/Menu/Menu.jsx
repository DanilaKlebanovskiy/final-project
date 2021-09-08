/* eslint-disable react/require-default-props */
import React from "react";
import PropTypes from "prop-types";
import "./Menu.css";
import menueBackground from "../../../image/backgroundForMenu.png";

const Menu = ({ active, setActive }) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      className={active ? "menu active" : "menu"}
      onClick={() => {
        setActive(false);
      }}
      role="button"
      tabIndex={-1}
    >
      <div className="bakground_image_container">
        <img src={menueBackground} alt="" />
      </div>
      <div className="menu_content">
        <ul>
          <li>
            <a href="/main">POKEMON LIST</a>
          </li>
          <li>
            <a href="/caught">POKEMON BACKPACK</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

Menu.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func,
};

export default Menu;
