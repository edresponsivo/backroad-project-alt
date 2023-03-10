import React from "react";
const SocialLink = ({ id, href, icon, childClass }) => {
  return (
    <li key={id}>
      <a
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        className={childClass}
      >
        <i className={icon}></i>
      </a>
    </li>
  );
};
export default SocialLink;
