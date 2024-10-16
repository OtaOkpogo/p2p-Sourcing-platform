import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DonatePage = () => {
  const { id } = useParams(); // The campaign ID
  const [amount, setAmount] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Integration with Stripe or backend to handle the donation
    // Example API call: await donateToCampaign(id, amount);
    console.log(`Donating ${amount} to campaign ID ${id}`);
    navigate('/success');
  };

  return (
    <div>
      <h1>Donate to Campaign</h1>
      <form onSubmit={handleSubmit}>
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Donate</button>
      </form>
    </div>
  );
};

export default DonatePage;

