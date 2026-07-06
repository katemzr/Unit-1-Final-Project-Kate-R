import Header from "./components/Header"
import Footer from "./components/Footer"
import Login from "./components/Login"
import { useState } from "react";

function App() {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);  

  return (
    <>
      <Header />
      <Login />
      <Footer />
    </>
  );
}

export default App
