import './App.scss';

import { Route, Routes, Navigate, useLocation } from 'react-router-dom';

import { Footer } from './modules/components/Footer';
import { Header } from './modules/components/Header';
import { Home } from './modules/components/Home';
import { Menu } from './modules/components/shared/Menu';
import { Navigation } from './modules/components/Navigation';
import { useState, useEffect } from 'react';

export const App = () => {
  const [isNavOpem, setIsNavOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsNavOpen(false);
  }, [location]);

  return (
    <div className="App">
      <Header setIsNavOpen={setIsNavOpen} />
      <Navigation isNavOpen={isNavOpem} setIsNavOpen={setIsNavOpen} />
      <Routes>
        <Route path="home" element={<Navigate to="/" replace={true} />} />
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu isSearchEnabled={true} />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
};
