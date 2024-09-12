import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import Committe from './pages/Committe';
// import Speakers from './pages/Speakers';
// import Registration from './pages/Registration';
import Contact from "./pages/Contact";
import "./App.css";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        {/* <Route path="/committe" element={<Committe />} />
        <Route path="/speaker" element={<Speakers />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
