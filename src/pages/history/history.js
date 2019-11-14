import React from "react"
import { Link, graphql } from "gatsby"
import SubjectWrapper from "../../components/subject-wrapper"

export default ({ data }) => {
    const post = data.markdownRemark
    return (
        <SubjectWrapper>
        <h1>
            Pages
        </h1>
        <div>
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
        </SubjectWrapper>
    )
}

export const query = graphql`
    query {
    allMarkdownRemark {
        totalCount
        edges {
            node {
            id
            frontmatter {
                title
                date(formatString: "DD MMMM, YYYY")
            }
            fields {
                slug
            }
            }
        }
        }
    }
`