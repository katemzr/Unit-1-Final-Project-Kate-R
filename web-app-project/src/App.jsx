import { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router";
import Header from "./components/Header";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import MyPuzzlesPage from "./components/pages/MyPuzzlesPage";
import Button from "./components/Button";
import Footer from "./components/Footer";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/NavBar";



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
    <div id='body-container'>
      {user ? (
        <div>
          <Header />
          <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/mypuzzles" element={<MyPuzzlesPage />} />          
          </Routes>
          
          </BrowserRouter>
          <h1>Welcome back, {user.name}! 🎉</h1>
          <p>Role: {user.role}</p>
          <button onClick={handleLogout}>Log Out</button>
          <Button label="I'm a reusable button!"/>
          <Footer />
        </div>
        ) : (
        <div>
          <Header />
          <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />          
          </Routes>
          
          </BrowserRouter>
          <LoginForm onLogin={handleLogin} />
          
          <Footer />
        </div>
        )
      }
    </div>
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


