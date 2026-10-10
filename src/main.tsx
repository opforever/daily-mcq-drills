import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import { AuthProvider } from './context/AuthContext';
import { DrillProvider } from './context/DrillContext';
import 'katex/dist/katex.min.css';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <DrillProvider>
      <App />
    </DrillProvider>
  </AuthProvider>
);

