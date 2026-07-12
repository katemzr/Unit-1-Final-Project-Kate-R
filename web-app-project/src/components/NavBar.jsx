import { BrowserRouter, Routes, Route, NavLink } from "react-router";

function Navbar() {
  return (
    <nav>
      <NavLink to="/" style={({ isActive }) => ({
        color: isActive ? "red" : "black",
        fontWeight: isActive ? "bold" : "normal",
        textDecoration: "none",
        marginRight: "15px",
        })}>Home</NavLink>


      <NavLink
        to="/about"
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
          fontWeight: isActive ? "bold" : "normal",
          textDecoration: "none",
          marginRight: "15px",
        })}
        >About
      </NavLink>

      <NavLink
        to="/mypuzzles"
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
          fontWeight: isActive ? "bold" : "normal",
          textDecoration: "none",
          marginRight: "15px",
        })}
        >My Puzzles
      </NavLink> 
    </nav>
  );
}

export default Navbar;