import "../styles/Header.css";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <header>
        <div className="logo-title">
          <Link to={"/"}>
            <img src={logo} alt="logo gamepad" className="logo" />
            <p>Gamepad</p>
          </Link>
        </div>
      </header>
    </div>
  );
};
export default Header;
