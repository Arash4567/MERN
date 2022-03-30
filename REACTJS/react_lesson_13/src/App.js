import { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import RouterApp from "./components/RouterApp";
import { AuthContext } from "./context";

export default function App() {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
  }, []);
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      <BrowserRouter>
        <Navbar />
        <RouterApp />
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
