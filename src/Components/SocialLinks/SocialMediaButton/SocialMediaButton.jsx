import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import './SocialMediaButton.css';

const SocialMediaButton = ({
  icon,
  href,
  alt,
  label,
  className,
  as = 'a',
  onClick = () => {},
}) => (
  <div className={clsx('social-media-button-container', className)} onClick={onClick}>
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="social-media-button"
      as={as}
    >
      <img 
        src={icon} 
        alt={alt} 
      />
      <span className="social-media-button-title">
        {label}
      </span>
    </a>
  </div>
);

SocialMediaButton.propTypes = {
  icon: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default SocialMediaButton;