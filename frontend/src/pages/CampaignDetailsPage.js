import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCampaignDetails } from '../api'; // Ensure this path is correct

const CampaignDetailsPage = () => {
  const { id } = useParams();
  const [campaign, setCampaign] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCampaignDetails = async () => {
      try {
        const data = await getCampaignDetails(id);
        setCampaign(data);
      } catch (err) {
        setError(err);
      }
    };

    fetchCampaignDetails();
  }, [id]);

  if (error) return <div>Error fetching campaign details: {error}</div>;
  if (!campaign) return <div>Loading...</div>;

  return (
    <div>
      <h1>{campaign.title}</h1>
      <p>{campaign.description}</p>
      <p>Goal: ${campaign.goal}</p>
      <p>Raised: ${campaign.raised}</p>
      {/* Add more campaign details as needed */}
    </div>
  );
};

export default CampaignDetailsPage;

