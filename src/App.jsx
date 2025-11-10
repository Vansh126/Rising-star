import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Navbar from './components/Navbar';
import Page from './components/Page';
import Coaches from './components/Coaches';
import Contactus from './components/Contactus';
import Images from './components/Images';
import Joinus from './components/Joinus';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/about" element={<About />} />
        <Route path="/coaches" element={<Coaches />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/images" element={<Images />} />
        <Route path="/joinus" element={<Joinus />} />


      </Routes>
    </Router>
  );
};

export default App;
