import React from "react";
import "../css/Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">HealPoint</div>
      <div className="opt">
        <ul>
          <li>Services</li>
          <li>Clinics</li>
          <li>Treatpoints</li>
          <li>
            <span>| </span>
          </li>
          <li>
            <div class="language-selector">
              <select>
                <option value="en">EN</option>
                <option value="fr">Hindi</option>
                <option value="es">Esp</option>
              </select>
            </div>
          </li>
          <li></li>
        </ul>
      </div>
      <div className="bt">
        <button className="navBtn">Need Help ?</button>
      </div>
    </div>
  );
};

export default Navbar;
