import BACKGROUND from '/1.webp';
import LOGO from '/logo-g.svg';

import sx from './Hero.module.css';

export const Hero = () => {
  return (
    <div className={sx.container}>
      <img src={BACKGROUND} alt="Background" loading="lazy" className={sx.image} />

      <div className={sx.div}>
        <img src={LOGO} alt="Logo" loading="lazy" />
      </div>
    </div>
  );
};
