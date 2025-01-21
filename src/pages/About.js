import '../App.css';
import '../styles/About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function About() {
    return (
        <div className="App">

            <main className='about-main'>
                <h2>About Us</h2>

                <p>Welcome to Woodgreen Training Institute, a dynamic and innovative college located in the heart of Ndenderu. As a new institution, we are passionate about offering high-quality, accessible vocational education that empowers individuals to build successful careers and contribute to the growth of our communities.

                At Woodgreen Training Institute, we focus on equipping our students with the practical skills and knowledge needed in today's fast-evolving job market. We provide a range of Diploma and Certificate programs, from ICT to Food Production, Music, Automotive Engineering, and more. Our hands-on approach ensures that our students are ready to take on the challenges of their chosen industries.
                </p>

                <div className='about-section-one'>
                <div className='mission-div'>
                <h3>Our Mission</h3>
                <p>
                Our mission is to deliver top-tier vocational and technical training that prepares students for professional success. We aim to empower individuals with the skills and confidence they need to thrive in their careers and contribute to the socio-economic development of Kenya.
                </p>
                </div>
                <div className='vision-div'>
                <h3>Our Vision</h3>
                <p>
                To be the premier choice for vocational education, recognized for our commitment to quality, innovation, and the success of our graduates.
                </p>
                </div>
                </div>

                <div className='about-section-two'>
                <div className='values-div'>

                <h3>Our Values</h3>
                <p>
                Excellence: We are committed to providing the highest standards of education, ensuring our students receive the best training available.
                Integrity: We believe in transparency, honesty, and ethical practices in all our interactions.
                Innovation: We embrace creative and effective teaching methods to stay ahead in a fast-paced world.
                Community: We are dedicated to supporting our students, alumni, and the local community by providing relevant skills for sustainable development.
                Our Approach
                As a new college, we are dedicated to offering a modern, inclusive, and forward-thinking approach to education. Our courses are designed to provide students with not just theoretical knowledge but real-world experience, giving them the practical tools needed for their careers.
                </p>
                </div>

                <div className='amenities-div'>
                <h3>Why Choose Us?</h3>
                <ul>
                    <li><FontAwesomeIcon className='checkmark' icon={faCheck} size="2x" color="red" /><p>Conducive Environment</p></li>
                    <li><FontAwesomeIcon className='checkmark' icon={faCheck} size="2x" color="red" /><p>Extracurrricular Activities</p></li>
                    <li><FontAwesomeIcon className='checkmark' icon={faCheck} size="2x" color="red" /><p>Expert Tutors</p></li>
                    <li><FontAwesomeIcon className='checkmark' icon={faCheck} size="2x" color="red" /><p>Free WiFi & Amenities</p></li>
                    <li><FontAwesomeIcon className='checkmark' icon={faCheck} size="2x" color="red" /><p>Attachment for Students</p></li>
                </ul>
                </div>
                </div>
            </main>

        </div>
    );
}

export default About;
