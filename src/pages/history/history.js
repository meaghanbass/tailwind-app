import React from "react"
import { Link, graphql } from "gatsby"
import SubjectWrapper from "../../components/subject-wrapper"
import SubjectNav from "../../components/subject-nav"
import SubjectContent from "../../components/subject-content"

export default ({ data, children }) => {
    const post = data.markdownRemark
    return (
        <SubjectWrapper>
            {/* <SubjectNav>
                <h1>
                    Pages
                </h1>
                <div>
                    {data.allMarkdownRemark.edges.map(({ node }) => (
                        <div key={node.id}>
                            <Link className="underline bold"
                            to={node.fields.slug}>
                            
                                {node.frontmatter.title}{" "}
                            
                            </Link>
                        </div>
                    ))}
                </div>
            </SubjectNav>
            <SubjectContent>
                {children}
            </SubjectContent> */}
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
                date
            }
            fields {
                slug
            }
            }
        }
        }
    }
`