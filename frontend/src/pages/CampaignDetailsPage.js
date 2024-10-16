import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCampaignById } from '../api';
import { Link } from 'react-router-dom';

const CampaignDetailsPage = () => {
  const { id } = useParams();
  const [campaign, setCampaign] = useState(null);

  useEffect(() => {
    const loadCampaign = async () => {
      const response = await fetchCampaignById(id);
      setCampaign(response.data);
    };

    loadCampaign();
  }, [id]);

  if (!campaign) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{campaign.title}</h1>
      <p>{campaign.description}</p>
      <Link to={`/donate/${campaign._id}`}>
        <button>Donate</button>
      </Link>
    </div>
  );
};

export default CampaignDetailsPage;

