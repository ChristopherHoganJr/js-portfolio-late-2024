import React from "react";
import Link from "next/link";

const DesktopLinks = ({ linkData }) => {
  return (
    <ul className='flex items-center gap-4'>
      {linkData.map((link, idx) => (
        <li key={idx}>
          <Link href={link.url}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default DesktopLinks;
