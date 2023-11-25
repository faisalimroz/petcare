import { Link } from "react-router-dom";

const handleV=()=>{
    
}
const Servicelist = () => {
    return (
        <div className="flex mt-5 justify-evenly flex-wrap bg-gray-200">
            <div className="card w-80 bg-base-100 shadow-xl p-5 ">
                <figure><img src="https://i.ibb.co/1mmH7zD/pexels-tima-miroshnichenko-6235231.jpg" alt="Veterinary" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Veterinary</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <button onClick={handleV} className="btn btn-primary"><Link to='/veterinary'>More Details</Link></button>

                    </div>
                </div>
            </div>
           
            <div className="card w-80 bg-base-100 shadow-xl p-5">
                <figure><img src="https://i.ibb.co/T2fhxCP/petcare.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Daycare</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to='/daycare'>More Details</Link></button>

                    </div>
                </div>
            </div>
            <div className="card w-80 bg-base-100 shadow-xl p-5">
                <figure><img src="https://i.ibb.co/qr9VTSm/daycare.jpg" alt="boarding" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Boarding</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to='/boarding'>More Details</Link></button>

                    </div>
                </div>
            </div>
            <div className="card w-80 bg-base-100 shadow-xl p-5">
                <figure><img src="https://i.ibb.co/ZdpH7q9/pexels-pavel-danilyuk-7055937.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Grooming</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary"><Link to='/grooming'>More Details</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Servicelist;