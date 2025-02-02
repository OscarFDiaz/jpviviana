import { Gallery } from './components/Gallery/Gallery';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Layout } from './components/Layout/Layout';

function App() {
  return (
    <Layout>
      <Header />
      <Hero />
      <Gallery />
    </Layout>
  );
}

export default App;
