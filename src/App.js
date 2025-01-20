import logo from './images/wti_logo_circular.png';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import Navbar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faXTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';


function App() {

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };
  return (<div>
    
    <Navbar />
    <div className='main'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
    <footer>
      <div className='footer-div'>
        <img src={logo} className="footer-logo" alt="logo" />
      </div>
      <div className="footer-div">
        <h4>Woodgreen Training <br/> Institute</h4>
        <p className='footer-motto'>Skills For Life</p>
      </div>
      <div className="footer-div">
        <h4>Contacts</h4>
        <p>Tel: +254 775 160 079</p>
        <p>Tel: +254 717 592 373</p>
        <p>Email: info@woodgreentraining.ac.ke</p>
        <p>P.O. Box: 7635-00300 NBI</p>
      </div>
      <div className='footer-div socials'>
        <h4>Social</h4>
        <div className='icons'>
          <FontAwesomeIcon icon={faInstagram} size="2x" color="grey" onClick={() => openInNewTab('https://www.instagram.com/woodgreentraining/')}/>
          <FontAwesomeIcon icon={faXTwitter} size="2x" color="grey" onClick={() => openInNewTab('https://x.com/Woodgreenti')}/>
          <FontAwesomeIcon icon={faFacebook} size="2x" color="grey" onClick={() => openInNewTab('https://www.facebook.com/profile.php?id=61571841577322')}/>
        </div>
        
      </div>

    </footer>
  </div>
  );
}

export default App;
