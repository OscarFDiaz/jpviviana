import { CountDown } from './components/Countdown/CountDown';
import { Gallery } from './components/Gallery/Gallery';
import { Gifts } from './components/Gifts/Gifts';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Information } from './components/Information/Information';
import { Layout } from './components/Layout/Layout';

import 'animate.css';

function App() {
  return (
    <Layout>
      <Header />
      <Hero />
      <Gallery />
      <Information />
      <Gifts />
      <CountDown />
    </Layout>
  );
}

export default App;
