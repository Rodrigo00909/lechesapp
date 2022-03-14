import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Contacto" />
      <h1 className="headtext__cormorant">Contáctanos</h1>
      <p className="p__opensans">Completa con tus datos</p>
    </div>
    <div className="app__newsletter-input">
      <input type="text" placeholder="Su numbre" />
      <input type="email" placeholder="Su correo electrónico" />
      <input type="text" placeholder="Su número de teléfono" />
      <input type="textarea" placeholder="Su mensaje" />
      <button type="button" className="custom__button">Enviar</button>
    </div>
  </div>
);

export default Newsletter;