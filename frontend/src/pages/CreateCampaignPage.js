import React, { useState } from 'react';
import { createCampaign } from '../api';

const CreateCampaignPage = () => {
  const [formData, setFormData] = useState({ title: '', description: '', goal: '' });
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createCampaign(formData);
      alert('Campaign created successfully');
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div>
      <h2>Create Campaign</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        />
        <input
          type="number"
          placeholder="Goal"
          value={formData.goal}
          onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
        />
        <button type="submit">Create</button>
      </form>
      {error && <p>Error creating campaign: {error}</p>}
    </div>
  );
};

export default CreateCampaignPage;

