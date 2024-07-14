import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import '../../components/Navbar/navbar.css';
import { Link } from 'react-router-dom';


const AllProjects = () => {

    return (
    <div className="design-section-wrapper screen max-width" style={{ padding: 0 }}>
      <Navbar />
      

      <div className='details case_study flex flex-col'>
        <img src="assets/carzzy_details1.png" alt='Carzzy_Details' />
      </div>

      <div className='details case_study_mobile flex flex-col' >
        <img src="assets/carzzy_mob1.png" alt='Carzzy_Details' />
      </div>

      <div className='design-images flex flex-col'>
        <img src="assets/carzzy1.png" alt='Design_Details' />
      </div>


      <div class="project-navigation">
        <a href="link1" target="_blank" rel="noopener noreferrer" class="button1" style={{ visibility: 'hidden' }}>Previous Project</a>
        <Link to='/vovance' rel="noopener noreferrer" class="button1">Next Project</Link>
      </div>

      <Footer />
    </div>
  )
}

export default AllProjects

