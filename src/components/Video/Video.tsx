import { useState } from 'react';
import VIDEO from '/SaveTheDate.mp4';

import sx from './Video.module.css';

export const Video = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <h2 className={sx.title}>Save the date</h2>
      <div className={sx.container}>
        {!loaded && <div className={sx.loader}></div>}
        <video className={sx.video} controls onLoadedData={() => setLoaded(true)}>
          <source src={VIDEO} type="video/mp4" />
        </video>
      </div>
    </>
  );
};
