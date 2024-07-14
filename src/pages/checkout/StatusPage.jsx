import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StatusPage = ({ userId, productIds }) => {
  const [snapToken, setSnapToken] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(`/api/transactions?user_id=${userId}`);
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, [userId]);

  const createPayment = async () => {
    try {
      const response = await axios.post('/api/payment', {
        user_id: userId,
        product_id: productIds,
      });
      setSnapToken(response.data.token);
      setErrorMessage(null);
    } catch (error) {
      console.error('Error creating payment:', error);
      setErrorMessage('Error creating payment. Please try again.');
    }
  };

  const handleStatusUpdate = async (orderId) => {
    try {
      const response = await axios.post('/api/payment/webhook', { order_id: orderId });
      console.log('Status update:', response.data);
      // Optionally update transactions after status change
      fetchTransactions();
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const openSnap = () => {
    if (snapToken) {
      window.snap.pay(snapToken, {
        onSuccess: function(result) {
          console.log('Payment successful!', result);
          alert('Payment successful!');
        },
        onPending: function(result) {
          console.log('Payment pending...', result);
          alert('Payment pending...');
        },
        onError: function(result) {
          console.log('Payment failed.', result);
          alert('Payment failed. Please try again.');
        },
        onClose: function() {
          console.log('Payment popup closed.');
          alert('Payment popup closed.');
        }
      });
    }
  };

  return (
    <div className="my-5">
      <div className="container">
        <div className="row justify-content-around">
          <p className="mt-5 text-center fs-2 fw-bold">Your <span style={{ color: 'red' }}>Order</span></p>

          {snapToken ? (
            <div className="col-md-3 text-center">
              <button className="btn btn-primary" onClick={openSnap}>Pay Now</button>
              {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </div>
          ) : (
            <div className="col-md-3 text-center">
              <button className="btn btn-primary" onClick={createPayment}>Create Payment</button>
              {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </div>
          )}

          <hr />

          {transactions.map(transaction => (
            <div className="col-sm-3 my-5 mb-sm-0" key={transaction.id}>
              <div className="card">
                <div className="card-body">
                  <div className="card" style={{ maxWidth: '540px' }}>
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src={transaction.image_url} className="img-fluid rounded-start" alt={transaction.product_name} />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{transaction.product_name}</h5>
                          <span className="card-text">{transaction.status}</span>
                          <span className="d-block">IDR {transaction.gross_amount}</span>
                          {transaction.status === 'send' && (
                            <a href={`/review/${transaction.id}`} className="btn btn-primary">Konfirmasi Pesanan</a>
                          )}
                          {transaction.status === 'pending' && (
                            <button className="btn btn-info" onClick={() => handleStatusUpdate(transaction.order_id)}>Check Status</button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default StatusPage;
