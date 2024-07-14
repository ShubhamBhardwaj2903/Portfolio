import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../components/Navbar/navbar.css';
import { Link } from 'react-router-dom';

const AllProjects = () => {

  return (
    <div className="design-section-wrapper dark screen max-width" style={{ padding: 0 }}>
      <Navbar />

      {/* ek div ke uska style={{ padding: 100 }} aur inside me text with project images, a figma link at at the top    */}

      <div className="design_section" style={{ padding: '0px 100px 50px 100px' }}>
        <div className="heading flex-col" style={{ margin: '24px 0' }}>
          <div className="text1" style={{ fontSize: 64 }}>Furniture Store Design</div>
          <div className="text2" style={{ fontSize: 14, opacity: 0.5 }}>(Scroll on the design to see more)</div>
        </div>
        <div className="design_box flex flex-col" >
          <div className="design_img" style={{border: 'solid 2px #fff'}}>
            <img src="assets/CasaLuxe.png" alt="Furniture_Store_Design" />
          </div>
        </div>
      </div>

      <div className="design_section" style={{ padding: '0px 100px 50px 100px'}}>
        <div className="heading flex-col" style={{ margin: '24px 0 ' }}>
          <div className="text1" style={{ fontSize: 64 }}>Digital Agency Designs</div>
          <div className="text2" style={{ fontSize: 14, opacity: 0.5 }}>(Scroll on the designs to see more)</div>
        </div>
        <div className="design_box flex flex-col" style={{ paddingBottom: 50 }}>
          <div className="design_img" style={{border: 'solid 2px #fff'}}>
            <img src="assets/DigitalAgency.png" alt="Digital_Agency_Design" />
          </div>
        </div>
        <div className="design_box flex flex-col" >
          <div className="design_img" style={{border: 'solid 2px #fff'}}>
            <img src="assets/DigitalAgency2.png" alt="Digital_Agency_Design"  />
          </div>
        </div>

      </div>

      <div className="design_section" style={{ padding: '0px 100px 50px 100px'}}>
        <div className="heading flex-col" style={{ margin: '24px 0 ' }}>
          <div className="text1" style={{ fontSize: 64 }}>Designs</div>
          <div className="text2" style={{ fontSize: 14, opacity: 0.5 }}>(Scroll on the designs to see more)</div>
        </div>
        <div className="design_box flex flex-col" style={{ paddingBottom: 50 }}>
          <div className="design_img" style={{border: 'solid 2px #fff'}}>
            <img src="assets/Zenith.png" alt="Bento_Box_Design" />
          </div>
        </div>
        <div className="design_box flex flex-col" >
          <div className="design_img" style={{border: 'solid 2px #fff'}}>
            <img src="assets/Meditation.png" alt="Meditation_Design"  />
          </div>
        </div>
      </div>

      <div class="project-navigation">
        {/* <a href="link1" target="_blank" rel="noopener noreferrer" class="button1" >Previous Project</a> */}
        <Link to='/ambli' rel="noopener noreferrer" class="button1" >Previos Project</Link>
        <Link to='/vovance' rel="noopener noreferrer" class="button1" style={{ visibility: 'hidden' }}>Next Project</Link>
      </div>

      <Footer />
    </div>
  )
}

export default AllProjects

