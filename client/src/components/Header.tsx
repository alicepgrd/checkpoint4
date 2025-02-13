import { NavLink } from "react-router-dom";
import "../components/Header.css";

function Header() {
  return (
    <main className="main-header">
      <NavLink to="">
        <h1>Home </h1>
      </NavLink>
      <NavLink to="about">
        <h1>About </h1>
      </NavLink>

      <h1>Contact</h1>
    </main>
  );
}

export default Header;
