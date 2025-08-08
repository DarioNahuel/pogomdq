import React from 'react';
import './Album.css';

import { MasonryPhotoAlbum } from "react-photo-album";
import "react-photo-album/masonry.css";

const photos = [
  { src: "/meeting.png", width: 1200, height: 800 },
  { src: "/meeting2.jpeg", width: 1200, height: 800 },
  { src: "/meeting3.jpeg", width: 1200, height: 800 },
  { src: "/meeting4.jpeg", width: 1200, height: 800 },
  { src: "/meeting5.jpeg", width: 1200, height: 800  },
];

const Album = () => {
  return (
    <div className="meetings">
      <h4>En nuestros eventos presenciales de la comunidad de Pokémon GO Mar del Plata, sorteamos premios, compartimos unos mates y disfrutamos juntos de un buen rato jugando. ¡Siempre hay buena onda, comunidad y muchas poképaradas cerca!</h4>
      <MasonryPhotoAlbum  photos={photos} />
    </div>
  );
}

export default Album;