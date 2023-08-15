import Banner from '../Banner/Banner';
import Detail from '../Detail/Detail';
import OurFeatures from '../OurFeatures/OurFeatures';
import Servicelist from '../Servicelist/Servicelist';
import './Home.css'
const Home = () => {
    return (


        <div>

            <Banner></Banner>
            <Servicelist></Servicelist>
            <Detail></Detail>
            <OurFeatures></OurFeatures>
        </div>
    );
};

export default Home;