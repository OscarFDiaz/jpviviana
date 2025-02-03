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

export const Gallery = () => {
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

  return (
    <div id="gallery">
      <div className={sx.container}>
        {images.map((src, index) => (
          <div
            key={src}
            className={'animate__animated animate__fadeIn'}
            style={{ overflow: 'hidden', borderRadius: '5px' }}
          >
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
