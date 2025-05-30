import Link from 'next/link';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const predefinedMessage = encodeURIComponent("Hello, I’m interested in your products.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${predefinedMessage}`;


  return (
    <Link href={whatsappUrl} passHref target="_blank" rel="noopener noreferrer">
      <img
        src="/whatsapp-logo.png"
        alt="WhatsApp Logo"
        width={55}
        height={55}
        className="whatsapp-logo whatsapp-logo-image"
      />
    </Link>
  );
};

export default WhatsAppButton;
