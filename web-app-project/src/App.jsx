import { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import Header from "./components/Header";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import MyPuzzlesPage from "./components/pages/MyPuzzlesPage";
import Button from "./components/Button";
import Footer from "./components/Footer";




function Navbar() {
return (
<nav>
<NavLink
to="/"
style={({ isActive }) => ({
color: isActive ? "red" : "black",
fontWeight: isActive ? "bold" : "normal",
textDecoration: "none",
marginRight: "15px",
})}
>
Home
</NavLink>
<NavLink
to="/about"
style={({ isActive }) => ({
color: isActive ? "red" : "black",
fontWeight: isActive ? "bold" : "normal",
textDecoration: "none",
marginRight: "15px",
})}
>
About
</NavLink>
<NavLink
  to="/mypuzzles"
  style={({ isActive }) => ({
color: isActive ? "red" : "black",
fontWeight: isActive ? "bold" : "normal",
textDecoration: "none",
marginRight: "15px",
})}
>
My Puzzles
</NavLink>
</nav>
);
}

function App() {
    

  return (
    
    <div id='body-container'>
      
      <Header />
      <BrowserRouter>
       <Navbar />
        <Routes>

          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/mypuzzles" element={<MyPuzzlesPage />} />          
        </Routes>
        
      </BrowserRouter>
      <Button label="I'm a reusable button!"/>
      <Footer />
    </div>
    
  );
}

export default App;
