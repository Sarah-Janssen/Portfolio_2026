import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import AppRoutes from './routes/AppRoutes';
import ScrollToTop from '@/components/layout/ScrollToTop';
import './index.css';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <AppRoutes />
      </Router>
    </HelmetProvider>
  );
}

export default App;
