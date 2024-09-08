import React, { useState, useEffect, useContext } from 'react';
import { appContext } from '../../App';
import './RewardsSummary.css'; 

const RewardsSummary = () => {
  const { setShowModal, setCashoutType, finishCashout } = useContext(appContext)
  

  const [earnings, setEarnings] = useState(0);
  const [cashbackHistory, setCashbackHistory] = useState([]);
  const [currentBalance, setCurrentBalance] = useState(0);

  // Dummy data for demonstration
  useEffect(() => {
    // Simulate fetching data
    const fetchData = async () => {
      const dummyEarnings = 100; // Total earnings
      const dummyCashbackHistory = [
        { date: '2024-07-11', amount: 12.50, details: 'Booking #12345' },
        { date: '2024-07-12', amount: 15, details: 'Booking #67890' },
        { date: '2024-08-01', amount: 13, details: 'Booking #12345' },
        { date: '2024-08-05', amount: 10, details: 'Booking #67890' }
      ];
      setEarnings(dummyEarnings);
      setCurrentBalance(dummyEarnings); // Set current balance based on total earnings
      setCashbackHistory(dummyCashbackHistory);
    };

    fetchData();
  }, []);

  return (
    <div className="rewards-summary">
      <div className="earnings-overview">
        <h2>Earnings Overview</h2>

        <div className="total-cashback">
          <span>Total Cashback Earned:</span>
          <strong>${earnings.toFixed(2)}</strong>
        </div>

        <div className="current-balance">
          <span>Current Balance:</span>
          <strong>${currentBalance.toFixed(2)}</strong>
        </div>
      </div>

      <div className="cashback-history">
        <h2>Cashback History</h2>

        <ul>
          {cashbackHistory.map((entry, index) => (
            <li key={index} className="transaction">
              <span>{entry.date}</span>
              <span>${entry.amount.toFixed(2)}</span>
              <span>{entry.details}</span>
            </li>
          ))}
        </ul>

      </div>

      <div className="cashout-options">
        <h2>Cashout Options</h2>

        <button className="cashout-button"
          onClick={() => {
            setShowModal(true)
            setCashoutType('cashout-directly')
          }}
        >
          Cash Out Directly
        </button>

        <button className="cashout-button"
          onClick={() => {
            finishCashout('convert to promo codes')
          }}
        >
          Convert to Promo Codes
        </button>
      </div>
    </div>
  );
};

export default RewardsSummary;