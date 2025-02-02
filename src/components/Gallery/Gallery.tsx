import sx from './Gallery.module.css';

export const Gallery = () => {
  return (
    <div id="gallery">
      <h2>Galería</h2>
      <div className={sx.container}>
        <img src="/2.webp" alt="Background" loading="lazy" className={sx.image} />
        <img src="/3.webp" alt="Background" loading="lazy" className={sx.image} />
        <img src="/4.webp" alt="Background" loading="lazy" className={sx.image} />
        <img src="/5.webp" alt="Background" loading="lazy" className={sx.image} />
        <img src="/6.webp" alt="Background" loading="lazy" className={sx.image} />
        <img src="/7.webp" alt="Background" loading="lazy" className={sx.image} />
        <img src="/8.webp" alt="Background" loading="lazy" className={sx.image} />
        <img src="/9.webp" alt="Background" loading="lazy" className={sx.image} />
      </div>
    </div>
  );
};
