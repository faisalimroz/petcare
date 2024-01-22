import Addreview from '../../../Review/Addreview/Addreview';
import './Contactus.css'
import ContactusBanner from './ContactusBanner/ContactusBanner';
import ContactusForm from './ContactusForm/ContactusForm';

const Contactus = () => {
    return (
        <div>

            <div className='d-block'>
               <ContactusBanner></ContactusBanner>
            </div>
            <div className="hero helpline rounded-full relative grid grid-row-1 md:grid-rows-6 ">
                <div className='helpline-img'>
                    <img src="https://i.ibb.co/qyjbT4L/helpline.webp" className="max-w-sm rounded-lg shadow-2xl" alt='help' />
                </div>
                <div className='info' id='last'>
               
                  <div id='mail' className='mail'>
                    <h1 className='font-black'>Location</h1>
                    <p>petcare@gmail.com</p>
                    <p>+8801608827084</p>

                  </div>
                  <div id='maill' className='mail'>
                    <h1  className='font-black'>Let's Talk</h1>
                    <p>168/170, Ave 01, Streets Suite 666 Mirpur DOHS, Bangladesh</p>
                

                  </div>
                  <div id='maill' className='mail'>
                    <h1  className='font-black'>Visit Us</h1>
                    <p><a target='_blank' href='https://www.facebook.com/petcare'>Facebook: https://www.facebook.com/egenslab</a></p>
                    <p><a target='_blank' href=' https://www.twitter.com/petcare'>Twitter: https://www.twitter.com/egenslab</a></p>
           

                  </div>
                </div>

            </div>
          <div className='mb-5'>
               <div className='ml-[650px] mt-5'>
               <h1 className='mx-auto'>Add your Review</h1>
               </div>
              <Addreview></Addreview>
          </div>
        </div>
    );
};

export default Contactus;