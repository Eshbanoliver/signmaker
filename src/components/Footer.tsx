import { Link } from 'react-router-dom';
import { MapPin, Phone, ArrowUp } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer section">
      <div className="container grid grid-3">
        <div className="footer-col">
          <Link to="/" className="footer-logo-wrapper mb-1">
            <img src="/logo.png" alt="SIGN MAKER led board Logo" className="footer-logo-img" />
          </Link>
          <p>Your trusted partner for innovative, high-quality signage and branding solutions in Rajasthan.</p>
        </div>
        
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h4>Contact Details</h4>
          <ul className="contact-info">
            <li>
              <Phone size={18} />
              <a href="tel:08560005555">08560005555</a>
            </li>
            <li>
              <MapPin size={18} />
              <span>Ground floor Shop No.123, Parmatma Plaza, 124, Hospital Rd, above JMB Mishthan, near chetak cinema, Chetak Circle, Madhuban, Udaipur, Rajasthan 313001</span>
            </li>
          </ul>
          <button className="back-to-top mt-2 btn btn-glass" onClick={scrollToTop}>
            <ArrowUp size={18} /> Back To Top
          </button>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>
          ©️ Copyright 2026 | <Link to="/" className="footer-copyright-link">Sign maker led board</Link> | All Rights Reserved | Powered by{' '}
          <a href="https://www.futurexdigitalmarketing.com/" target="_blank" rel="noopener noreferrer" style={{color:'#28a745'}}>Future X Digital Marketing</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
