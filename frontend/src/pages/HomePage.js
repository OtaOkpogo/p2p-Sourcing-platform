import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to P2P Sourcing Platform</h1>
      <p>Create or support campaigns to fund exciting projects!</p>
      <Link to="/campaigns">
        <button>View Campaigns</button>
      </Link>
      <Link to="/create-campaign">
        <button>Create a Campaign</button>
      </Link>
    </div>
  );
};

export default HomePage;

