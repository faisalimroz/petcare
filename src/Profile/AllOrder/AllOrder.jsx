import { useEffect, useState } from 'react';
import axios from 'axios';

const AllOrder = () => {
    const [userHistory, setUserHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserHistory = async () => {
            try {
                const response = await axios.get('https://petcare-server.vercel.app/allorder');
                setUserHistory(response.data);
                setLoading(false);
            } catch (error) {
                setError('Error fetching user history');
                setLoading(false);
            }
        };

        fetchUserHistory();
    }, []);

    const handleOrderStatusClick = async (transactionId) => {
        try {
            // Send a PATCH request to update the order status
            await axios.patch(`https://petcare-server.vercel.app/updateOrderStatus/${transactionId}`, {
                newStatus: 'successful',
            });

            // Fetch the updated user history after the order status is updated
            const response = await axios.get('https://petcare-server.vercel.app/allorder');
            setUserHistory(response.data);
        } catch (error) {
            console.error('Error updating order status:', error);
        }
    };

    return (
        <div>
            <div className='mt-4 mb-4' style={{ padding: '10px' }}>
                <h1>All User Order History</h1>
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {userHistory.length > 0 && (
                    <div>
                        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                            <thead>
                                <tr style={{ border: '1px solid black', padding: '5px' }}>
                                    <th>Transaction ID</th>
                                    <th>Product ID</th>
                                    <th>User</th>
                                    <th>Order Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {userHistory.map((transaction) => (
                                    <tr key={transaction._id}>
                                        <td style={{ border: '1px solid black', padding: '5px' }}>{transaction.transactionId}</td>
                                        <td style={{ border: '1px solid black', padding: '5px' }}>{transaction._id}</td>
                                        <td style={{ border: '1px solid black', padding: '5px' }}>{transaction.user}</td>
                                        <td
                                            style={{ cursor: 'pointer', border: '1px solid black', padding: '5px' }}
                                            onClick={() => handleOrderStatusClick(transaction._id)}
                                        >
                                            {transaction.orderStatus}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AllOrder;
