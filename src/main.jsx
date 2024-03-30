import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeContextProvider } from './Context/ThemeContext.jsx';
import { I18nextProvider } from 'react-i18next'
import i18next from 'i18next';
import './index.css'

import global_es from './Translate/es/global.json'
import global_en from './Translate/en/global.json'

i18next.init({
  interpolation: { escapeValue: false },
  lng: "es",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
    <I18nextProvider i18n={i18next}>
    <App />
    </I18nextProvider>
  </ThemeContextProvider>,
)
