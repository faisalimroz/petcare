import React, { useState } from 'react';
import './Grooming.css';
import { useNavigate } from 'react-router-dom';

const Grooming = () => {
  const [date, setDate] = useState('');
  const [members, setMembers] = useState(1);
  const [pricePerMember, setPricePerMember] = useState(0);
  const [category, setCategory] = useState('Dog'); // Added category state
  const [location, setLocation] = useState(''); // Added location state

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

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  // Get the navigate function
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Calculate the total price based on the Number of Pets and price per member
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
        <div id='' className="blogs mx-auto ">
          <div className="blog-div">
            <figure><img className='blog-img' src="https://i.ibb.co/ZdpH7q9/pexels-pavel-danilyuk-7055937.jpg" alt="Shoes" /></figure>
            <h2 className="blog-title font-bold">Grooming</h2>
            <p className='blog-p'>Adult or Child dogs should have a complete grooming at least once a year. Puppies need grooming  usually every 3 to 4 weeks until they are about 4 months old. Geriatric dogs (older than 7 to 8 years old) should see their veterinarian twice a year or more frequently because illness is more common in older pets and it can be identified sooner. Your veterinarian may recommend a wellness program for your pet, including routine blood work to monitor for problems such as early kidney or liver disease.</p>
          </div>
          <div className='form-div'>
            <form onSubmit={handleSubmit} className="vertical-form">
              <div className="form-group mt-5 ">
                <label>Date:</label>
                <input type="date" value={date} onChange={handleDateChange} />
              </div>
              <div className="form-group">
                <label>Number of Pets:</label>
                <button type="button" className='bg-green-200 p-2 ' onClick={handleRemoveMember}>-</button>
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

export default Grooming;
