import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Banner.css';

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        // Automatically change the slide every 3 seconds (adjust as needed)
        const intervalId = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
        }, 3000);

        return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    }, [currentSlide]);

    const totalSlides = 3; // Change this based on the number of slides
    

    return (
        <div className='banner-index'>
        <div className="hero min-h-[50vh] banners relative" id='banner'>
            <div className='absolute lg:mr-[605px] lg:mt-[260px]'>
                <h1 className="text-6xl font-mono text-black">Your <span style={{ color: '#FF6B55' }}>Pet </span>is a Part</h1>
                <h1 className="py-6 text-6xl text-black font-mono">Of Our Family</h1>
            </div>

            {/* Add the Carousel component here */}
            <Carousel selectedItem={currentSlide} onChange={(index) => setCurrentSlide(index)}>
                <div>
                    <img src="https://i.ibb.co/Cwk5Vd9/image.png" alt="Slide 1" style={{ maxHeight: '600px' }} />
                </div>
                <div>
                    <img src="https://i.ibb.co/Gpxpvm2/petbanner.jpg" alt="Slide 2" style={{ maxHeight: '600px' }} />
                </div>
                <div>
                    <img src="https://i.ibb.co/KKL0BT7/image.png" alt="Slide 3" style={{ maxHeight: '600px' }} />
                </div>
            </Carousel>
        </div>
    </div>
    );
};

export default Banner;
