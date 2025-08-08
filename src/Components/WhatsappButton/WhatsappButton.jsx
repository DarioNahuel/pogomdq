import React from 'react';
import './WhatsappButton.css';

const WhatsappButton = () => {
  return (
    <div className={"whatsapp-button-container"}>
        <a
            href="https://chat.whatsapp.com/I7lqqqjpwzq5hd7R83DLwM"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
            >
            Unirse al grupo de WhatsApp
        </a>
    </div>
  )
};

export default WhatsappButton;
