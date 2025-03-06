import React from "react";

function NavigationLinks() {
  const links = ["MarketPlace", "Blog", "Events", "Community", "Contact"];

  return (
    <nav className="absolute left-2/4 text-2xl tracking-wide text-white -translate-x-1/4 top-[39px] max-md:text-xl max-md:translate-x-[-20%]">
      {links.map((link, index) => (
        <React.Fragment key={link}>
          <a href={`${link.toLowerCase()}`} className="hover:underline">
            {link}
          </a>
          {index < links.length - 1 && <span className="mx-1">|</span>}
        </React.Fragment>
      ))}
    </nav>
  );
}

export default NavigationLinks;
