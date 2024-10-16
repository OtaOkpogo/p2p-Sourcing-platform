import React, { useEffect, useState } from 'react';
import { fetchCampaigns } from '../api';
import { Link } from 'react-router-dom';

const CampaignsPage = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const loadCampaigns = async () => {
      const response = await fetchCampaigns();
      setCampaigns(response.data);
    };

    loadCampaigns();
  }, []);

  return (
    <div>
      <h1>All Campaigns</h1>
      {campaigns.map((campaign) => (
        <div key={campaign._id}>
          <h2>{campaign.title}</h2>
          <p>{campaign.description}</p>
          <Link to={`/campaigns/${campaign._id}`}>
            <button>View Campaign</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CampaignsPage;

