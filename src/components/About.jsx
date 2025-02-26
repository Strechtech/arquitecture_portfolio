import React from "react";

const About = () => {
  return (
    <section className="about">
      <div className="about-text">
        <h2>Sobre Nosotros</h2>
        <p>
          La arquitectura es el arte y la técnica de diseñar y construir edificios.
          Nos enfocamos en crear espacios que no solo sean funcionales, sino también
          estéticamente agradables y sostenibles.
        </p>
      </div>
      <div className="about-video">
        <video
          src="/assets/background3.mp4" // Reemplaza con la ruta de tu video
          autoPlay
          loop
          muted
          className="about-video-content"
        />
      </div>
    </section>
  );
};

export default About;
