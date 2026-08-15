import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Safely suppress benign ResizeObserver loop warning/errors commonly triggered by responsive/layout libraries
if (typeof window !== 'undefined') {
  const resizeObserverErr1 = 'ResizeObserver loop completed with undelivered notifications';
  const resizeObserverErr2 = 'ResizeObserver loop limit exceeded';
  
  const handleWindowError = (e: ErrorEvent) => {
    if (e.message && (e.message.includes(resizeObserverErr1) || e.message.includes(resizeObserverErr2))) {
      e.stopImmediatePropagation();
    }
  };

  const handlePromiseRejection = (e: PromiseRejectionEvent) => {
    if (e.reason?.message && (e.reason.message.includes(resizeObserverErr1) || e.reason.message.includes(resizeObserverErr2))) {
      e.stopImmediatePropagation();
    }
  };

  window.addEventListener('error', handleWindowError);
  window.addEventListener('unhandledrejection', handlePromiseRejection);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
