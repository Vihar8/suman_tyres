import Link from 'next/link';
import './WhatsAppButton.css';
import PhoneCallButton from '../PhoneCallButton';

const WhatsAppButton = () => {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const predefinedMessage = encodeURIComponent("Hello, I’m interested in your products.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${predefinedMessage}`;

  return (
    <>
      <PhoneCallButton />
      <div className="whatsapp-container">
        <div className="whatsapp-pulse"></div>
        <Link href={whatsappUrl} passHref target="_blank" rel="noopener noreferrer" className="whatsapp-link">
          <img
            src="/whatsapp-logo.png"
            alt="Chat with Suman Tyres on WhatsApp"
            className="whatsapp-logo"
          />
        </Link>
      </div>
    </>
  );
};

export default WhatsAppButton;
