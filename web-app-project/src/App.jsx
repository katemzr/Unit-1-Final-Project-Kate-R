import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import MyPuzzlesPage from "./components/pages/MyPuzzlesPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { useState } from "react";
import Form from "./components/Form";
import Button from "./components/Button";



function App() {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);  

  return (
    
    <div id='body-container'>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/mypuzzles" element={<MyPuzzlesPage />} />          
        </Routes>
      </BrowserRouter>

      <Login />
      <Form />
      <Button />
      <Footer />
    </div>
    
  );
}

export default App
