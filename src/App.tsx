import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
// import Committe from './pages/Committe';
// import Speakers from './pages/Speakers';
// import Registration from './pages/Registration';
// import Contact from './pages/Contact';
import './App.css';
import About from './pages/About';
import OrganizingCommittee from './pages/OrganizingCommittee';
import Layout from './layouts/Layout';
import AdvisoryCommittee from './pages/AdvisoryCommittee';
import Speakers from './pages/Speakers';
import UnderDevelopment from './pages/UnderDevelopment';

function App() {
  return (
    <Router>
      <Routes>
        {/* Use the Layout for all routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} /> {/* Default route */}
          <Route path="about" element={<About />} />
          <Route path="committe/organizing" element={<OrganizingCommittee />} />
          <Route path="committe/advisory" element={<AdvisoryCommittee />} />
          <Route path="speakers" element={<Speakers />} />
          <Route path="registration" element={<UnderDevelopment/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
