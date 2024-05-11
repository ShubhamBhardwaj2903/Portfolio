import React from 'react';
// import "./common/styles/commonClasses.css";

const Footer = () => {
  return (
    <div className="max-width footer-wrapper screen dark">
      <div className="flex footer width">
        <div className="footer-text"><a href="https://shubham2903.netlify.app/" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none' }}>Shubham.</a></div>
        <div className="footer-icons">
          <a href="https://www.linkedin.com/in/shubham-bhardwaj-ui-ux-designer/" target="_blank" rel="noopener noreferrer"><img src="assets/linkedin.svg" alt="LinkedIn" /></a>
          <a href="https://join.skype.com/invite/ypX10Y4KidFH" target="_blank" rel="noopener noreferrer"><img src="assets/skype.svg" alt="Skype" /></a>
          <a href="https://www.instagram.com/shubhambhardwaj257" target="_blank" rel="noopener noreferrer"><img src="assets/instagram.svg" alt="Instagram" /></a>
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