// components/BestCarBatteryService.tsx
import React from 'react';

const BestCarBatteryService: React.FC = () => {
  return (
    <div className="service-container">
      <div className="service-content">
        <h2>Best Car Battery Replacement Service At <span>Suman Tyres</span></h2>
        <p>
          When attempting to start your vehicle, if the dashboard lights fail to illuminate or you don't hear the engine cranking, it is probable that your car battery is dead.
        </p>
        <p>
          At Suman Tyres, we have battery technicians that can be dispatched to your location in no time. Once they reach your location, they will diagnose your car battery and replace your battery on the spot if needed.
        </p>
        <a href="tel:9426636250" className="call-now-link">
          <button className="call-now-button">Call Now</button>
        </a>
      </div>
      <div className="service-image">
        <img src="/battery1.jpeg" alt="Car Battery Replacement" />
      </div>
      <style jsx>{`
        .service-container {
          display: flex;
          align-items: center;
          padding: 20px;
          background-color: #f5f5f5;
          border-radius: 8px;
        }
        .service-content {
          flex: 1;
          padding-right: 20px;
        }
        .service-content h2 {
          font-size: 24px;
          color: #333;
        }
        .service-content h2 span {
          color: #ffcc00;
        }
        .service-content p {
          font-size: 16px;
          color: #555;
          margin-top: 10px;
        }
        .call-now-link {
          display: inline-block;
          margin-top: 20px;
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
        .service-image {
          flex: 1;
        }
        .service-image img {
          width: 100%;
          height: auto;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
};

export default BestCarBatteryService;
