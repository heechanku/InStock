
import Tlogo from "./../../assets/Logo/InStock-Logo_1x.png";
import { NavLink } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__left">
          <NavLink to="/">
            {" "}
            <img className="header__logo" src={Tlogo} alt="logo"></img>
          </NavLink>
        </div>
        <div className="header__right">
          <div className="header__warehouse"> <NavLink to="/" className="header__button">Warehouses</NavLink></div>

          <div className="header__inventory"> <NavLink to="/inventory" className="header__button">Inventory</NavLink></div>
        </div>
      </div>
    </header>
  );
}
export default Header;
