import '../App.css';
import '../styles/Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressBook, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faXTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Map from '../components/Map';


function Contact() {

    const openInNewTab = (url) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    const handleEmailClick = () => {
        window.location.href = 'mailto:info@woodgreentraining.ac.ke?subject=Hello%20from%20Woodgreen%20Website&body=Just%20reaching%20out!';
    };

    return (
        <div className="App">

            <main className='contact-main'>
                <h2>Contact Us</h2>
                {/* <section> */}
                <div className='contact-div'>
                    <div className='contacts item1' onClick={() => openInNewTab('tel:+254775160079')}>
                        <FontAwesomeIcon icon={faPhone} size="2x" color="red" />
                        <div className='contact-text'>
                            <h4>Phone Number 1</h4>
                            <p>Tel: +254 775 160 079</p>
                        </div>
                    </div>
                    <div className='contacts item2' onClick={() => openInNewTab('tel:+254717592373')}>
                        <FontAwesomeIcon icon={faPhone} size="2x" color="red" />
                        <div className='contact-text'>
                            <h4>Phone Number 2</h4>
                            <p>Tel: +254 717 592 373</p>
                        </div>
                    </div>
                    <div className='contacts item3' onClick={handleEmailClick}>
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                        <div className='contact-text'>
                            <h4>Email</h4>
                            <p>info@woodgreentraining.ac.ke</p>
                        </div>

                    </div>
                    <div className='contacts item4'>
                        <FontAwesomeIcon icon={faAddressBook} size="2x" color="red" />
                        <div className='contact-text'>
                            <h4>P.O. Box Address</h4>
                            <p>7635-00300 NBI</p>
                        </div>

                    </div>
                    <div className='contacts item5' onClick={() => openInNewTab('https://www.instagram.com/woodgreentraining/')}>
                        <FontAwesomeIcon icon={faInstagram} size="2x" color="red" />
                        <div className='contact-text'>
                            <h4>Instagram</h4>
                        </div>
                    </div>
                    <div className='contacts item6' onClick={() => openInNewTab('https://www.facebook.com/profile.php?id=61571841577322')}>
                        <FontAwesomeIcon icon={faFacebook} size="2x" color="red" />
                        <div className='contact-text'>
                            <h4>Facebook</h4>
                        </div>
                    </div>
                    <div className='contacts item7' onClick={() => openInNewTab('https://wa.me/254717592373')}>
                        <FontAwesomeIcon icon={faWhatsapp} size="2x" color="red" />
                        <div className='contact-text'>
                            <h4>Whatsapp</h4>
                        </div>
                    </div>
                    <div className='contacts item8' onClick={() => openInNewTab('https://x.com/Woodgreenti')}>
                        <FontAwesomeIcon icon={faXTwitter} size="2x" color="red" />
                        <div className='contact-text'>
                            <h4>X (Twitter)</h4>
                        </div>
                    </div>
                </div>
                {/* </section> */}

                <h2>Where to find us</h2>
                <div className='map-section'>
                    <Map />
                </div>
            </main>


        </div>
    );
}

export default Contact;
