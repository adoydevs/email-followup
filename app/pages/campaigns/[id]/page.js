// /app/campaigns/[id]/page.js
import React from 'react';
import { useRouter } from 'next/router';

const CampaignDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Campaign Details</h1>
      <p>Details for campaign ID: {id}</p>
      {/* Campaign details content here */}
    </div>
  );
}

export default CampaignDetails;
