// Checkoutform.js
import React, { useContext, useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import './Checkoutform.css';
import useAxiosSecure from '../../../../Hook/useAxiosSecure';
import { AuthContext } from '../../../../providers/AuthProvider';

const Checkoutform = ({ totalPrice, category, location }) => {
  const { user } = useContext(AuthContext);
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const [processing, setProcessing] = useState(false);
  const elements = useElements();
  const [cardError, setCardError] = useState('');
  const [axiosSecure] = useAxiosSecure();
  const [transactionId, setTransactionId] = useState('');
  const token = localStorage.getItem('access-token');

  useEffect(() => {
    axiosSecure.post('/create-payment-intent', { totalPrice, name: user.email }, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then(res => {
        setClientSecret(res.data.clientSecret);
      })
  }, [totalPrice, user.email, token]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      setCardError(error.message)
    } else {
      setCardError('');
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.email || 'annonymous',
          },
        },
        metadata: {
          category: category,
          location: location,
        },
      },
    );

    setProcessing(false);

    if (paymentIntent.status === 'succeeded') {
      setTransactionId(paymentMethod.id);
      const transactionId = paymentIntent.id;
      const payment = {
        transactionId: transactionId,
        date: new Date(),
        orderStatus: 'service pending',
        user: user.email,
        category: category,
        location: location,
      };

      axiosSecure.post('/payments', payment)
        .then(res => {
          if (res.data.insertId) {
            // Display success message or redirect as needed
          }
        });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className='w-2/3 mt-3'>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />

        <button type="submit" id='pay-btn' className="btn btn-outline btn-primary mt-4 btn-sm" disabled={!stripe || !clientSecret || processing}>
          Pay {totalPrice}
        </button>
      </form>
      {cardError && <p className='text-red-400'>{cardError}</p>}
      {transactionId && (
  <>
    <p className='text-green-400'>
      Transaction complete with transactionId: {transactionId}
    </p>
    <p className='text-green-400'>
      Thank you! We look forward to welcoming you and your pet to our place.
    </p>
  </>
)}

    </>
  );
};

export default Checkoutform;
