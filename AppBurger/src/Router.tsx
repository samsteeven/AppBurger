import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

export default function RouterApp() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<h1>About</h1>}/>
        <Route path="/contact" element={<h1>Contact</h1>}/>
        <Route path="*" element={<h1>404</h1>}/>
      </Routes>
    </>
  );
}
