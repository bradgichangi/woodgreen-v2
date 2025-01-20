import '../App.css';
import '../styles/Home.css';
import Slideshow from '../components/Slideshow';
import image1 from '../images/students.PNG';
import image2 from '../images/students_2.PNG';
import { useNavigate } from 'react-router-dom';
import courseData from '../data/course_data.json'


function Home() {

    const images = [
        image1,
        image2
    ];

    const navigate = useNavigate();

    const redirect = () => {
        navigate('/courses');
    };

    return (
        <div className="App">
            <Slideshow images={images} interval={5000} />
            <main className='home-main'>
                
                <div className='main-text'>
                    <h2>Welcome To Woodgreen Training Institute</h2>
                    <p>
                    At Woodgreen Training Institute, we are dedicated to shaping the future of our students by offering high-quality education in a diverse range of vocational and technical programs. Located in Ndenderu, we provide both Diploma and Certificate level courses that are designed to equip our students with the skills and knowledge they need to succeed in today's competitive world.
                    <br/><br/>
                    Our programs are designed to meet the demands of various industries, ensuring that our graduates are ready to make a meaningful impact. Whether you're passionate about ICT, Food Production, Music, Food Service and Sales, Automotive Engineering, Welding and Fabrication, or other dynamic fields, Woodgreen Training Institute has something for you.
                    </p>
                </div>
                <div className='main-section'>
                    <h2>Our Courses</h2>

                    <div className='c'>

                        <div className='course-block'>
                            <h2>Admission Grade Requirements</h2>
                            <h3>Diploma: C- and above</h3>
                            <h3>Certificate: D/D+ and above</h3>
                            <div className='view-course' onClick={redirect}><p>View Courses</p></div>
                        </div>
                        <div className='course-block'>
                            <ul className='courses-list'>
                                <li>Automotive Engineering</li>
                                <li>Baking Technology</li>
                                <li>Fashion Design Technology</li>
                                <li>Information Communication Technology</li>
                                <li>Food Production</li>
                                <li>Food and Beverage Sales and Service</li>
                                <li>Carpentry and Joinery</li>
                                <li>Hospitality Department</li>
                                <li>Music Technology</li>
                                <li>Welding and Fabrication</li>
                                <li>Electrical Engineering (Power Option)</li>
                                <li>Information Communication Technology</li>
                                <li>Music Performance</li>
                            </ul>
                        </div>
                    </div>

                    {/* <h2>Certified</h2>
                    <div className='course-block'>
                    {courseData['courses']['certified'].map((item) => (<div className='course-box' ><img src={image1}></img>
                        <p>{item['title']}</p></div>))}
                    </div>

                    <h2>Diploma</h2>
                    <div className='course-block'>
                    {courseData['courses']['diploma'].map((item) => (<div className='course-box' ><img src={image1}></img>
                        <p>{item['title']}</p></div>))}
                    </div> */}
                    
                
                </div>
            </main>


        </div>
    );
}

export default Home;
