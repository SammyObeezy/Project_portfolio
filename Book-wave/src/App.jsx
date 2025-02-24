import { useState } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import MyFooter from "./components/MyFooter";

export const backendUrl = import.meta.env.VITE_BACKEND_URL 
function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <MyFooter />
    </>
  );
}

export default App;
