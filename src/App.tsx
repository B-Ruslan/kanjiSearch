import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/main/main';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
