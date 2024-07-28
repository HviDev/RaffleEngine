import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Sell from './pages/Sell';
import CreateRaffle from './pages/raffle/CreateRaffle';
import CreatePrizes from './pages/prizes/CreatePrizes';
import AdminRaffle from './pages/raffle/AdminRaffle';7
import AdminPrizes from './pages/prizes/AdminPrizes';

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
          <Route path='/admin-rifa' element={<AdminRaffle/>} />
          <Route path='/admin-premios' element={<AdminPrizes/>} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
