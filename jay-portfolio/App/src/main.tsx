import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";

await import (`./assets/css/index.scss`);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </Router>
  </StrictMode>,
)
