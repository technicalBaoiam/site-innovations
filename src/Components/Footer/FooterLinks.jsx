import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const FooterLinks = ({ title, links }) => {
  return (
    <div className={"col-span-2 md:col-span-1"}>
      <h2 className="text-sm font-semibold mb-3">{title}</h2>
      <ul>
        {links.map((link, index) => (
          <li className="mb-1" key={index}>
            <Link to={link.to} className="hover:underline flex items-start gap-1">
            {link.icon || <MdKeyboardArrowRight className=" min-w-6 text-lg aspect-square" /> }
            <span className="text-xs">{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
