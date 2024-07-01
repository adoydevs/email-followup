// /app/automations/[id]/page.js
import React from 'react';
import { useRouter } from 'next/router';

const AutomationDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Automation Details</h1>
      <p>Details for automation ID: {id}</p>
      {/* Automation details content here */}
    </div>
  );
}

export default AutomationDetails;
