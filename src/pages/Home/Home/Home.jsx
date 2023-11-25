import Banner from '../Banner/Banner';
import Counterup from '../Counterup/Counterup';
import Detail from '../Detail/Detail';
import OurFeatures from '../OurFeatures/OurFeatures';
import Servicelist from '../Servicelist/Servicelist';
import UserReview from '../../../Review/UserReview/UserReview'
import './Home.css'
const Home = () => {
    return (


        <div>

            <Banner></Banner>
            <Servicelist></Servicelist>
            <Detail></Detail>
            <OurFeatures></OurFeatures>
            <Counterup></Counterup>
            <UserReview></UserReview>
        </div>
    );
};

export default Home;