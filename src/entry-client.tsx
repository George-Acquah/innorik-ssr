import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router'
import { ConfiguratorProvider } from './utils';
import ModalProvider from './utils/contexts/modal.context';

hydrateRoot(
  document.getElementById("root") as HTMLElement,
  // <StrictMode>
    <BrowserRouter>
      <ModalProvider>
      <ConfiguratorProvider>
        <AppRouter />
      </ConfiguratorProvider>
      </ModalProvider>
    </BrowserRouter>
);
