
import React from 'react';

const OrderCarOilOnline: React.FC = () => {
  return (
    <div className="order-container">
      <div className="order-content">
        <h2>ORDER A CAR/BIKE OIL ONLINE?</h2>
        <p>
          On Suman Tyres, you can also search and order online using our oil shop.
        </p>
        <a href="tel:9426636250" className="call-now-link">
          <button className="call-now-button">Call Now</button>
        </a>
      </div>
      <div className="battery-images">
        <img src="/1040c.jpeg" alt="Exide Xplore Battery" />
        
        <img src="/castrolcom.jpeg" alt="Amaron Battery" />
        <img src="/repsol-elite.jpeg" alt="Exide Mileage Battery" />
      </div>
      <style jsx>{`
        .order-container {
          background-color: #f5f5f5;
          padding: 40px 20px;
          border-radius: 8px;
          text-align: center;
        }
        .order-content {
          margin-bottom: 30px;
        }
        .order-content h2 {
          font-size: 24px;
          color: #333;
          margin-bottom: 10px;
        }
        .order-content p {
          font-size: 16px;
          color: #555;
          margin-bottom: 20px;
        }
        .call-now-link {
          display: inline-block;
          text-decoration: none;
        }
        .call-now-button {
          padding: 10px 20px;
          font-size: 16px;
          color: #fff;
          background-color: #001f3f;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        .call-now-button:hover {
          background-color: #004080;
        }
        .battery-images {
          display: flex;
          justify-content: space-around;
          margin-top: 20px;
        }
        .battery-images img {
          width: 120px;
          height: auto;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
};

export default OrderCarOilOnline;
