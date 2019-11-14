import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import AllPages from "../pages/my-files"

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <aside id="aside" className=" bg-gray-700 w-screen md:w-1/5 md:h-screen">
      <div className="flex flex-wrap md:flex-col justify-between max-w-4xl mx-auto p-4 md:p-8">
        <Link className="flex no-underline text-white" to="/">
          <span className="font-bold text-xl tracking-tight">
            {site.siteMetadata.title}
          </span>
        </Link>

        <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <nav
          className={`${
            isExpanded ? `block` : `hidden`
          } md:block md:flex w-full md:w-auto flex-col`}
        >
          {[
            {
              route: `/`,
              title: `Home`
            },
            {
              route: `/about`,
              title: `About`
            },
            {
              route: `/contact`,
              title: `Contact`
            }
          ].map(link => (
            <Link
              className="block md:inline-block mt-4 md:mt-0 no-underline text-white"
              key={link.title}
              to={link.route}
            >
              {link.title}
            </Link>
          ))}

            
        </nav>
      </div>
    </aside>
  );
}

export default Header;
