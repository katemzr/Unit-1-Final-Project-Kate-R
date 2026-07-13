import { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink, Navigate, useNavigate } from "react-router";
import Header from "./components/Header";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import MyPuzzlesPage from "./components/pages/MyPuzzlesPage";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import NavBar from "./components/NavBar";
import PuzzleCard from "./components/PuzzleCard";
import "./index.css"


function App() {
 const [ user, setUser ] = useState(null);
 const handleLogin = (credentials) => {
    if (credentials.username === "admin" && credentials.password === "1234") {
      setUser({ name: "Admin", role: "administrator" });
    } else { 
      if (credentials.username === "puzzler" && credentials.password === "1234") {
      setUser({ name: "Puzzler", role: "user" });
    } else {
      alert ("Invalid Credentials");
    }

    }
 };

 const handleLogout = () => {

  setUser(null);
 };
    

  return (
    <BrowserRouter>
    <div id='body-container'>
      <Header />

      {user ? (

        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/mypuzzles" element={<MyPuzzlesPage />} />          
          </Routes>
          <div>          
            <button className="buttons" onClick={handleLogout}>Log Out</button>
          </div>
        </div>

        ) : (

        <div>
          <Routes>
             <Route path="/" element={<LoginForm onLogin={handleLogin} />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />          
          </Routes>
        </div>

        )
      }
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;


/*
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

          
*/


