import React from 'react';
import { Link } from 'react-router-dom';
// import "./common/styles/commonClasses.css";

const Footer = () => {
  return (
    <div className="max-width footer-wrapper screen dark">
      <div className="flex footer width">
        <div className="footer-text"><a href="https://shubham2903.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>Shubham.</a></div>
        <div className="footer-icons">
          <Link to="https://www.linkedin.com/in/shubham-bhardwaj-designer/" target="_blank">
            <img src="assets/linkedin.svg" alt="LinkedIn" />
          </Link>
          <Link to="https://join.skype.com/invite/ypX10Y4KidFH" target="_blank">
            <img src="assets/skype.svg" alt="Skype"/>
          </Link>
          <Link to="https://www.instagram.com/shubhambhardwaj257" target="_blank">
            <img src="assets/instagram.svg" alt="Instagram"/>
          </Link>
        </div>
      </div>
      <div className="footer-details width">
        <div>Mob.No.: 9172405029</div>
        <div>Email ID: bhardwajsb03@gmail.com</div>
      </div>
    </div>
  )
}

export default Footer