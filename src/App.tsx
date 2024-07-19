import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Sell from './pages/Sell';
import CreateRaffle from './pages/raffle/CreateRaffle';
import CreatePrizes from './pages/prizes/CreatePrizes';

import "./index.css"


const App: React.FC = () => {

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ventas" element={<Sell />} />
          <Route path='/nueva-rifa' element={<CreateRaffle />} />
          <Route path='/nuevo-premio' element={<CreatePrizes />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
