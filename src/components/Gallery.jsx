import React from "react";

const Gallery = () => {
  return (
    <section className="gallery">
      <h2 className="gallery-title">Mis Proyectos</h2>
      <div className="gallery-grid">
        <div className="gallery-item">
          <img src="/assets/edif1.avif" alt="Edificio 1" className="gallery-image" />
        </div>
        <div className="gallery-item">
          <img src="/assets/edif2.jpg" alt="Edificio 2" className="gallery-image" />
        </div>
        <div className="gallery-item">
          <img src="/assets/edif3.jpg" alt="Edificio 3" className="gallery-image" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
