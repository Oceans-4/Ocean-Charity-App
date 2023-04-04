import Home from "./components/homeComponents/Home";
import Header from "./components/headerComponents/Header";
import Footer from "./components/footerComponents/Footer";
import About from "./components/aboutComponents/About";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </>
    </Router>
  );
}

export default App;
