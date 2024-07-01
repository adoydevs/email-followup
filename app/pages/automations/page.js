// /app/automations/page.js
import React from 'react';
import Link from 'next/link';

const AutomationList = () => {
  return (
    <div>
      <h1>Automation List</h1>
      <Link href="/automations/new">Create New Automation</Link>
      {/* Automation list content here */}
    </div>
  );
}

export default AutomationList;
