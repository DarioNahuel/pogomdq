import React from 'react';
import './SocialLinks.css';
import whatsappIcon from '/whatsapp.svg';
import instagramIcon from '/instagram.svg';
import campfireIcon from '/campfire.png';

const socialLinks = [
  {
    href: 'https://chat.whatsapp.com/I7lqqqjpwzq5hd7R83DLwM',
    icon: whatsappIcon,
    alt: 'WhatsApp',
    label: 'WhatsApp'
  },
  {
    href: 'https://instagram.com/tu-cuenta',
    icon: instagramIcon,
    alt: 'Instagram',
    label: 'Instagram'
  },
  {
    href: 'https://campfire.onelink.me/eBr8?af_dp=campfire://&af_force_deeplink=true&deep_link_sub1=cj1jbHVicyZjPTMzZDdlNTJjLTkwNDgtNDk4Ni05NzJjLWJkNGNmZjk0OTM2ZSZpPXRydWU=',
    icon: campfireIcon,
    alt: 'Campfire',
    label: 'Campfire'
  }
];

const SocialLinks = () => (
  <section className="social-section">
    <h2 className="social-title">
      Explorá, jugá y conectá con la comunidad Pokémon GO de Mar del Plata.
    </h2>
    <div className="social-row">
      {socialLinks.map(({ href, icon, alt, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          <img src={icon} alt={alt} />
        </a>
      ))}
    </div>
    <h4 className="description">
      Más de 1500 entrenadores ya forman parte de la comunidad en Campfire. Sumate para participar en eventos, coordinar raids y vivir Pokémon GO en Mar del Plata al máximo.
    </h4>
  </section>
);

export default SocialLinks;
