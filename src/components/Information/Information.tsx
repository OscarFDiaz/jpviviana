import {
  MdAccessTime,
  MdCalendarMonth,
  MdFace,
  MdFace2,
  MdMap,
  MdOutlinePlace,
} from 'react-icons/md';

import sx from './Information.module.css';
import BACKGROUND from '/section_bg1.webp';
import BACKGROUND_2 from '/shape2.png';

export const Information = () => {
  return (
    <div
      id="information"
      className={sx.container}
      style={{ backgroundImage: `url(${BACKGROUND})` }}
    >
      <h2 className={sx.title}>Información de la boda</h2>
      <div className={sx.cards__container}>
        <div className={sx.card}>
          <h3
            className={sx.title__info}
            style={{ backgroundImage: `url(${BACKGROUND_2})` }}
          >
            La ceremonia
          </h3>
          <hr style={{ borderTop: '1px solid #ff2828', width: '100%' }} />
          <div className={sx.card__title}>
            <MdCalendarMonth />
            <p>31 de mayo 2025</p>
          </div>
          <div className={sx.card__title}>
            <MdAccessTime />
            <p>4:00 PM</p>
          </div>
          <div className={sx.card__title}>
            <MdOutlinePlace />
            <p>Templo de San José de La Floresta.</p>
          </div>

          <a
            className={sx.button}
            href="https://maps.app.goo.gl/srB9AN5pymr17HG57"
            target="_blank"
          >
            <MdMap />
            Ver en el mapa
          </a>
        </div>

        <div className={sx.card}>
          <h3
            className={sx.title__info}
            style={{ backgroundImage: `url(${BACKGROUND_2})` }}
          >
            La fiesta
          </h3>
          <hr style={{ borderTop: '1px solid #ff2828', width: '100%' }} />
          <div className={sx.card__title}>
            <MdCalendarMonth />
            <p>31 de mayo 2025</p>
          </div>
          <div className={sx.card__title}>
            <MdAccessTime />
            <p>5:30 PM</p>
          </div>
          <div className={sx.card__title}>
            <MdOutlinePlace />
            <p>Chapinaya, P.º del Mirador 36, Fracc.</p>
          </div>

          <a
            className={sx.button}
            href="https://maps.app.goo.gl/vMzZyYSFUaDqeQSR8"
            target="_blank"
          >
            <MdMap />
            Ver en el mapa
          </a>
        </div>

        <div className={sx.card}>
          <h3
            className={sx.title__info}
            style={{ backgroundImage: `url(${BACKGROUND_2})` }}
          >
            Código de vestimenta
          </h3>
          <hr style={{ borderTop: '1px solid #ff2828', width: '100%' }} />
          <div className={sx.card__title}>
            <MdFace2 />
            <p>Mujeres</p>
          </div>
          <div className={sx.card__title}>
            <MdFace />
            <p>Hombres</p>
          </div>

          <p className={sx.text}>* Por favor, respetar el código de vestimenta</p>
        </div>
      </div>
    </div>
  );
};
