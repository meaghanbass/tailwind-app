import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
    return (
        <Layout>
        <div>
            <h1 className="font-bold">
            Pages
            </h1>
            {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id}>
                <Link
                to={node.fields.slug}>
                <h3>
                    {node.frontmatter.title}{" "}
                    <span>
                    — {node.frontmatter.date}
                    </span>
                </h3>
                </Link>
            </div>
            ))}
        </div>
        </Layout>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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