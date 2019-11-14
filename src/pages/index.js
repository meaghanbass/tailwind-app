import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import AllFilesQuery from "../components/queries/allfiles"

export default ({ data }) => {
  return (
    <Layout>
      <AllFilesQuery></AllFilesQuery>
      {/* <div>
        <h1>
          HOME
        </h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
              <Link className="underline bold"
              to={node.fields.slug}>
            <h3>
              {node.frontmatter.title}{" "}
            </h3>
            </Link>
          </div>
        ))}
      </div> */}
    </Layout>
  )
}

// export const query = graphql`
//   query {
//     allMarkdownRemark {
//       totalCount
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date
//           }
//           fields {
//             slug
//           }
//         }
//       }
//     }
//   }
// `