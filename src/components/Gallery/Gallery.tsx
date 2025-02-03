import { useEffect, useState } from 'react';
import sx from './Gallery.module.css';

import IMAGE_1 from '/2.webp';
import IMAGE_2 from '/3.webp';
import IMAGE_3 from '/4.webp';
import IMAGE_4 from '/5.webp';
import IMAGE_5 from '/6.webp';
import IMAGE_6 from '/7.webp';
import IMAGE_7 from '/8.webp';
import IMAGE_8 from '/9.webp';
import IMAGE_9 from '/10.webp';

const images = [
  IMAGE_1,
  IMAGE_2,
  IMAGE_3,
  IMAGE_4,
  IMAGE_5,
  IMAGE_6,
  IMAGE_7,
  IMAGE_8,
  IMAGE_9,
];

export const Gallery = () => {
  const [loaded, setLoaded] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Precargar imágenes antes de mostrar la galería
  useEffect(() => {
    const preloadImages = async () => {
      const promises = images.map(
        (src) =>
          new Promise<void>((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () => resolve();
            img.onerror = () => resolve(); // Si hay error, sigue con las demás
          }),
      );

      await Promise.all(promises); // Espera a que todas las imágenes se carguen
      setLoaded(true);
    };

    preloadImages();
  }, []);

  // Cerrar modal con tecla ESC
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div id="gallery" className={`${loaded ? 'animate__animated animate__fadeIn' : ''}`}>
      <div className={sx.container}>
        {!loaded
          ? null
          : images.map((src, index) => (
              <div key={src} style={{ overflow: 'hidden', borderRadius: '5px' }}>
                <img
                  src={src}
                  alt={`Imagen ${index + 1}`}
                  className={sx.image}
                  onClick={() => setSelectedImage(src)}
                />
              </div>
            ))}
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div className={sx.modalOverlay} onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="Imagen ampliada" className={sx.modalImage} />
        </div>
      )}
    </div>
  );
};
