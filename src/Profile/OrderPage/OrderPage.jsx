import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../providers/AuthProvider';

const OrderPage = () => {
  const { user } = useContext(AuthContext);
  const [userHistory, setUserHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const email = user.email;

  useEffect(() => {
    const fetchUserHistory = async () => {
      try {
        const response = await axios.get(`https://petcare-server.vercel.app/orderhistory/${user.email}`);
        setUserHistory(response.data);
      } catch (error) {
        setError('Error fetching user history');
      } finally {
        setLoading(false);
      }
    };

    fetchUserHistory();
  }, [email]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>User Order History</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red', fontWeight: 'bold' }}>Error: {error}</p>}
      {userHistory.length > 0 && (
        <div>
          <p>Email: {email}</p>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
            <thead>
              <tr>
                <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>Transaction ID</th>
                <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>Date</th>
                <th style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>Order Status</th>
              </tr>
            </thead>
            <tbody>
              {userHistory.map((transaction) => (
                <tr key={transaction._id}>
                  <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>{transaction.transactionId}</td>
                  <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>{new Date(transaction.date).toLocaleString()}</td>
                  <td style={{ border: '1px solid #ddd', padding: '10px', textAlign: 'left' }}>{transaction.orderStatus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {userHistory.length === 0 && <p>No transactions found.</p>}
    </div>
  );
};

export default OrderPage;
