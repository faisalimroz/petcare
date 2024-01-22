import React, { useState } from 'react';
import './Boarding.css'
import { useNavigate } from 'react-router-dom';
const Boarding = () => {
    const [date, setDate] = useState('');
    const [members, setMembers] = useState(1);
    const [pricePerMember, setPricePerMember] = useState(0); // Initialize with 0

    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    const handleAddMember = () => {
        setMembers(members + 1);
    };


    const handleRemoveMember = () => {
        if (members > 1) {
            setMembers(members - 1);
        }
    };

    // Get the navigate function
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();

        //Calculate the total price based on the Number of Pets and price per member
        const totalPrice = members * 1000;



        // Redirect to the Payment component with the totalPrice as a URL parameter
        navigate(`/payment?totalPrice=${totalPrice}`);
        // You can handle form submission here
        console.log('Date:', date);
        console.log('Members:', members);
        console.log('Price per Member:', pricePerMember);
        console.log('Total Price:', totalPrice);  
        
    };
    return (
        <div>
            <div>
                <div id='' className="blogs  mx-auto ">

                    <div className="blog-div">
                        <figure><img className='blog-img' src="https://i.ibb.co/qr9VTSm/daycare.jpg" alt="Shoes" /></figure>
                        <h2 className="blog-title font-bold">Boarding</h2>
                        <p className='blog-p'>Dog boarding means a place your dog stays overnight. Somethings also referred to as dog hotel, dog kennel or dog resort. Usually people choose to board their dogs when they travel. A facility describing itself as a boarding facility can be a traditional kennel/run style place or a more modern free-roaming hotel.</p>



                    </div>
                    <div className='form-div'>
                    <form onSubmit={handleSubmit} className="vertical-form">
                        <div className="form-group mt-5 ">
                            <label>Date:</label>
                            <input type="date" value={date} onChange={handleDateChange} />
                        </div>
                        <div className="form-group">
                            <label>Number of Pets:</label>
                            <button type="button " className='bg-green-200 p-2  ' onClick={handleRemoveMember}>-</button>
                            {members}
                            <button type="button" onClick={handleAddMember}>+</button>
                        </div>
                        <div className="form-group">
                            <p className='text-1xl'>Price per Pets: ${members * 1000}</p>

                        </div>
                        <div className="form-group">
                            <button className='bg-green-200 p-2' type="submit">Pay</button>
                        </div>
                    </form>
                </div>


                </div>

            </div>
        </div>
    );
};

export default Boarding;