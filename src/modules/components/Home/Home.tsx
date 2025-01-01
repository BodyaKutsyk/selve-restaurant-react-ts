import { Menu } from '../shared/Menu';
import './Home.scss';
import { AboutUs } from './components/AboutUs';
import { Head } from './components/Head';

export const Home = () => {
  return (
    <main className="home">
      <Head />
      <AboutUs />
      <Menu />
    </main>
  );
};
