import React, { useState, useEffect } from 'react';
import './Slideshow.css';

const Slideshow = ({ images, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Automatically move to the next slide every `interval` milliseconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        // Clear the interval on component unmount
        return () => clearInterval(timer);
    }, [images, interval]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className="slideshow">
            <div className="slideshow__image-container">
                <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
            </div>
            <button className="slideshow__button prev" onClick={goToPrevious}>
                &#10094;
            </button>
            <button className="slideshow__button next" onClick={goToNext}>
                &#10095;
            </button>
            <div className="slideshow__dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Slideshow;

// import React, { useState, useEffect } from 'react';
// import './Slideshow.css';

// const Slideshow = ({ images, interval = 3000 }) => {
//     const [currentIndex, setCurrentIndex] = useState(0);

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//         }, interval);

//         return () => clearInterval(timer);
//     }, [images, interval]);

//     const goToPrevious = () => {
//         setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//     };

//     const goToNext = () => {
//         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     };

//     return (
//         <div className="slideshow">
//             <div
//                 className="slideshow__slider"
//                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}
//             >
//                 {images.map((image, index) => (
//                     <img key={index} src={image} alt={`Slide ${index}`} className="slide" />
//                 ))}
//             </div>
//             <button className="slideshow__button prev" onClick={goToPrevious}>&#10094;</button>
//             <button className="slideshow__button next" onClick={goToNext}>&#10095;</button>
//             <div className="slideshow__dots">
//                 {images.map((_, index) => (
//                     <span
//                         key={index}
//                         className={`dot ${index === currentIndex ? 'active' : ''}`}
//                         onClick={() => setCurrentIndex(index)}
//                     ></span>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Slideshow;
