import { graphql, useStaticQuery, Link } from "gatsby";
import React, { useState } from "react";
import AllPages from "../pages/my-files"
import "../css/style.css"

function SubjectNav({ children }) {
//   const [isExpanded, toggleExpansion] = useState(false);
//   const { site } = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `);

    return (
        <aside id="subject-nav" className="relative bg-gray-700 w-screen w-15vw flex md:justify-center md:h-screen text-red-600">
            {children}
        </aside>
    );
}

export default SubjectNav;
