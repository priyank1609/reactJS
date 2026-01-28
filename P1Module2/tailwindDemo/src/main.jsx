import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const rootElement = document.getElementById('root');
const rootDom = createRoot(rootElement);

rootDom.render(
    <>
      <Navbar />
      <Hero />
    </>,
);
