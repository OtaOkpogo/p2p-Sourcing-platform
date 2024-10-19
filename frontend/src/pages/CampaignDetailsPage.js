import React, { useEffect, useState } from 'react';
import './CampaignDetailsPage.css'; // Create this CSS file to add styling
import { getCampaignDetails, donateToCampaign } from '../api';

const CampaignDetailsPage = ({ match }) => {
  const [campaign, setCampaign] = useState(null);
  const [donationAmount, setDonationAmount] = useState(0);

  useEffect(() => {
    const fetchCampaignDetails = async () => {
      const data = await getCampaignDetails(match.params.id);
      setCampaign(data);
    };
    fetchCampaignDetails();
  }, [match.params.id]);

  const handleDonate = async () => {
    await donateToCampaign(campaign._id, donationAmount);
    // Handle donation success
  };

  return (
    <div className="campaign-details-container">
      {campaign ? (
        <>
          <h2 className="campaign-title">{campaign.title}</h2>
          <p className="campaign-description">{campaign.description}</p>
          <h3 className="campaign-goal">Goal: ${campaign.goal}</h3>
          <h3 className="campaign-raised">Raised: ${campaign.raised}</h3>

          <input
            type="number"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
            className="donation-input"
            placeholder="Enter donation amount"
          />
          <button className="donate-button" onClick={handleDonate}>
            Donate
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default CampaignDetailsPage;

