import { Link } from "react-router-dom";

const handleV=()=>{
    
}
const Servicelist = () => {
    return (
        <div className="flex mt-5 justify-evenly flex-wrap ">
            <div className="card w-80 bg-orange-200 shadow-xl p-5 ">
                <figure><img src="https://i.ibb.co/1mmH7zD/pexels-tima-miroshnichenko-6235231.jpg" alt="Veterinary" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Veterinary</h2>
                    <p>Adult dogs should have a complete veterinary examination at least once a year.</p>
                    <div className="card-actions justify-end">
                    <button onClick={handleV} className="btn btn-primary"><Link to='/veterinary'>More Details</Link></button>

                    </div>
                </div>
            </div>
           
            <div className="card w-80 bg-orange-200 shadow-xl p-5">
                <figure><img src="https://i.ibb.co/T2fhxCP/petcare.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Daycare</h2>
                    <p>Doggy daycare provides your canine family members with physical exercise.</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to='/daycare'>More Details</Link></button>

                    </div>
                </div>
            </div>
            <div className="card w-80 bg-orange-200 shadow-xl p-5">
                <figure><img src="https://i.ibb.co/qr9VTSm/daycare.jpg" alt="boarding" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Boarding</h2>
                    <p>Dog boarding means a place your dog stays overnight.</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to='/boarding'>More Details</Link></button>

                    </div>
                </div>
            </div>
            <div className="card w-80 bg-orange-200 shadow-xl p-5">
                <figure><img src="https://i.ibb.co/ZdpH7q9/pexels-pavel-danilyuk-7055937.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Grooming</h2>
                    <p>Adult or Child dogs should have a complete grooming at least once a year.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link to='/grooming'>More Details</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Servicelist;