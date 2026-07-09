import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/Header";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import MyPuzzlesPage from "./components/pages/MyPuzzlesPage";
import Button from "./components/Button";
import Footer from "./components/Footer";


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
      <Button />
      <Footer />
    </div>
    
  );
}

export default App;
