import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-48 bg-red-100 min-h-screen">
      <div className="text-2xl font-bold m-5">
        <Link href= "/">Logo</Link>
      </div>

      <div className="flex flex-col justify-around font-bold">
        <Link className=" hover:text-[#5932EA] p-5" href="/pages/dashboard">
          Dashboard
        </Link>
        <Link className=" hover:text-[#5932EA] p-5" href="/pages/reports">
          Reports
        </Link>
        <Link className="hover:text-[#5932EA] p-5" href="/pages/campaigns">
          Campaigns
        </Link>
        <Link className="hover:text-[#5932EA] p-5" href="/pages/automations">
          Automation
        </Link>
        <Link className="p-5 hover:text-[#5932EA]" href="/pages/contacts">
          Contacts
        </Link>
        <Link className="p-5 hover:text-[#5932EA]" href="/pages/settings">
          Settings
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
