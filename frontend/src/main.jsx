import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { ThemeProvider } from './components/ThemeContext';
// import { AuthProvider } from './components/context/AuthContext';
import './index.css';

const rootElement = document.getElementById('root');

// Ensure rootElement exists
if (rootElement) {
  const root = createRoot(rootElement);

  root.render(
    <StrictMode>
      <ThemeProvider>
      <BrowserRouter>
      
          <App />
      </BrowserRouter>
      </ThemeProvider>
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
