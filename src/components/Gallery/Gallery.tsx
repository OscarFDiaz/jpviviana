import sx from './Gallery.module.css';

export const Gallery = () => {
  const images = [
    '/2.webp',
    '/3.webp',
    '/4.webp',
    '/5.webp',
    '/6.webp',
    '/7.webp',
    '/8.webp',
    '/9.webp',
    '/10.webp',
  ];

  return (
    <div id="gallery">
      <h2>Galería</h2>
      <div className={sx.container}>
        {images.map((src, index) => (
          <div key={src} className={'animate__animated animate__fadeIn'}>
            <img
              src={src}
              alt={`Imagen ${index + 1}`}
              loading="lazy"
              className={`${sx.image} animate__animated animate__fadeIn`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
