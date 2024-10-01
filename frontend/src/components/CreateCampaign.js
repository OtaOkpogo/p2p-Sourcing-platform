import React, { useState } from 'react';
import axios from 'axios';

const CreateCampaign = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [targetAmount, setTargetAmount] = useState(0);
  const [deadline, setDeadline] = useState('');

  const createCampaign = async () => {
    const token = localStorage.getItem('token');
    await axios.post('/api/campaigns', {
      title, description, targetAmount, deadline,
    }, { headers: { 'Authorization': token } });
  };

  return (
    <div>
      <h2>Create Campaign</h2>
      <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
      <input type="number" placeholder="Target Amount" onChange={(e) => setTargetAmount(e.target.value)} />
      <input type="date" onChange={(e) => setDeadline(e.target.value)} />
      <button onClick={createCampaign}>Create</button>
    </div>
  );
};

export default CreateCampaign;

