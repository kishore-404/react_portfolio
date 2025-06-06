import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './assets/styles.css';
// import "./assets/JS/main.js";
// import "./assets/JS/scrollreveal.min.js";
// import "./assets/JS/swiper-bundle.min.js"
import { initUIEffects } from './utils.tsx';
import App from './App.tsx';
createRoot(document.getElementById('root')).render(<StrictMode>
    <App />
  </StrictMode>);
window.addEventListener('DOMContentLoaded', initUIEffects);
