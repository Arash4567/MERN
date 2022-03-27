import MainPage from "./Pages/MainPage";
import Index from "./Pages/Index";
import { BrowserRouter, Outlet, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<Index />} />
        <Route path="posts" element={<MainPage />} />
        <Route path="*" element={
          <h1 className="text-center text-danger">Bunday sahifa mavjud emas!</h1>
        }/>
      </Routes>
    </BrowserRouter>
  );
}
