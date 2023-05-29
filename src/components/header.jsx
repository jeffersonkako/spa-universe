import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="menu">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/universo">Universo</Link>
        </li>
        <li>
          <Link to="/exploracao">Exploração</Link>
        </li>
      </ul>
    </nav>
  );
}
