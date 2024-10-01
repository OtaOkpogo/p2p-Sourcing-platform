import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CampaignsPage from './pages/CampaignsPage';
import CreateCampaignPage from './pages/CreateCampaignPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import CampaignDetailsPage from './pages/CampaignDetailsPage';
import DonatePage from './pages/DonatePage';
import SuccessPage from './pages/SuccessPage';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/campaigns" element={<CampaignsPage />} />
          <Route path="/campaigns/:id" element={<CampaignDetailsPage />} />
          <Route path="/donate/:id" element={<DonatePage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create-campaign" element={<PrivateRoute><CreateCampaignPage /></PrivateRoute>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

