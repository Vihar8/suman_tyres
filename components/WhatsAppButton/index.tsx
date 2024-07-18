import Link from 'next/link';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`;

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
