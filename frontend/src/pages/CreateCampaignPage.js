import React, { useState } from 'react';
import { createCampaign } from '../api';
import { useNavigate } from 'react-router-dom';

const CreateCampaignPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token'); // Assuming you're using token-based authentication
    const campaignData = { title, description };
    await createCampaign(campaignData, token);
    navigate('/campaigns'); // Redirect to campaigns page after creation
  };

  return (
    <div>
      <h1>Create a New Campaign</h1>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Create Campaign</button>
      </form>
    </div>
  );
};

export default CreateCampaignPage;

