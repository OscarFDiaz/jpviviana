import sx from './Header.module.css';

import LOGO from '/logo-g-red.svg';

export const Header = () => {
  return (
    <header className={sx.header}>
      <nav className={sx.nav}>
        <img src={LOGO} alt="Logo" loading="lazy" />
        <a>Inicio</a>
        <a href="#gallery">Galería</a>
        <a>Información</a>
        <a>Regalos</a>
        <a>Cuenta regresiva</a>
      </nav>
    </header>
  );
};
