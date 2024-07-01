// /app/contacts/page.js
import React from 'react';
import Link from 'next/link';

const ContactList = () => {
  return (
    <div>
      <h1>Contact List</h1>
      <Link href="/contacts/new">Add New Contact</Link>
      {/* Contact list content here */}
    </div>
  );
}

export default ContactList;
