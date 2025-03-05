import { useCopyToClipboard } from '@uidotdev/usehooks';
import sx from './Gifts.module.css';

import React, { useState } from 'react';

export const Gifts = () => {
  const [, copyToClipboard] = useCopyToClipboard(); // El estado global para copiar el texto

  const CopyIcon: React.FC<{ copyText: string }> = ({ copyText }) => {
    const [copied, setCopied] = useState(false); // Estado local para cada botón

    const handleClick = () => {
      copyToClipboard(copyText); // Copiar el texto al portapapeles
      setCopied(true); // Cambiar el estado local a 'copiado'

      // Después de 3 segundos, restauramos el estado a 'Copiar'
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    };

    return (
      <div className={sx.button} onClick={handleClick}>
        {copied ? 'Copiado' : 'Copiar'} {/* Cambiar el texto según el estado local */}
      </div>
    );
  };

  return (
    <div id="gifts">
      <h2 className={sx.title}>Regalos</h2>
      <div className={sx.card}>
        <p>
          Nuestra casa ya está llena… de amor, de niños corriendo y de perros ladrando. Si
          deseas hacernos un regalo, una pequeña ayuda en efectivo nos permitirá disfrutar
          de experiencias inolvidables juntos.
        </p>

        <div className={sx.card__white}>
          <p>Cuenta bancaria</p>
          <p>
            Viviana Elizabeth Camarillo Ponce{' '}
            <CopyIcon copyText="Viviana Elizabeth Camarillo Ponce" />
          </p>
          <p>
            BBVA
            <CopyIcon copyText="BBVA" />
          </p>
          <p>
            Cuenta: 154 261 0674
            <CopyIcon copyText="154 261 0674" />
          </p>
          <p>
            Clabe: 012 320 01542610674 6
            <CopyIcon copyText="012 320 01542610674 6" />
          </p>
        </div>
      </div>
    </div>
  );
};
