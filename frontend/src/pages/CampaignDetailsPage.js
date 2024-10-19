import React, { useEffect, useState } from 'react';
import { getCampaignDetails, donateToCampaign } from '../api'; // Import necessary functions

const CampaignDetailsPage = ({ match }) => {
  const [campaign, setCampaign] = useState(null);
  const [error, setError] = useState('');
  const [donationAmount, setDonationAmount] = useState('');

  const campaignId = match.params.id; // Assuming you're using React Router

  useEffect(() => {
    const loadCampaignDetails = async () => {
      try {
        const response = await getCampaignDetails(campaignId);
        setCampaign(response);
      } catch (err) {
        setError('Failed to load campaign details');
        console.error('Error fetching campaign:', err);
      }
    };

    loadCampaignDetails();
  }, [campaignId]);

  const handleDonate = async () => {
    try {
      await donateToCampaign(campaignId, donationAmount);
      alert('Donation successful');
    } catch (err) {
      setError('Failed to donate');
      console.error('Donation error:', err);
    }
  };

  if (!campaign) return <div>Loading...</div>;

  return (
    <div>
      <h1>{campaign.title}</h1>
      <p>{campaign.description}</p>
      <p>Goal: ${campaign.goal}</p>
      <p>Raised: ${campaign.raised}</p>

      <input 
        type="number" 
        placeholder="Donation amount" 
        value={donationAmount} 
        onChange={(e) => setDonationAmount(e.target.value)} 
      />
      <button onClick={handleDonate}>Donate</button>

      {error && <p>{error}</p>}
    </div>
  );
};

export default CampaignDetailsPage;

