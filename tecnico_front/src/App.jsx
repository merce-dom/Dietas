import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Login from './components/login';
import Comensales from './components/comensales/comensales';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [token] = useCookies(['tec-token']);
  
  const ProtectedRoute = ({ children }) => {
    return token['tec-token'] ? children : <Navigate to="/login" replace />;
  };

  return (
    <Router>
      <Routes>
        <Route 
          path="/login" 
          element={
            token['tec-token'] ? <Navigate to="/comensales" replace /> : <Login />
          } 
        />
        
        {/* Ruta raíz redirige a comensales */}
        <Route 
          path="/" 
          element={<Navigate to="/comensales" replace />}
        />
        
        {/* Ruta principal de la app */}
        <Route 
          path="/comensales/*" 
          element={
            <ProtectedRoute>
              <Comensales />
            </ProtectedRoute>
          } 
        />
        
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;