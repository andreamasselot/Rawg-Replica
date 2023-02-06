import "../styles/Header.css";
import logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <div className="container">
      <header>
        <div className="logo-title">
          <img src={logo} alt="logo gamepad" className="logo" />
          <p>Gamepad</p>
        </div>
      </header>
    </div>
  );
};
export default Header;
