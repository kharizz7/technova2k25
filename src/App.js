import "./App.css";
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Events from "./Components/Event";
import Guest from "./Components/Guest";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Register from "./Components/Register";

function App() {
  return (
    <div className="bg-black">
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <About />
            <Events />
            <Guest />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>

    </div>
    
  );
}

export default App;
