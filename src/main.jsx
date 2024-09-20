import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>aca va el navbar</h1>
    <App />
    <h1>aca va el footer</h1>
  </StrictMode>
);
