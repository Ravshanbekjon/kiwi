import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AuthContextProvider } from './Context/AuthContext';
import i18n from "i18next";
import { initReactI18next } from "react-i18next"
import { lang } from './Lang/lang';

i18n.use(initReactI18next).init({
  resources: lang,
  lng: "ru"
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </BrowserRouter>
);
