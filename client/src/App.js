import { Route, Routes } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from "./pages/About";
import Register from "./pages/Auth/Register";
import Contact from "./pages/Contact";
import HomePage from './pages/HomePage';
import Pagenotfound from "./pages/Pagenotfound";
import Policy from "./pages/Policy";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
