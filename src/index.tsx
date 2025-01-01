import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import { App } from './App';
import './App.scss';
import { ScrollToTop } from './modules/components/shared/ScrollToTop';
import { ScrollToHash } from './modules/components/shared/ScrollToHash';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);



root.render(
  <Router>
    <ScrollToTop />
    <ScrollToHash />
    <App />
  </Router>,
);
