import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import Layout from "../layout"

// export default ({ data }) => {
//   return (
//     <Layout>
//       <div>
//           <h1>All Files Query</h1>
//             {data.allMarkdownRemark.edges.map(({ node }) => (
//             <div key={node.id}>
//                 <Link className="underline bold"
//                 to={node.fields.slug}>
//                 <h3>
//                 {node.frontmatter.title}{" "}
//                 </h3>
//                 </Link>
//             </div>
//             ))}
//       </div>
//     </Layout>
//   )
// }

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

export default ({ children }) => {
  const data = useStaticQuery(
      graphql`
          query {
              allMarkdownRemark {
                  edges {
                  node {
                      frontmatter {
                      title
                      }
                      fields {
                      slug
                      }
                  }
                  }
              }
          }
      `
  )
  return (
      <React.Fragment>
          <div>
            <h1>All Files Query</h1>
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
        </div>
      </React.Fragment>
  )
}