import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import './SocialLinks.css';
import SocialMediaButton from './SocialMediaButton';
import whatsappIcon from '/whatsapp.svg';
import instagramIcon from '/instagram.svg';
import campfireIcon from '/campfire.png';
import facebookIcon from '/facebook.svg';
import whatsappQR from '/qr.png';

// Binding modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const defaultLinks = [
  {
    href: 'https://chat.whatsapp.com/I7lqqqjpwzq5hd7R83DLwM',
    icon: whatsappIcon,
    alt: 'WhatsApp',
    label: 'Sumate al grupo de WhatsApp'
  },
  {
    href: 'https://www.instagram.com/mar.del.plata_go',
    icon: instagramIcon,
    alt: 'Instagram',
    label: 'Seguinos en Instagram'
  },
  {
    href: 'https://www.facebook.com/groups/pokemongomardelplata',
    icon: facebookIcon,
    alt: 'Facebook',
    label: 'Sumate al grupo de Facebook'
  },
  {
    href: 'https://campfire.onelink.me/eBr8?af_dp=campfire://',
    icon: campfireIcon,
    alt: 'Campfire',
    label: 'Unite a Campfire'
  }
];

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '16px',
    borderRadius: '8px',
    backgroundColor: '#fff'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  }
};

const SocialLinks = ({
  title = 'Explorá, jugá y conectá con la comunidad Pokémon GO de Mar del Plata.',
  description = 'Más de 1500 entrenadores ya forman parte de la comunidad en Campfire. Sumate para participar en eventos, coordinar raids y vivir Pokémon GO en Mar del Plata al máximo.',
  links = defaultLinks,
  className
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <section className={`social-section ${className || ''}`}>
      <h2 className="social-title">{title}</h2>
      <div className="social-row">
        {links.map(({ href, icon, alt, label }) => (
          <SocialMediaButton 
            className="social-row-button" 
            key={label} 
            href={href} 
            alt={alt} 
            label={label} 
            icon={icon} 
          /> 
        ))}
        <SocialMediaButton
          className="social-row-button"
          key="Sumate al grupo con este QR"
          href="#"
          alt="Sumate al grupo con este QR"
          label="Sumate al grupo con este QR"
          icon={whatsappQR}
          as="button"
          onClick={(e) => {
            e.preventDefault();
            setModalIsOpen(true);
          }}
        />
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
        contentLabel="Sumate al grupo con este QR"
      >
        <img
          src={whatsappQR}
          alt="Sumate al grupo con este QR"
          style={{
            maxWidth: '90vw',
            maxHeight: '90vh',
            borderRadius: '8px'
          }}
        />
      </Modal>
    </section>
  );
};

SocialLinks.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      href: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    })
  ),
  className: PropTypes.string
};

export default SocialLinks;
