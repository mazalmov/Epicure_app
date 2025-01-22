import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client'
import 'swiper/swiper-bundle.css';
import './index.css'
import App from './App.tsx'
import store from './store/store.ts';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
)


