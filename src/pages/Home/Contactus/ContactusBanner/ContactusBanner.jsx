import './ContactusBanner.css'





const ContactusBanner = () => {
    return (
        <div>
        <div className="hero min-h-[70vh] " style={{ backgroundImage: 'url(https://i.ibb.co/NYzZ7T8/image.png)' }}>
            <div className=" bg-opacity-60"></div>
            <div className="hero-content text-center ">
                <div className="max-w-md">
                    <h1 id='contact-text' className="mb-5 text-5xl font-bold">Contact Us</h1>
                    {/* <div className="text-lg breadcrumbs text-center">
                        <ul className='bread'>
                            <li><Link to='/home'>Home</Link></li>
                            <li><Link to='/contact'>Contact Us</Link></li>
                            
                        </ul>
                    </div> */}

                </div>
            </div>

        </div>
    </div>
    );
};

export default ContactusBanner;