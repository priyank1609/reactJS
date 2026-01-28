import { createRoot } from 'react-dom/client'
import './index.css' 
import './app/landing/profile.css'
import LandingPage from './app/landing';

const rootElement = document.getElementById('root');
const rootDom = createRoot(rootElement);

rootDom.render(
  <>
    <LandingPage />
  </>,
);
