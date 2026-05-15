import Link from 'next/link';
import './PhoneCallButton.css';
import { FaPhoneAlt } from 'react-icons/fa';

const PhoneCallButton = () => {
  const phoneNumber = "+919426636250"; // Suman Tyres phone number

  return (
    <div className="phonecall-container">
      <div className="phonecall-pulse"></div>
      <Link href={`tel:${phoneNumber}`} className="phonecall-link">
        <FaPhoneAlt size={34} color="white" />
      </Link>
    </div>
  );
};

export default PhoneCallButton;
