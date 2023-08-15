import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import './Banner.css'
const Banner = () => {
    return (
        <div className=''>
        <div className="hero min-h-[75vh] banners  relative" id='banner'>
            
                
                <div  className='absolute  lg:mr-[605px] lg:mt-[260px]'>
                    <h1 className="text-6xl font-mono text-black">Your  <span style={{ color: '	#FF6B55' }}>Pet </span>is a Part</h1>
                    <h1 className="py-6 text-6xl text-black font-mono">Of Our Family</h1>

                   
                </div>
            
        </div>
    </div>
       
    );
};

export default Banner;