import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Nav = () => {
  return (
    <div className="row" id="nav">
      <Link to={"/"}>
        <img src={logo} />
      </Link>
    </div>
  );
};

export default Nav;
