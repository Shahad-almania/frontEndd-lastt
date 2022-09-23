import { Link } from "react-router-dom";
import logo from "../../assets/lastlogo.ico";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="nav">
      <div>
        <img src={logo} alt="" className="img" />
        <h3>QUICK CHECK</h3>
      </div>
      <ul className="list">
        <li>
          <Link to="/EmailCheck">Email</Link>
        </li>
        <li>
          <Link to="/url">URL</Link>
        </li>
        <li>
          <Link to="/phonecheck">PhoneNumber</Link>
        </li>
        <li class="color-me">
          <Link to="/Login"> Login </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
