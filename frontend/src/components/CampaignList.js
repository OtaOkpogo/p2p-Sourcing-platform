import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const fetchCampaigns = async () => {
      const res = await axios.get('/api/campaigns');
      setCampaigns(res.data);
    };
    fetchCampaigns();
  }, []);

  return (
    <div>
      <h2>All Campaigns</h2>
      <ul>
        {campaigns.map(campaign => (
          <li key={campaign._id}>
            {campaign.title} - ${campaign.currentAmount}/{campaign.targetAmount}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CampaignList;

