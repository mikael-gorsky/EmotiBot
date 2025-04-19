import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ReflectPage from './pages/ReflectPage';
import GrowPage from './pages/GrowPage';
import GrowModuleDetailPage from './pages/GrowModuleDetailPage';
import './styles/global.css';

function App() {
  return (
    <Router basename="/emotibot">
      <Routes>
        <Route path="/reflect" element={<ReflectPage />} />
        <Route path="/grow" element={<GrowPage />} />
        <Route path="/grow/:moduleId" element={<GrowModuleDetailPage />} />
        <Route path="*" element={<Navigate to="/reflect" replace />} />
      </Routes>
    </Router>
  );
}

export default App;