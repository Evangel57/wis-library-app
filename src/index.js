import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

import Main from './componnents/main/main.jsx';
import Library from './componnents/library/library.jsx';

import './styles/index.css';
import './styles/typography.css';

const menuItems = [
  { text: 'Home', link: '/home' },
  { text: 'About', link: '/about' },
  { text: 'Contact', link: '/contact' }
];

// const root = ReactDOM.createRoot(document.getElementById('root'));
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Main />
      <Library title="БИБЛИОТЕКА ПРИТЧ" nav={menuItems} />
      
  </React.StrictMode>
);