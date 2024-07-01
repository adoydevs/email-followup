// /app/campaigns/page.js
import React from 'react';
import Link from 'next/link';

const CampaignList = () => {
  return (
    <div>
      <h1>Campaign List</h1>
      <Link href="/campaigns/new">Create New Campaign</Link>
      {/* Campaign list content here */}
    </div>
  );
}

export default CampaignList;
