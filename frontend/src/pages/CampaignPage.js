import React, { useState } from 'react';
import './CreateCampaignPage.css'; // Create this CSS file to add styling
import { createCampaign } from '../api';

const CreateCampaignPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [goal, setGoal] = useState('');

  const handleCreateCampaign = async (e) => {
    e.preventDefault();
    await createCampaign({ title, description, goal });
    // Handle success
  };

  return (
    <div className="create-campaign-container">
      <h2 className="create-campaign-title">Create a Campaign</h2>
      <form className="create-campaign-form" onSubmit={handleCreateCampaign}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter campaign title"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter campaign description"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="goal">Goal:</label>
          <input
            type="number"
            id="goal"
            value={goal}
            onChange={(e) => setGoal(e.target.value)}
            placeholder="Enter campaign goal"
            required
          />
        </div>
        <button type="submit" className="create-campaign-button">
          Create Campaign
        </button>
      </form>
    </div>
  );
};

export default CreateCampaignPage;

