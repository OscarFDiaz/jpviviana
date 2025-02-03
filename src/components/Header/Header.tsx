import sx from './Header.module.css';

import LOGO from '/logo-g-red.svg';

export const Header = () => {
  return (
    <header className={sx.header}>
      <nav className={sx.nav}>
        <img src={LOGO} alt="Logo" loading="lazy" />
        <a>Inicio</a>
        <a href="#gallery">Galería</a>
        <a href="#information">Información</a>
        <a href="#gifts">Regalos</a>
        <a href="#countdown">Cuenta regresiva</a>
      </nav>
    </header>
  );
};
