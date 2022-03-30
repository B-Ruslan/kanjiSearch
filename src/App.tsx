import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from './components/main/main';
import Search from './components/search/search';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
