import React from "react";

const Hero = () => {
  return (
    <header className="hero">
      <div className="profile-container">
        <div className="profile-image">
          <img src="./assets/people.jpg" alt="Foto de perfil" />
        </div>
        <div className="profile-info">
          <h2>Descubre la Belleza de la Arquitectura</h2>
          <p>Un viaje a través de las estructuras más impresionantes del mundo.</p>
          <a href="#projects" className="explore-button">Explorar Proyectos</a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
